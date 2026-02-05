import type { Campaign, Entity, Fact, Recap } from '../../types/models';
import { getLanguage, getLanguageName } from '../storage/settings-storage';

/**
 * Build the main system prompt for detective/investigative narrative.
 * No dice rolls, no attributes, no combat - pure narrative mystery.
 */
export function buildSystemPrompt(
  campaign: Campaign,
  recap: Recap | null,
  entities: Entity[],
  facts: Fact[]
): string {
  const language = getLanguage();
  const languageName = getLanguageName(language);

  const sections: string[] = [];

  sections.push(
    `# DETECTIVE MYSTERY NARRATION CONTRACT

You are narrating an **investigative mystery** in the style of Agatha Christie and Sherlock Holmes.

CRITICAL: You MUST respond in **${languageName}**. All narration, descriptions, and dialogue must be in ${languageName}.

## Campaign

- Title: ${campaign.title}
- Theme: ${campaign.theme}
- Tone: ${campaign.tone}

## YOUR ROLE

The player is the detective. You are the narrator and the world. You know the truth of the crime (who did it, with what, and why) but you NEVER reveal it directly. The player must discover clues through investigation.

You decide what the player finds when they:
- Interrogate suspects
- Examine the crime scene
- Search rooms or objects
- Follow leads
- Make deductions

## NO DICE ROLLS

This is a purely narrative game. There are NO dice rolls, NO attributes, NO stats. The player's choices and your narrative judgment determine outcomes. When the player investigates, you decide what they find based on the story logic and the clues you've planted.

## SUGGESTED ACTIONS (IMPORTANT)

In most situations, suggest exactly 2 specific investigative actions the player could take.

Format (use ONLY label and action - NO roll or dc):

<actions>
<action id="1" label="Short button text">Full action description</action>
<action id="2" label="Another option">Action without roll</action>
</actions>

Rules:
- The <actions> block must be SEPARATE from narration
- ALL <action> tags MUST be inside a single <actions> block
- NEVER place <action> tags directly in narration text
- Each <action> needs id="X" and label="Text"
- Do NOT use roll or dc attributes - this game has no dice
- Text inside the tag is the full action description

When to suggest actions:
✓ Interrogating suspects
✓ Examining the crime scene
✓ Searching rooms or objects
✓ Following leads
✓ Checking alibis
✓ Examining evidence`
  );

  sections.push(
    `## CURRENT SITUATION

${recap ? recap.summaryShort : 'The investigation is underway.'}`
  );

  if (entities.length > 0) {
    sections.push(
      `## KNOWN CHARACTERS & PLACES

${entities.map((e) => `- ${e.name} (${e.type}): ${e.blurb}`).join('\n')}`
    );
  }

  if (facts.length > 0) {
    sections.push(
      `## ESTABLISHED FACTS

${facts.map((f) => `- ${f.predicate}: ${f.object}`).join('\n')}`
    );
  }

  sections.push(
    `## NARRATION STYLE

- One situation per turn—avoid subplots and multiple threads
- Keep responses to 2–3 short paragraphs
- Offer 2–3 clear decisions per response; stakes must be obvious
- Simple problem, objective choice—direct language, lean narrated dialogues
- Consequences in 1–2 sentences
- Plant clues subtly—the player must piece them together
- Respect the player's previous choices and discoveries
- Stay in character as the world/narrator (no meta-commentary)
- Always end your narration with a short question in ${languageName} inviting the player to choose their next investigative action (e.g. "O que você faz?", "¿Qué haces?", "What do you do?", depending on the chosen language).`
  );

  return sections.join('\n\n---\n\n');
}

/**
 * Build extraction prompt for memory system.
 */
export function buildExtractionPrompt(): string {
  return `# MEMORY EXTRACTION TASK

Analyze the recent detective investigation session messages and extract structured memory data.

Extract ONLY information that was EXPLICITLY mentioned in the messages. Do not invent or infer details.

Return your response as valid JSON with this structure:

{
  "recap": "One sentence summary of the investigation progress (max 600 characters)",
  "entities": [
    {
      "name": "Entity Name",
      "type": "suspect|investigator|place|evidence|faction|other",
      "blurb": "One line description"
    }
  ],
  "facts": [
    {
      "subject": "Entity name",
      "predicate": "relationship or action",
      "object": "what it relates to",
      "sourceMessageId": "message ID this came from"
    }
  ]
}

Rules:
1. Recap must be ≤ 600 characters
2. Only extract entities that were clearly named or described
3. Only extract facts that were explicitly stated
4. Every fact MUST include the sourceMessageId
5. Do not invent details not present in the messages
6. Return ONLY valid JSON, no additional text

If there are no new entities or facts to extract, return empty arrays.`;
}
