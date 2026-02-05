import { getClaudeClient } from './claude-client';
import { getGeminiClient } from './gemini-client';
import { getAIProvider } from '../storage/api-key-storage';
import { getLanguage } from '../storage/settings-storage';
import { ONBOARDING_CAMPAIGN_ID } from '../onboarding/onboarding-content';
import type { MysteryAnswer } from '../../types/models';

export interface ArrestGuess {
  criminal: string;
  weapon: string;
  motive: string;
}

export interface ArrestVerificationResult {
  correct: boolean;
  narrative: string;
}

export interface HypothesisFeedback {
  correctCount: number; // 0, 1, 2, or 3
  narrative: string;
}

/**
 * Ask the AI to verify the player's arrest guess against the secret answer.
 * The AI acts as judge and generates appropriate narrative (victory or penalty).
 */
function doFallbackVerification(
  secret: MysteryAnswer,
  guess: ArrestGuess,
  attemptsRemaining: number,
  lang: string
): ArrestVerificationResult {
  const normalized = (s: string) => s.toLowerCase().trim().replace(/\s+/g, ' ');
  const criminalMatch = normalized(guess.criminal).includes(normalized(secret.criminal)) ||
    normalized(secret.criminal).includes(normalized(guess.criminal));
  const weaponMatch = normalized(guess.weapon).includes(normalized(secret.weapon)) ||
    normalized(secret.weapon).includes(normalized(guess.weapon));
  const motiveMatch = normalized(guess.motive).includes(normalized(secret.motive)) ||
    normalized(secret.motive).includes(normalized(guess.motive));

  const correct = criminalMatch && weaponMatch && motiveMatch;

  const fallbackNarrative = correct
    ? (lang === 'pt' ? 'Você acertou! O culpado é preso e o caso é encerrado.' :
        lang === 'es' ? '¡Correcto! El culpable es arrestado y el caso se cierra.' :
        'You got it right! The culprit is arrested and the case is closed.')
    : (lang === 'pt' ? `Sua acusação estava incorreta. ${attemptsRemaining > 0 ? `Você tem ${attemptsRemaining} tentativa(s) restante(s).` : 'O criminoso escapou. O caso permanece em aberto.'}` :
        lang === 'es' ? `Tu acusación era incorrecta. ${attemptsRemaining > 0 ? `Te quedan ${attemptsRemaining} intento(s).` : 'El criminal escapó. El caso sigue abierto.'}` :
        `Your accusation was wrong. ${attemptsRemaining > 0 ? `You have ${attemptsRemaining} attempt(s) remaining.` : 'The criminal has escaped. The case remains unsolved.'}`);

  return { correct, narrative: fallbackNarrative };
}

export async function verifyArrest(
  secret: MysteryAnswer,
  guess: ArrestGuess,
  attemptsRemaining: number,
  languageName: string
): Promise<ArrestVerificationResult> {
  const lang = getLanguage();

  // Onboarding: use direct comparison, no AI
  if (secret.campaignId === ONBOARDING_CAMPAIGN_ID) {
    return doFallbackVerification(secret, guess, attemptsRemaining, lang);
  }

  const provider = getAIProvider();
  const client = provider === 'gemini' ? getGeminiClient() : getClaudeClient();

  const systemPrompt = `You are the judge of a detective mystery game. You know the correct solution. The player has made an accusation.

CORRECT ANSWER (do NOT reveal to the player in your response):
- Criminal: ${secret.criminal}
- Weapon: ${secret.weapon}
- Motive: ${secret.motive}

PLAYER'S ACCUSATION:
- Suspect: ${guess.criminal}
- Weapon: ${guess.weapon}
- Motive: ${guess.motive}

You must determine if the player's accusation is CORRECT. Be lenient with matching:
- "The butler" matches "James, the butler" or "the butler"
- "Candlestick" matches "a candlestick" or "the candlestick"
- Minor wording variations should count as correct if the meaning is the same

Respond with ONLY valid JSON (no markdown, no code blocks):
{
  "correct": true or false,
  "narrative": "Your narrative in ${languageName}. If correct: brief triumphant moment, culprit's reaction, case closed. If wrong: brief failed accusation, consequences. Do NOT reveal the actual criminal/weapon/motive when wrong. Keep it 1-2 short paragraphs (3-5 sentences total). Brevity is essential."
}`;

  const userPrompt = `Verify this accusation. Is it correct?`;

  try {
    const response = await client.sendMessageSync(systemPrompt, [
      { role: 'user', content: userPrompt },
    ]);

    let jsonText = response;
    jsonText = jsonText.replace(/```json\s*/g, '').replace(/```\s*/g, '');
    const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Failed to extract JSON from AI response');
    }

    const parsed = JSON.parse(jsonMatch[0]) as ArrestVerificationResult;

    if (typeof parsed.correct !== 'boolean' || !parsed.narrative) {
      throw new Error('AI response missing required fields');
    }

    return parsed;
  } catch (error) {
    console.error('Arrest verification failed:', error);
    return doFallbackVerification(secret, guess, attemptsRemaining, lang);
  }
}

/**
 * Test a hypothesis without using arrest attempts.
 * Returns feedback on how close the player is (0–3 correct) with narrative.
 * Never reveals the actual answer or which elements are wrong.
 */
function doFallbackHypothesis(
  secret: MysteryAnswer,
  guess: ArrestGuess,
  lang: string
): HypothesisFeedback {
  const normalized = (s: string) => s.toLowerCase().trim().replace(/\s+/g, ' ');
  const criminalMatch = normalized(guess.criminal).includes(normalized(secret.criminal)) ||
    normalized(secret.criminal).includes(normalized(guess.criminal));
  const weaponMatch = normalized(guess.weapon).includes(normalized(secret.weapon)) ||
    normalized(secret.weapon).includes(normalized(guess.weapon));
  const motiveMatch = normalized(guess.motive).includes(normalized(secret.motive)) ||
    normalized(secret.motive).includes(normalized(guess.motive));

  const correctCount = [criminalMatch, weaponMatch, motiveMatch].filter(Boolean).length;

  const fallbackByCount: Record<string, Record<number, string>> = {
    pt: {
      3: 'Sua teoria está correta. Considere dar voz de prisão.',
      2: 'Você está no caminho certo. Dois elementos batem.',
      1: 'Parcialmente correto. Um elemento faz sentido.',
      0: 'Você está longe da verdade. Continue investigando.',
    },
    es: {
      3: 'Tu teoría es correcta. Considera hacer el arresto formal.',
      2: 'Vas por buen camino. Dos elementos coinciden.',
      1: 'Parcialmente correcto. Un elemento tiene sentido.',
      0: 'Estás lejos de la verdad. Sigue investigando.',
    },
    en: {
      3: 'Your theory is correct. Consider making the formal arrest.',
      2: 'You\'re on the right track. Two elements fit.',
      1: 'Partially correct. One element makes sense.',
      0: 'You\'re far from the truth. Keep investigating.',
    },
  };

  const texts = fallbackByCount[lang] || fallbackByCount.en;
  const narrative = texts[correctCount] ?? texts[0];

  return { correctCount, narrative };
}

export async function verifyHypothesis(
  secret: MysteryAnswer,
  guess: ArrestGuess,
  languageName: string
): Promise<HypothesisFeedback> {
  const lang = getLanguage();

  if (secret.campaignId === ONBOARDING_CAMPAIGN_ID) {
    return doFallbackHypothesis(secret, guess, lang);
  }

  const provider = getAIProvider();
  const client = provider === 'gemini' ? getGeminiClient() : getClaudeClient();

  const systemPrompt = `You are the judge of a detective mystery game. You know the correct solution. The player is testing a HYPOTHESIS (not making an arrest). Give feedback on how close they are.

CORRECT ANSWER (do NOT reveal to the player):
- Criminal: ${secret.criminal}
- Weapon: ${secret.weapon}
- Motive: ${secret.motive}

PLAYER'S HYPOTHESIS:
- Suspect: ${guess.criminal}
- Weapon: ${guess.weapon}
- Motive: ${guess.motive}

Compare and count how many of the 3 elements are correct (be lenient with wording). Then respond with JSON:

{
  "correctCount": 0 or 1 or 2 or 3,
  "narrative": "Short narrative in ${languageName} (1-2 sentences). Say if they're close or far, without revealing which elements are right or wrong. E.g. 'You're on the right track' or 'You're far from the truth' or 'Two elements fit—keep digging.'"
}

Respond with ONLY valid JSON, no markdown.`;

  const userPrompt = `Evaluate this hypothesis. How close is the player?`;

  try {
    const response = await client.sendMessageSync(systemPrompt, [
      { role: 'user', content: userPrompt },
    ]);

    let jsonText = response.replace(/```json\s*/g, '').replace(/```\s*/g, '');
    const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('Failed to extract JSON');

    const parsed = JSON.parse(jsonMatch[0]) as HypothesisFeedback;
    const count = Math.min(3, Math.max(0, Number(parsed.correctCount) || 0));

    return {
      correctCount: count,
      narrative: parsed.narrative?.trim() || doFallbackHypothesis(secret, guess, lang).narrative,
    };
  } catch (error) {
    console.error('Hypothesis verification failed:', error);
    return doFallbackHypothesis(secret, guess, lang);
  }
}
