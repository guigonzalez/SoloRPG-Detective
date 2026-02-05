import { getClaudeClient } from './claude-client';
import { getGeminiClient } from './gemini-client';
import { getAIProvider } from '../storage/api-key-storage';
import { getLanguage, getLanguageName } from '../storage/settings-storage';
import type { MysteryAnswer } from '../../types/models';
import type { Campaign } from '../../types/models';

export interface MysteryGenerationResult {
  openingNarrative: string;
  secret: {
    criminal: string;
    weapon: string;
    motive: string;
  };
}

/**
 * Generate a mystery case with opening narrative and secret answer.
 * The secret is stored separately and never exposed to the player.
 */
export async function generateMystery(campaign: Campaign): Promise<MysteryGenerationResult> {
  const provider = getAIProvider();
  const client = provider === 'gemini' ? getGeminiClient() : getClaudeClient();
  const language = getLanguage();
  const languageName = getLanguageName(language);

  const systemPrompt = `You are a master of detective fiction in the style of Agatha Christie and Arthur Conan Doyle (Sherlock Holmes).

IMPORTANT: You MUST generate everything in ${languageName}. The opening narrative and all story elements must be in ${languageName}.

Your task is to create a murder mystery case. The case must have:
- A clear CRIMINAL (one specific person - use their full name or a clear identifier like "the butler" that uniquely identifies them)
- A specific WEAPON used in the crime
- A clear MOTIVE for the crime

Style: ${campaign.tone}
Setting/Theme: ${campaign.theme}

Create an engaging opening that sets the scene: the crime has been discovered, the detective (the player) arrives. One central challenge with doubts around it—no subplots. Introduce the setting, the victim, and the key suspects. Drop subtle clues but do NOT reveal the solution. Use objective language, avoid circumlocution. The narrative should be 2–3 paragraphs.

Return ONLY valid JSON (no markdown, no code blocks) with this exact structure:
{
  "openingNarrative": "Your narrative text in ${languageName}...",
  "secret": {
    "criminal": "Exact name or identifier of the culprit (e.g. 'James Wilson' or 'the butler')",
    "weapon": "Exact weapon used (e.g. 'candlestick' or 'poisoned wine')",
    "motive": "Clear motive (e.g. 'inheritance' or 'revenge for betrayal')"
  }
}

CRITICAL: The criminal, weapon, and motive in "secret" must be consistent with clues you can plant in the narrative. Use specific, unambiguous terms.`;

  const userPrompt = `Generate a murder mystery for: ${campaign.title}

Theme: ${campaign.theme}
Tone: ${campaign.tone}`;

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

    const parsed = JSON.parse(jsonMatch[0]) as MysteryGenerationResult;

    if (!parsed.openingNarrative || !parsed.secret?.criminal || !parsed.secret?.weapon || !parsed.secret?.motive) {
      throw new Error('AI response missing required fields');
    }

    return parsed;
  } catch (error) {
    console.error('Mystery generation failed:', error);
    return getFallbackMystery(campaign, languageName);
  }
}

function getFallbackMystery(_campaign: Campaign, languageName: string): MysteryGenerationResult {
  const fallbacks: Record<string, MysteryGenerationResult> = {
    en: {
      openingNarrative: `The grand manor of Blackwood Hall has seen better days. Lord Edmund Blackwood lies dead in his study, discovered this morning by the butler. The police have cordoned off the scene, but they've called you in—a renowned detective known for solving the impossible.

The family has gathered in the drawing room: Lady Blackwood, pale and composed; the heir, Robert, nervously pacing; the secretary, Miss Hartley, clutching her handkerchief; and the groundskeeper, old Mr. Graves, standing by the window. Each has an alibi. Each has a motive. And somewhere in this house, the truth waits to be uncovered.

You examine the body. Lord Blackwood was struck from behind. The weapon is missing. The study shows signs of a struggle—a overturned chair, scattered papers. Outside, the rain continues to fall, as it has for three days.`,
      secret: {
        criminal: 'the butler',
        weapon: 'fireplace poker',
        motive: 'blackmail - Lord Blackwood had discovered his past',
      },
    },
    pt: {
      openingNarrative: `A mansão Blackwood Hall já viu dias melhores. Lord Edmund Blackwood está morto em seu estudo, descoberto esta manhã pelo mordomo. A polícia isolou a cena, mas chamou você—um detetive renomado conhecido por resolver o impossível.

A família se reuniu na sala de estar: Lady Blackwood, pálida e composta; o herdeiro Robert, nervosamente andando; a secretária Miss Hartley, segurando seu lenço; e o jardineiro, o velho Sr. Graves, à janela. Cada um tem um álibi. Cada um tem um motivo. E em algum lugar desta casa, a verdade espera ser descoberta.

Você examina o corpo. Lord Blackwood foi atingido por trás. A arma está desaparecida. O estudo mostra sinais de luta—uma cadeira tombada, papéis espalhados.`,
      secret: {
        criminal: 'o mordomo',
        weapon: 'atiçador de lareira',
        motive: 'chantagem - Lord Blackwood havia descoberto seu passado',
      },
    },
    es: {
      openingNarrative: `La gran mansión de Blackwood Hall ha visto mejores días. Lord Edmund Blackwood yace muerto en su estudio, descubierto esta mañana por el mayordomo. La policía ha acordonado la escena, pero te han llamado a ti—un detective renombrado conocido por resolver lo imposible.

La familia se ha reunido en el salón: Lady Blackwood, pálida y compuesta; el heredero Robert, caminando nerviosamente; la secretaria Miss Hartley, agarrando su pañuelo; y el jardinero, el viejo Sr. Graves, junto a la ventana. Cada uno tiene una coartada. Cada uno tiene un motivo. Y en algún lugar de esta casa, la verdad espera ser descubierta.`,
      secret: {
        criminal: 'el mayordomo',
        weapon: 'atizador de chimenea',
        motive: 'chantaje - Lord Blackwood había descubierto su pasado',
      },
    },
  };

  return fallbacks[languageName] || fallbacks.en;
}

/**
 * Convert mystery generation result to MysteryAnswer for storage
 */
export function toMysteryAnswer(campaignId: string, result: MysteryGenerationResult): MysteryAnswer {
  return {
    campaignId,
    criminal: result.secret.criminal.trim(),
    weapon: result.secret.weapon.trim(),
    motive: result.secret.motive.trim(),
    attemptsUsed: 0,
    createdAt: Date.now(),
  };
}
