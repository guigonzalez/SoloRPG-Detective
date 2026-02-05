/**
 * Translation keys and text for all supported languages
 */

import { PRESET_CAMPAIGNS_EN, PRESET_CAMPAIGNS_PT, PRESET_CAMPAIGNS_ES } from './preset-campaigns-i18n';

export type Language = 'en' | 'pt' | 'es';

export interface Translations {
  // Common
  common: {
    back: string;
    settings: string;
    confirm: string;
    cancel: string;
    close: string;
    save: string;
    delete: string;
    edit: string;
    loading: string;
    error: string;
    expand: string;
    collapse: string;
    aiOfflineNotice: string;
    aiErrorNotice: string;
  };

  campaignCard: {
    deleteConfirm: string;
    theme: string;
    tone: string;
  };

  // Landing / Hero
  landing: {
    badge: string;
    title: string;
    tagline: string;
    description: string;
    quickStartCta: string;
    tutorialCta: string;
    createCustom: string;
    firstTimeHint: string;
  };

  // Campaign List
  campaignList: {
    title: string;
    newCampaign: string;
    noCampaigns: string;
    createFirst: string;
    lastPlayed: string;
    selectCampaign: string;
    quickStart: string;
  };

  presetCampaigns: {
    title: string;
    subtitle: string;
    difficulty: string;
    difficultyEasy: string;
    difficultyNormal: string;
    difficultyHard: string;
    searchPlaceholder: string;
    all: string;
    play: string;
    noResults: string;
    tags: Record<string, string>;
    campaigns: Record<string, { title: string; theme: string; tone: string }>;
  };

  // Campaign Interface
  campaign: {
    endSessionConfirm: string;
    sessionSaved: string;
    startFallback: string;
  };

  gameOver: {
    title: string;
    message: string;
    returnToCampaigns: string;
  };

  // Mechanical resolution (d20 vs DC)
  resolution: {
    criticalFailure: string;
    failure: string;
    success: string;
    criticalSuccess: string;
    summary: string; // e.g. "{outcome} (Total {total} vs DC {dc}, margin {margin})"
  };

  // Campaign Creation
  campaignCreation: {
    title: string;
    subtitle: string;
    campaignTitle: string;
    campaignTitlePlaceholder: string;
    mysteryStyle: string;
    generateWithAI: string;
    generating: string;
    selectStyle: string;
    system: string;
    narrativeTheme: string;
    narrativeThemeNotice: string;
    selectNarrativeTheme: string;
    theme: string;
    themePlaceholder: string;
    tone: string;
    tonePlaceholder: string;
    difficulty: string;
    difficultyEasy: string;
    difficultyNormal: string;
    difficultyHard: string;
    startCampaign: string;
    creating: string;
    generateFailed: string;
    mysteryStyles: Record<string, string>;
  };

  // Campaign Tones
  tones: {
    dramatic: string;
    lighthearted: string;
    dark: string;
    comedic: string;
    mysterious: string;
    epic: string;
  };

  // Character Creation
  characterCreation: {
    title: string;
    characterName: string;
    characterNamePlaceholder: string;
    attributes: string;
    randomize: string;
    range: string;
    createCharacter: string;
    cancel: string;
    nameRequired: string;
    backgroundOptional: string;
    backstory: string;
    backstoryPlaceholder: string;
    personality: string;
    personalityPlaceholder: string;
    goals: string;
    goalsPlaceholder: string;
    fears: string;
    fearsPlaceholder: string;
    basicTab: string;
    attributesTab: string;
    inventoryTab: string;
    inventoryHint: string;
    backgroundTab: string;
    generateWithAI: string;
    generating: string;
    apiKeyRequired: string;
    invalidApiKey: string;
    generationFailed: string;
  };

  // Character Panel
  characterPanel: {
    level: string;
    experience: string;
    hitPoints: string;
    attributes: string;
    maxLevel: string;
  };

  // Level Up Modal
  levelUp: {
    title: string;
    congratulations: string;
    youAreNowLevel: string;
    allocatePoints: string;
    allocatePoint: string;
    pointsRemaining: string;
    confirmLevelUp: string;
  };

  // Sidebar
    sidebar: {
      gameInfo: string;
    menu: string;
    endSession: string;
    character: string;
    arrest: string;
    recap: string;
    entities: string;
    notes: string;
  };

  // Arrest Panel (Voz de Prisão)
  arrest: {
    title: string;
    testHypothesis: string;
    voiceOfArrest: string;
    attemptsRemaining: string;
    noMysteryYet: string;
    accusation: string;
    hypothesisHint: string;
    selectHint: string;
    commonMotives: string;
    suspect: string;
    suspectPlaceholder: string;
    weapon: string;
    weaponPlaceholder: string;
    motive: string;
    motivePlaceholder: string;
    submit: string;
    caseSolvedMessage: string;
    caseSolvedTitle: string;
    caseSolvedAnswer: string;
    caseFailedTitle: string;
    caseFailedMessage: string;
    backToCampaigns: string;
  };

  // Recap Panel
  recapPanel: {
    title: string;
    noRecap: string;
    update: string;
    updating: string;
    clickUpdate: string;
    progressTracks: string;
  };

  // Entities Panel
  entitiesPanel: {
    title: string;
    noEntities: string;
    empty: string;
    updateHint: string;
    suspect: string;
    investigator: string;
    place: string;
    evidence: string;
    faction: string;
    other: string;
  };

  // Notes Panel
  notesPanel: {
    title: string;
    placeholder: string;
    saving: string;
  };

  // Chat
  chat: {
    messagePlaceholder: string;
    aiThinking: string;
    suggestedActions: string;
    rolled: string;
    rollResult: string;
    dc: string;
    adventureBegins: string;
    firstActionPrompt: string;
    narratorTyping: string;
    narratorThinking: string;
    resendMessage: string;
    continueNarration: string;
  };

  // XP System
  xp: {
    gained: string;
    lost: string;
    easySuccess: string;
    mediumSuccess: string;
    hardSuccess: string;
    veryHardSuccess: string;
    criticalSuccess: string;
    storyProgression: string;
    levelUp: string;
    levelDown: string;
    youAreNowLevel: string;
  };

  // HP
  combat: {
    takeDamage: string;
    recover: string;
    armorReduced: string;
    damageRoll: string;
  };

  // Inventory
  inventory: {
    title: string;
    itemAcquired: string;
    useItem: string;
    noItems: string;
    weapon: string;
    armor: string;
    equip: string;
    unequip: string;
    equipped: string;
  };

  // Localized item names (by item id)
  itemNames: Record<string, string>;

  // Misfortune (Amarra - anti-cheat binding)
  misfortune: {
    claimedRollNotice: string;
    effectiveResult: string;
    label: string;
    tooltip: string;
  };

  // Settings
  recap: {
    memoryUpdated: string;
    extractedRecap: string;
    extractedEntities: string;
    extractedFacts: string;
    yes: string;
    no: string;
  };

  apiKeySetup: {
    welcome: string;
    intro: string;
    introPrivacy: string;
    aiProvider: string;
    anthropicKey: string;
    googleKey: string;
    noKeyTitle: string;
    claudeStep1: string;
    claudeStep2: string;
    claudeStep3: string;
    claudeStep4: string;
    geminiStep1: string;
    geminiStep2: string;
    geminiStep3: string;
    geminiStep4: string;
    claudeNote: string;
    geminiNote: string;
    saveAndStart: string;
    saving: string;
    changeLater: string;
    tryTutorialFirst: string;
    enterKey: string;
    invalidClaudeFormat: string;
    invalidGeminiFormat: string;
  };

  settings: {
    title: string;
    apiKeyConfigTitle: string;
    providerLabel: string;
    status: string;
    configured: string;
    notConfigured: string;
    hideKey: string;
    showKey: string;
    saveNewKey: string;
    removeKey: string;
    removeKeyConfirm: string;
    apiKeySaved: string;
    generalSettings: string;
    languageHint: string;
    language: string;
    aiProvider: string;
    apiKey: string;
    apiKeyPlaceholder: string;
    apiKeyConfiguredPlaceholder: string;
    theme: string;
    themeGreen: string;
    themeAmber: string;
    themeClassic: string;
    saveSettings: string;
    clearData: string;
    clearDataConfirm: string;
    exportCampaign: string;
    importCampaign: string;
    exportSuccess: string;
    importSuccess: string;
    importFailed: string;
    selectFile: string;
  };

  // Errors
  errors: {
    unknown: string;
    noActiveCampaign: string;
    campaignNotFound: string;
    failedToCreateCharacter: string;
    failedToLevelUp: string;
    failedToUpdateRecap: string;
    failedToSaveSession: string;
    failedToVerifyArrest: string;
    apiKeyRequired: string;
    invalidDiceNotation: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    common: {
      back: 'Back',
      settings: 'Settings',
      confirm: 'Confirm',
      cancel: 'Cancel',
      close: 'Close',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      loading: 'Loading...',
      error: 'Error',
      expand: 'Expand',
      collapse: 'Collapse',
      aiOfflineNotice: 'AI service temporarily unavailable. Using offline mode.',
      aiErrorNotice: 'AI service error. You can continue playing with the fallback narration.',
    },

    campaignCard: {
      deleteConfirm: 'Delete case "{title}"? This cannot be undone.',
      theme: 'Theme',
      tone: 'Tone',
    },

    landing: {
      badge: 'Detective Mystery Solo',
      title: 'Solo Detective',
      tagline: 'Investigate. Deduce. Solve.',
      description: 'Solve murder mysteries solo with an AI narrator. Choose from 20 ready-to-play cases or create your own. Investigate, interrogate suspects, and crack the case.',
      quickStartCta: 'Start Playing Now',
      tutorialCta: 'Tutorial (no API key needed)',
      createCustom: 'Create Custom Case',
      firstTimeHint: 'New here? Click above to jump into a ready-made mystery in seconds.',
    },

    campaignList: {
      title: 'Solo Detective',
      newCampaign: 'New Case',
      noCampaigns: 'No cases yet',
      createFirst: 'Create your first case!',
      lastPlayed: 'Last played',
      selectCampaign: 'Select a case to continue',
      quickStart: 'Quick Start (20 cases)',
    },

    presetCampaigns: {
      title: 'Quick Start Mysteries',
      subtitle: '20 mystery scenarios. Click Play to create and start your investigation.',
      difficulty: 'Difficulty',
      difficultyEasy: 'Easy (5 attempts)',
      difficultyNormal: 'Normal (3 attempts)',
      difficultyHard: 'Hard (2 attempts)',
      searchPlaceholder: 'Search campaigns...',
      all: 'All',
      play: 'Play',
      noResults: 'No campaigns match your search.',
      tags: { christie: 'Christie', holmes: 'Holmes', express: 'Express', rural: 'Rural', noir: 'Noir', cozy: 'Cozy', spy: 'Spy', supernatural: 'Supernatural', historical: 'Historical', locked: 'Locked Room', heist: 'Heist' },
      campaigns: PRESET_CAMPAIGNS_EN,
    },

    campaign: {
      endSessionConfirm: 'End this session? This will save your progress and extract important clues from your investigation.',
      sessionSaved: 'Session ended! Your progress has been saved.',
      startFallback: 'Welcome to your investigation.\n\nTheme: {theme}\nTone: {tone}\n\nThe case awaits. What would you like to do?',
    },

    gameOver: {
      title: 'Game Over',
      message: 'Your character has fallen. Hit points reached zero.',
      returnToCampaigns: 'Return to campaigns',
    },

    resolution: {
      criticalFailure: 'Critical failure',
      failure: 'Failure',
      success: 'Success',
      criticalSuccess: 'Critical success',
      summary: '{outcome} (Total {total} vs DC {dc}, margin {margin})',
    },

    campaignCreation: {
      title: 'Create New Campaign',
      subtitle: 'Create a custom mystery case',
      campaignTitle: 'Campaign Title',
      campaignTitlePlaceholder: 'e.g. Murder at Blackwood Hall',
      mysteryStyle: 'Mystery Style',
      generateWithAI: 'Generate with AI',
      generating: 'Generating...',
      selectStyle: 'Select style...',
      system: 'Mystery Type',
      narrativeTheme: 'Narrative Theme',
      narrativeThemeNotice: 'This is a purely narrative mystery game. No dice, no stats—just investigation and deduction. Your choices and the clues you find determine the outcome.',
      selectNarrativeTheme: 'Select a narrative theme...',
      theme: 'Theme & Setting',
      themePlaceholder: 'Describe the setting, victim, suspects...',
      tone: 'Tone',
      tonePlaceholder: 'e.g. Elegant, suspenseful, gritty',
      difficulty: 'Difficulty',
      difficultyEasy: 'Easy (5 attempts)',
      difficultyNormal: 'Normal (3 attempts)',
      difficultyHard: 'Hard (2 attempts)',
      startCampaign: 'Start Campaign',
      creating: 'Creating...',
      generateFailed: 'Failed to generate',
      mysteryStyles: {
        christie: 'Agatha Christie (Manor, Country House)',
        holmes: 'Sherlock Holmes (Victorian London)',
        express: 'Orient Express (Train)',
        rural: 'Rural Mystery (Village)',
        noir: 'Detective Noir (1940s)',
      },
    },

    tones: {
      dramatic: 'Dramatic',
      lighthearted: 'Lighthearted',
      dark: 'Dark & Gritty',
      comedic: 'Comedic',
      mysterious: 'Mysterious',
      epic: 'Epic',
    },

    characterCreation: {
      title: 'Create Your Character',
      characterName: 'Character Name',
      characterNamePlaceholder: 'Enter name...',
      attributes: 'Attributes',
      randomize: 'Randomize',
      range: 'Range',
      createCharacter: 'Create Character',
      cancel: 'Cancel',
      nameRequired: 'Please enter a character name',
      backgroundOptional: 'Character Background (Optional)',
      backstory: 'Backstory',
      backstoryPlaceholder: 'Who is your character? Where do they come from?',
      personality: 'Personality',
      personalityPlaceholder: 'E.g., brave, curious, reckless',
      goals: 'Goals',
      goalsPlaceholder: 'What does your character want to achieve?',
      fears: 'Fears',
      fearsPlaceholder: 'What does your character fear?',
      basicTab: 'Basic',
      attributesTab: 'Attributes',
      inventoryTab: 'Inventory',
      inventoryHint: 'Select starting items. You can add more during the adventure when the narrator drops them.',
      backgroundTab: 'Background',
      generateWithAI: 'Generate with AI',
      generating: 'Generating...',
      apiKeyRequired: 'Please configure your Claude API key in Settings first.',
      invalidApiKey: 'Invalid API key. Please check your Claude API key in Settings.',
      generationFailed: 'Failed to generate character background. Please try again.',
    },

    characterPanel: {
      level: 'Level',
      experience: 'Experience',
      hitPoints: 'Hit Points',
      attributes: 'Attributes',
      maxLevel: 'MAX',
    },

    levelUp: {
      title: 'LEVEL UP!',
      congratulations: 'Congratulations!',
      youAreNowLevel: 'You are now Level',
      allocatePoints: 'Allocate {count} attribute points',
      allocatePoint: 'Allocate {count} attribute point',
      pointsRemaining: 'Points remaining',
      confirmLevelUp: 'Confirm Level Up',
    },

    sidebar: {
      gameInfo: 'Case Info',
      menu: 'Menu',
      endSession: 'End Session',
      character: 'Character',
      arrest: 'Arrest',
      recap: 'Recap',
      entities: 'Entities',
      notes: 'Notes',
    },

    arrest: {
      title: 'Voice of Arrest',
      testHypothesis: 'Test Hypothesis',
      voiceOfArrest: 'Give Voice of Arrest',
      attemptsRemaining: 'Attempts remaining: {count}',
      noMysteryYet: 'Start the case to make an arrest.',
      accusation: 'Your Accusation',
      hypothesisHint: 'Test your theory without using arrest attempts.',
      selectHint: 'Pick from discovered entities or type your own.',
      commonMotives: 'Inheritance, Revenge, Jealousy, Blackmail, Money, Hatred, Love, Protection, Cover-up',
      suspect: 'Suspect',
      suspectPlaceholder: 'e.g. the butler, James Wilson',
      weapon: 'Weapon',
      weaponPlaceholder: 'e.g. candlestick, poisoned wine',
      motive: 'Motive',
      motivePlaceholder: 'e.g. inheritance, revenge',
      submit: 'Submit Accusation',
      caseSolvedMessage: '**Case solved!** You correctly identified the culprit, weapon and motive.\n\n**The answer:**\n- Culprit: {criminal}\n- Weapon: {weapon}\n- Motive: {motive}',
      caseSolvedTitle: 'Case Solved!',
      caseSolvedAnswer: 'The answer',
      caseFailedTitle: 'Case Failed',
      caseFailedMessage: '**The criminal escaped.** You ran out of attempts.\n\n**The answer was:**\n- Culprit: {criminal}\n- Weapon: {weapon}\n- Motive: {motive}',
      backToCampaigns: 'Back to campaigns',
    },

    recapPanel: {
      title: 'Story So Far',
      noRecap: 'No recap yet. The investigation begins...',
      update: 'Update',
      updating: 'Updating...',
      clickUpdate: 'Click "Update" to generate a story recap from your investigation...',
      progressTracks: 'Progress Tracks',
    },

    entitiesPanel: {
      title: 'Known Entities',
      noEntities: 'No entities discovered yet',
      empty: 'Suspects, investigators, places and evidence will appear here...',
      updateHint: 'Click "Update" in the Recap tab to extract suspects and clues from your investigation!',
      suspect: 'Suspect',
      investigator: 'Investigator',
      place: 'Place',
      evidence: 'Evidence',
      faction: 'Faction',
      other: 'Other',
    },

    notesPanel: {
      title: 'Notes',
      placeholder: 'Jot down ideas, clues, theories...',
      saving: 'Saving...',
    },

    chat: {
      messagePlaceholder: 'Describe your investigation action...',
      aiThinking: 'AI is thinking...',
      suggestedActions: 'Suggested Actions',
      rolled: 'Rolled',
      rollResult: 'Rolled {notation}: {result}',
      dc: 'DC',
      adventureBegins: 'Your investigation begins...',
      firstActionPrompt: 'Describe your first action below',
      narratorTyping: 'STORY · typing...',
      narratorThinking: 'Narrator is thinking',
      resendMessage: 'Resend',
      continueNarration: 'Continue',
    },

    xp: {
      gained: '+{amount} XP',
      lost: '-{amount} XP',
      easySuccess: 'Easy success',
      mediumSuccess: 'Medium success',
      hardSuccess: 'Hard success',
      veryHardSuccess: 'Very hard success',
      criticalSuccess: 'Critical!',
      storyProgression: 'Story progression',
      levelUp: 'LEVEL UP! You are now Level {level}!',
      levelDown: 'Level down! Now Level {level}',
      youAreNowLevel: 'You are now Level {level}',
    },

    combat: {
      takeDamage: 'You take {amount} damage!',
      recover: 'You recover {amount} HP!',
      armorReduced: 'armor -{reduced} (was {original})',
      damageRoll: 'Damage roll {notation}: {result}',
    },

    inventory: {
      title: 'Inventory',
      itemAcquired: 'Acquired: {name} x{quantity}',
      useItem: 'Use',
      noItems: 'No items',
      weapon: 'Weapon',
      armor: 'Armor',
      equip: 'Equip',
      unequip: 'Unequip',
      equipped: 'Equipped',
    },

    itemNames: {
      healing_potion: 'Healing Potion',
      lesser_healing_potion: 'Lesser Healing Potion',
      rope: 'Rope (50ft)',
      lucky_charm: 'Lucky Charm',
      iron_rations: 'Iron Rations',
      torch: 'Torch',
      thieves_tools: "Thieves' Tools",
      shield: 'Shield',
      shortsword: 'Shortsword',
      dagger: 'Dagger',
      staff: 'Staff',
      leather_armor: 'Leather Armor',
      chainmail: 'Chainmail',
      greater_healing_potion: 'Greater Healing Potion',
      magic_sword: 'Magic Sword',
      plate_armor: 'Plate Armor',
      amulet_protection: 'Amulet of Protection',
      gold_coins: 'Gold Coins',
      revolver: 'Revolver',
      flashlight: 'Flashlight',
      med_kit: 'Med-Kit',
      laser_pistol: 'Laser Pistol',
      energy_shield: 'Energy Shield',
      hacking_rig: 'Hacking Rig',
    },

    misfortune: {
      claimedRollNotice: 'Claimed roll detected. Misfortune +1 ({stacks} total). Future rolls penalized.',
      effectiveResult: 'effective {value}',
      label: 'Misfortune',
      tooltip: 'Penalty from claiming roll results. Decays with honest rolls.',
    },

    recap: {
      memoryUpdated: 'Memory updated! Extracted:',
      extractedRecap: 'Recap',
      extractedEntities: 'Entities',
      extractedFacts: 'Facts',
      yes: 'Yes',
      no: 'No',
    },

    apiKeySetup: {
      welcome: 'Welcome to Solo Detective!',
      intro: 'To start investigating, you need to configure your AI provider API key.',
      introPrivacy: 'Your API key is stored locally in your browser and never sent anywhere except directly to the provider\'s API.',
      aiProvider: 'AI Provider',
      anthropicKey: 'Anthropic API Key',
      googleKey: 'Google AI API Key',
      noKeyTitle: 'Don\'t have an API key?',
      claudeStep1: 'Go to',
      claudeStep2: 'Sign up or log in',
      claudeStep3: 'Navigate to "API Keys" section',
      claudeStep4: 'Create a new key and copy it here',
      geminiStep1: 'Go to',
      geminiStep2: 'Sign in with your Google account',
      geminiStep3: 'Click "Create API Key"',
      geminiStep4: 'Copy the key and paste it here',
      claudeNote: 'Note: You\'ll need to add credit to your Anthropic account to use the API.',
      geminiNote: 'Note: Gemini has a generous free tier available.',
      saveAndStart: 'Save and Start Playing',
      saving: 'Saving...',
      changeLater: 'You can change your API key later in the settings',
      tryTutorialFirst: 'Try Tutorial First (no API key needed)',
      enterKey: 'Please enter your API key',
      invalidClaudeFormat: 'Invalid API key format. It should start with "sk-ant-"',
      invalidGeminiFormat: 'Invalid Gemini API key format',
    },

    settings: {
      title: 'Settings',
      apiKeyConfigTitle: 'API Key Configuration',
      providerLabel: 'Provider',
      status: 'Status',
      configured: 'Configured',
      notConfigured: 'Not configured',
      hideKey: 'Hide current key',
      showKey: 'Show current key',
      saveNewKey: 'Save New Key',
      removeKey: 'Remove Key',
      removeKeyConfirm: 'Are you sure you want to remove your API key? You will need to enter it again to use AI features.',
      apiKeySaved: 'API key saved! Reloading...',
      generalSettings: 'General Settings',
      languageHint: 'AI narration and content will be generated in this language',
      language: 'Language',
      aiProvider: 'AI Provider',
      apiKey: 'API Key',
      apiKeyPlaceholder: 'Enter your API key...',
      apiKeyConfiguredPlaceholder: '•••••••• (configured - type to replace)',
      theme: 'Theme',
      themeGreen: '8-bit Green',
      themeAmber: '8-bit Amber',
      themeClassic: 'Classic',
      saveSettings: 'Save Settings',
      clearData: 'Clear All Data',
      clearDataConfirm: 'Are you sure? This will delete all campaigns and characters!',
      exportCampaign: 'Export Campaign',
      importCampaign: 'Import Campaign',
      exportSuccess: 'Campaign exported successfully!',
      importSuccess: 'Campaign imported successfully!',
      importFailed: 'Failed to import campaign',
      selectFile: 'Select File',
    },

    errors: {
      unknown: 'Unknown error',
      noActiveCampaign: 'No active campaign',
      campaignNotFound: 'Campaign not found',
      failedToCreateCharacter: 'Failed to create character',
      failedToLevelUp: 'Failed to confirm level-up',
      failedToUpdateRecap: 'Failed to update recap',
      failedToSaveSession: 'Failed to save session',
      failedToVerifyArrest: 'Failed to verify arrest. Please try again.',
      apiKeyRequired: 'API key is required',
      invalidDiceNotation: 'Invalid dice notation',
    },
  },

  pt: {
    common: {
      back: 'Voltar',
      settings: 'Configurações',
      confirm: 'Confirmar',
      cancel: 'Cancelar',
      close: 'Fechar',
      save: 'Salvar',
      delete: 'Excluir',
      edit: 'Editar',
      loading: 'Carregando...',
      error: 'Erro',
      expand: 'Expandir',
      collapse: 'Recolher',
      aiOfflineNotice: 'Serviço de IA temporariamente indisponível. Usando modo offline.',
      aiErrorNotice: 'Erro no serviço de IA. Você pode continuar jogando com a narração alternativa.',
    },

    campaignCard: {
      deleteConfirm: 'Excluir caso "{title}"? Esta ação não pode ser desfeita.',
      theme: 'Tema',
      tone: 'Tom',
    },

    landing: {
      badge: 'Detetive Solo com IA',
      title: 'Solo Detective',
      tagline: 'Investigue. Deduza. Resolva.',
      description: 'Resolva mistérios de assassinato sozinho com um narrador de IA. Escolha entre 20 casos prontos ou crie o seu. Investigue, interrogue suspeitos e desvende o caso.',
      quickStartCta: 'Jogar Agora',
      tutorialCta: 'Tutorial (sem chave de API)',
      createCustom: 'Criar Caso Personalizado',
      firstTimeHint: 'Novo por aqui? Clique acima para começar um mistério pronto em segundos.',
    },

    campaignList: {
      title: 'Solo Detective',
      newCampaign: 'Novo Caso',
      noCampaigns: 'Nenhum caso ainda',
      createFirst: 'Crie seu primeiro caso!',
      lastPlayed: 'Última jogada',
      selectCampaign: 'Selecione um caso para continuar',
      quickStart: 'Clique e Jogue (20 casos)',
    },

    presetCampaigns: {
      title: 'Clique e Jogue',
      subtitle: '20 cenários de mistério. Clique em Jogar para criar e começar sua investigação.',
      difficulty: 'Dificuldade',
      difficultyEasy: 'Fácil (5 tentativas)',
      difficultyNormal: 'Normal (3 tentativas)',
      difficultyHard: 'Difícil (2 tentativas)',
      searchPlaceholder: 'Buscar campanhas...',
      all: 'Todas',
      play: 'Jogar',
      noResults: 'Nenhuma campanha encontrada.',
      tags: { christie: 'Christie', holmes: 'Holmes', express: 'Expresso', rural: 'Rural', noir: 'Noir', cozy: 'Aconchegante', spy: 'Espionagem', supernatural: 'Sobrenatural', historical: 'Histórico', locked: 'Quarto Fechado', heist: 'Roubo' },
      campaigns: PRESET_CAMPAIGNS_PT,
    },

    campaign: {
      endSessionConfirm: 'Encerrar esta sessão? Isso salvará seu progresso e extrairá pistas importantes da sua investigação.',
      sessionSaved: 'Sessão encerrada! Seu progresso foi salvo.',
      startFallback: 'Bem-vindo à sua investigação.\n\nTema: {theme}\nTom: {tone}\n\nO caso aguarda. O que você gostaria de fazer?',
    },

    gameOver: {
      title: 'Game Over',
      message: 'Seu personagem caiu. Os pontos de vida chegaram a zero.',
      returnToCampaigns: 'Voltar às campanhas',
    },

    resolution: {
      criticalFailure: 'Fracasso crítico',
      failure: 'Fracasso',
      success: 'Sucesso',
      criticalSuccess: 'Sucesso crítico',
      summary: '{outcome} (Total {total} vs CD {dc}, margem {margin})',
    },

    campaignCreation: {
      title: 'Criar Nova Campanha',
      subtitle: 'Crie um caso de mistério personalizado',
      campaignTitle: 'Título da Campanha',
      campaignTitlePlaceholder: 'ex: Assassinato na Mansão Blackwood',
      mysteryStyle: 'Estilo do Mistério',
      generateWithAI: 'Gerar com IA',
      generating: 'Gerando...',
      selectStyle: 'Selecione o estilo...',
      system: 'Tipo de Mistério',
      narrativeTheme: 'Tema Narrativo',
      narrativeThemeNotice: 'Este é um jogo de mistério puramente narrativo. Sem dados, sem estatísticas—apenas investigação e dedução. Suas escolhas e as pistas que encontrar determinam o resultado.',
      selectNarrativeTheme: 'Selecione um tema narrativo...',
      theme: 'Tema e Cenário',
      themePlaceholder: 'Descreva o cenário, vítima, suspeitos...',
      tone: 'Tom',
      tonePlaceholder: 'ex: Elegante, suspense, sombrio',
      difficulty: 'Dificuldade',
      difficultyEasy: 'Fácil (5 tentativas)',
      difficultyNormal: 'Normal (3 tentativas)',
      difficultyHard: 'Difícil (2 tentativas)',
      startCampaign: 'Iniciar Campanha',
      creating: 'Criando...',
      generateFailed: 'Falha ao gerar',
      mysteryStyles: {
        christie: 'Agatha Christie (Mansão, Casa de Campo)',
        holmes: 'Sherlock Holmes (Londres Vitoriana)',
        express: 'Expresso Oriente (Trem)',
        rural: 'Mistério Rural (Vila)',
        noir: 'Detective Noir (Anos 40)',
      },
    },

    tones: {
      dramatic: 'Dramático',
      lighthearted: 'Leve',
      dark: 'Sombrio',
      comedic: 'Cômico',
      mysterious: 'Misterioso',
      epic: 'Épico',
    },

    characterCreation: {
      title: 'Crie Seu Personagem',
      characterName: 'Nome do Personagem',
      characterNamePlaceholder: 'Digite o nome...',
      attributes: 'Atributos',
      randomize: 'Aleatorizar',
      range: 'Intervalo',
      createCharacter: 'Criar Personagem',
      cancel: 'Cancelar',
      nameRequired: 'Por favor, digite um nome para o personagem',
      backgroundOptional: 'História do Personagem (Opcional)',
      backstory: 'História',
      backstoryPlaceholder: 'Quem é seu personagem? De onde ele vem?',
      personality: 'Personalidade',
      personalityPlaceholder: 'Ex.: corajoso, curioso, imprudente',
      goals: 'Objetivos',
      goalsPlaceholder: 'O que seu personagem quer alcançar?',
      fears: 'Medos',
      fearsPlaceholder: 'Do que seu personagem tem medo?',
      basicTab: 'Básico',
      attributesTab: 'Atributos',
      inventoryTab: 'Inventário',
      inventoryHint: 'Selecione os itens iniciais. Você pode obter mais durante a aventura quando o narrador os conceder.',
      backgroundTab: 'História',
      generateWithAI: 'Gerar com IA',
      generating: 'Gerando...',
      apiKeyRequired: 'Por favor, configure sua chave de API do Claude nas Configurações primeiro.',
      invalidApiKey: 'Chave de API inválida. Verifique sua chave de API do Claude nas Configurações.',
      generationFailed: 'Falha ao gerar histórico do personagem. Tente novamente.',
    },

    characterPanel: {
      level: 'Nível',
      experience: 'Experiência',
      hitPoints: 'Pontos de Vida',
      attributes: 'Atributos',
      maxLevel: 'MÁX',
    },

    levelUp: {
      title: 'SUBIU DE NÍVEL!',
      congratulations: 'Parabéns!',
      youAreNowLevel: 'Você agora é Nível',
      allocatePoints: 'Distribua {count} pontos de atributo',
      allocatePoint: 'Distribua {count} ponto de atributo',
      pointsRemaining: 'Pontos restantes',
      confirmLevelUp: 'Confirmar Subida de Nível',
    },

    sidebar: {
      gameInfo: 'Info do Caso',
      menu: 'Menu',
      endSession: 'Encerrar Sessão',
      character: 'Personagem',
      arrest: 'Prisão',
      recap: 'Resumo',
      entities: 'Entidades',
      notes: 'Anotações',
    },

    arrest: {
      title: 'Voz de Prisão',
      testHypothesis: 'Testar Hipótese',
      voiceOfArrest: 'Dar Voz de Prisão',
      attemptsRemaining: 'Tentativas restantes: {count}',
      noMysteryYet: 'Inicie o caso para dar voz de prisão.',
      accusation: 'Sua Acusação',
      hypothesisHint: 'Teste sua teoria sem usar tentativas de prisão.',
      selectHint: 'Escolha entre entidades descobertas ou digite o seu.',
      commonMotives: 'Herança, Vingança, Ciúmes, Chantagem, Dinheiro, Ódio, Amor, Proteção, Acobertamento',
      suspect: 'Suspeito',
      suspectPlaceholder: 'ex: o mordomo, James Wilson',
      weapon: 'Arma',
      weaponPlaceholder: 'ex: castiçal, vinho envenenado',
      motive: 'Motivo',
      motivePlaceholder: 'ex: herança, vingança',
      submit: 'Enviar Acusação',
      caseSolvedMessage: '**Caso resolvido!** Você identificou corretamente o culpado, a arma e o motivo.\n\n**A resposta:**\n- Culpado: {criminal}\n- Arma: {weapon}\n- Motivo: {motive}',
      caseSolvedTitle: 'Caso Resolvido!',
      caseSolvedAnswer: 'A resposta',
      caseFailedTitle: 'Caso Falhou',
      caseFailedMessage: '**O criminoso escapou.** Você esgotou suas tentativas.\n\n**A resposta era:**\n- Culpado: {criminal}\n- Arma: {weapon}\n- Motivo: {motive}',
      backToCampaigns: 'Voltar às campanhas',
    },

    recapPanel: {
      title: 'História Até Agora',
      noRecap: 'Nenhum resumo ainda. A investigação começa...',
      update: 'Atualizar',
      updating: 'Atualizando...',
      clickUpdate: 'Clique em "Atualizar" para gerar um resumo da história da sua investigação...',
      progressTracks: 'Relógios de Progresso',
    },

    entitiesPanel: {
      title: 'Entidades Conhecidas',
      noEntities: 'Nenhuma entidade descoberta ainda',
      empty: 'Suspeitos, investigadores, locais e evidências aparecerão aqui...',
      updateHint: 'Clique em "Atualizar" na aba Resumo para extrair suspeitos e pistas da sua investigação!',
      suspect: 'Suspeito',
      investigator: 'Investigador',
      place: 'Local',
      evidence: 'Evidência',
      faction: 'Facção',
      other: 'Outro',
    },

    notesPanel: {
      title: 'Anotações',
      placeholder: 'Anote ideias, pistas, teorias...',
      saving: 'Salvando...',
    },

    chat: {
      messagePlaceholder: 'Descreva sua ação de investigação...',
      aiThinking: 'IA está pensando...',
      suggestedActions: 'Ações Sugeridas',
      rolled: 'Rolou',
      rollResult: 'Rolou {notation}: {result}',
      dc: 'CD',
      adventureBegins: 'Sua investigação começa...',
      firstActionPrompt: 'Descreva sua primeira ação abaixo',
      narratorTyping: 'NARRADOR · digitando...',
      narratorThinking: 'Narrador está pensando',
      resendMessage: 'Reenviar',
      continueNarration: 'Continuar',
    },

    xp: {
      gained: '+{amount} XP',
      lost: '-{amount} XP',
      easySuccess: 'Sucesso fácil',
      mediumSuccess: 'Sucesso médio',
      hardSuccess: 'Sucesso difícil',
      veryHardSuccess: 'Sucesso muito difícil',
      criticalSuccess: 'Crítico!',
      storyProgression: 'Progressão da história',
      levelUp: 'SUBIU DE NÍVEL! Você agora é Nível {level}!',
      levelDown: 'Desceu de nível! Agora Nível {level}',
      youAreNowLevel: 'Você agora é Nível {level}',
    },

    combat: {
      takeDamage: 'Você sofreu {amount} de dano!',
      recover: 'Você recuperou {amount} de HP!',
      armorReduced: 'armadura -{reduced} (era {original})',
      damageRoll: 'Rolagem de dano {notation}: {result}',
    },

    inventory: {
      title: 'Inventário',
      itemAcquired: 'Adquirido: {name} x{quantity}',
      useItem: 'Usar',
      noItems: 'Nenhum item',
      weapon: 'Arma',
      armor: 'Armadura',
      equip: 'Equipar',
      unequip: 'Desequipar',
      equipped: 'Equipado',
    },

    itemNames: {
      healing_potion: 'Poção de Cura',
      lesser_healing_potion: 'Poção de Cura Menor',
      rope: 'Corda (15m)',
      lucky_charm: 'Amuleto da Sorte',
      iron_rations: 'Rações de Viagem',
      torch: 'Tocha',
      thieves_tools: 'Ferramentas de Ladrão',
      shield: 'Escudo',
      shortsword: 'Espada Curta',
      dagger: 'Adaga',
      staff: 'Cajado',
      leather_armor: 'Armadura de Couro',
      chainmail: 'Cota de Malha',
      greater_healing_potion: 'Poção de Cura Maior',
      magic_sword: 'Espada Mágica',
      plate_armor: 'Armadura de Placas',
      amulet_protection: 'Amuleto de Proteção',
      gold_coins: 'Moedas de Ouro',
      revolver: 'Revólver',
      flashlight: 'Lanterna',
      med_kit: 'Kit Médico',
      laser_pistol: 'Pistola Laser',
      energy_shield: 'Escudo de Energia',
      hacking_rig: 'Equipamento de Hack',
    },

    misfortune: {
      claimedRollNotice: 'Rolagem alegada detectada. Azar +1 ({stacks} total). Próximas rolagens penalizadas.',
      effectiveResult: 'efetivo {value}',
      label: 'Azar',
      tooltip: 'Penalidade por alegar resultados. Decai com rolagens honestas.',
    },

    recap: {
      memoryUpdated: 'Memória atualizada! Extraído:',
      extractedRecap: 'Resumo',
      extractedEntities: 'Entidades',
      extractedFacts: 'Fatos',
      yes: 'Sim',
      no: 'Não',
    },

    apiKeySetup: {
      welcome: 'Bem-vindo ao Solo Detective!',
      intro: 'Para começar a investigar, você precisa configurar sua chave de API do provedor de IA.',
      introPrivacy: 'Sua chave de API é armazenada localmente no navegador e nunca é enviada a nenhum lugar, exceto diretamente à API do provedor.',
      aiProvider: 'Provedor de IA',
      anthropicKey: 'Chave de API da Anthropic',
      googleKey: 'Chave de API do Google AI',
      noKeyTitle: 'Não tem uma chave de API?',
      claudeStep1: 'Acesse',
      claudeStep2: 'Cadastre-se ou faça login',
      claudeStep3: 'Vá em "API Keys"',
      claudeStep4: 'Crie uma nova chave e copie aqui',
      geminiStep1: 'Acesse',
      geminiStep2: 'Entre com sua conta Google',
      geminiStep3: 'Clique em "Create API Key"',
      geminiStep4: 'Copie a chave e cole aqui',
      claudeNote: 'Nota: Você precisará adicionar créditos à sua conta Anthropic para usar a API.',
      geminiNote: 'Nota: O Gemini tem um nível gratuito generoso.',
      saveAndStart: 'Salvar e Começar a Jogar',
      saving: 'Salvando...',
      changeLater: 'Você pode alterar sua chave de API depois nas configurações',
      tryTutorialFirst: 'Experimentar Tutorial Primeiro (sem chave de API)',
      enterKey: 'Por favor, digite sua chave de API',
      invalidClaudeFormat: 'Formato de chave inválido. Deve começar com "sk-ant-"',
      invalidGeminiFormat: 'Formato de chave do Gemini inválido',
    },

    settings: {
      title: 'Configurações',
      apiKeyConfigTitle: 'Configuração da Chave de API',
      providerLabel: 'Provedor',
      status: 'Status',
      configured: 'Configurado',
      notConfigured: 'Não configurado',
      hideKey: 'Ocultar chave atual',
      showKey: 'Mostrar chave atual',
      saveNewKey: 'Salvar Nova Chave',
      removeKey: 'Remover Chave',
      removeKeyConfirm: 'Tem certeza que deseja remover sua chave de API? Você precisará digitá-la novamente para usar os recursos de IA.',
      apiKeySaved: 'Chave de API salva! Recarregando...',
      generalSettings: 'Configurações Gerais',
      languageHint: 'A narração da IA será gerada neste idioma',
      language: 'Idioma',
      aiProvider: 'Provedor de IA',
      apiKey: 'Chave da API',
      apiKeyPlaceholder: 'Digite sua chave de API...',
      apiKeyConfiguredPlaceholder: '•••••••• (configurada - digite para substituir)',
      theme: 'Tema',
      themeGreen: '8-bit Verde',
      themeAmber: '8-bit Âmbar',
      themeClassic: 'Clássico',
      saveSettings: 'Salvar Configurações',
      clearData: 'Limpar Todos os Dados',
      clearDataConfirm: 'Tem certeza? Isso excluirá todas as campanhas e personagens!',
      exportCampaign: 'Exportar Campanha',
      importCampaign: 'Importar Campanha',
      exportSuccess: 'Campanha exportada com sucesso!',
      importSuccess: 'Campanha importada com sucesso!',
      importFailed: 'Falha ao importar campanha',
      selectFile: 'Selecionar Arquivo',
    },

    errors: {
      unknown: 'Erro desconhecido',
      noActiveCampaign: 'Nenhuma campanha ativa',
      campaignNotFound: 'Campanha não encontrada',
      failedToCreateCharacter: 'Falha ao criar personagem',
      failedToLevelUp: 'Falha ao confirmar subida de nível',
      failedToUpdateRecap: 'Falha ao atualizar resumo',
      failedToSaveSession: 'Falha ao salvar sessão',
      failedToVerifyArrest: 'Falha ao verificar prisão. Tente novamente.',
      apiKeyRequired: 'Chave de API é obrigatória',
      invalidDiceNotation: 'Notação de dados inválida',
    },
  },

  es: {
    common: {
      back: 'Volver',
      settings: 'Configuración',
      confirm: 'Confirmar',
      cancel: 'Cancelar',
      close: 'Cerrar',
      save: 'Guardar',
      delete: 'Eliminar',
      edit: 'Editar',
      loading: 'Cargando...',
      error: 'Error',
      expand: 'Expandir',
      collapse: 'Contraer',
      aiOfflineNotice: 'Servicio de IA temporalmente no disponible. Usando modo sin conexión.',
      aiErrorNotice: 'Error en el servicio de IA. Puedes continuar jugando con la narración alternativa.',
    },

    campaignCard: {
      deleteConfirm: '¿Eliminar caso "{title}"? Esta acción no se puede deshacer.',
      theme: 'Tema',
      tone: 'Tono',
    },

    landing: {
      badge: 'Detective en Solitario con IA',
      title: 'Solo Detective',
      tagline: 'Investiga. Deduce. Resuelve.',
      description: 'Resuelve misterios de asesinato en solitario con un narrador de IA. Elige entre 20 casos listos o crea el tuyo. Investiga, interroga sospechosos y resuelve el caso.',
      quickStartCta: 'Jugar Ahora',
      tutorialCta: 'Tutorial (sin clave de API)',
      createCustom: 'Crear Caso Personalizado',
      firstTimeHint: '¿Nuevo aquí? Haz clic arriba para empezar un misterio listo en segundos.',
    },

    campaignList: {
      title: 'Solo Detective',
      newCampaign: 'Nuevo Caso',
      noCampaigns: 'No hay casos aún',
      createFirst: '¡Crea tu primer caso!',
      lastPlayed: 'Última jugada',
      selectCampaign: 'Selecciona un caso para continuar',
      quickStart: 'Jugar Rápido (20 casos)',
    },

    presetCampaigns: {
      title: 'Jugar Rápido',
      subtitle: '20 escenarios de misterio. Haz clic en Jugar para crear y empezar tu investigación.',
      difficulty: 'Dificultad',
      difficultyEasy: 'Fácil (5 intentos)',
      difficultyNormal: 'Normal (3 intentos)',
      difficultyHard: 'Difícil (2 intentos)',
      searchPlaceholder: 'Buscar campañas...',
      all: 'Todas',
      play: 'Jugar',
      noResults: 'No hay campañas que coincidan.',
      tags: { christie: 'Christie', holmes: 'Holmes', express: 'Expreso', rural: 'Rural', noir: 'Noir', cozy: 'Acogedor', spy: 'Espionaje', supernatural: 'Sobrenatural', historical: 'Histórico', locked: 'Habitación Cerrada', heist: 'Robo' },
      campaigns: PRESET_CAMPAIGNS_ES,
    },

    campaign: {
      endSessionConfirm: '¿Finalizar esta sesión? Esto guardará tu progreso y extraerá pistas importantes de tu investigación.',
      sessionSaved: '¡Sesión finalizada! Tu progreso ha sido guardado.',
      startFallback: 'Bienvenido a tu investigación.\n\nTema: {theme}\nTono: {tone}\n\nEl caso te espera. ¿Qué te gustaría hacer?',
    },

    gameOver: {
      title: 'Game Over',
      message: 'Tu personaje ha caído. Los puntos de vida llegaron a cero.',
      returnToCampaigns: 'Volver a campañas',
    },

    resolution: {
      criticalFailure: 'Fallo crítico',
      failure: 'Fallo',
      success: 'Éxito',
      criticalSuccess: 'Éxito crítico',
      summary: '{outcome} (Total {total} vs CD {dc}, margen {margin})',
    },

    campaignCreation: {
      title: 'Crear Nueva Campaña',
      subtitle: 'Crea un caso de misterio personalizado',
      campaignTitle: 'Título de la Campaña',
      campaignTitlePlaceholder: 'ej: Asesinato en Blackwood Hall',
      mysteryStyle: 'Estilo del Misterio',
      generateWithAI: 'Generar con IA',
      generating: 'Generando...',
      selectStyle: 'Selecciona el estilo...',
      system: 'Tipo de Misterio',
      narrativeTheme: 'Tema Narrativo',
      narrativeThemeNotice: 'Este es un juego de misterio puramente narrativo. Sin dados, sin estadísticas—solo investigación y deducción. Tus elecciones y las pistas que encuentres determinan el resultado.',
      selectNarrativeTheme: 'Selecciona un tema narrativo...',
      theme: 'Tema y Escenario',
      themePlaceholder: 'Describe el escenario, víctima, sospechosos...',
      tone: 'Tono',
      tonePlaceholder: 'ej: Elegante, suspense, oscuro',
      difficulty: 'Dificultad',
      difficultyEasy: 'Fácil (5 intentos)',
      difficultyNormal: 'Normal (3 intentos)',
      difficultyHard: 'Difícil (2 intentos)',
      startCampaign: 'Iniciar Campaña',
      creating: 'Creando...',
      generateFailed: 'Error al generar',
      mysteryStyles: {
        christie: 'Agatha Christie (Mansión, Casa de Campo)',
        holmes: 'Sherlock Holmes (Londres Victoriana)',
        express: 'Expreso de Oriente (Tren)',
        rural: 'Misterio Rural (Pueblo)',
        noir: 'Detective Noir (Años 40)',
      },
    },

    tones: {
      dramatic: 'Dramático',
      lighthearted: 'Ligero',
      dark: 'Oscuro',
      comedic: 'Cómico',
      mysterious: 'Misterioso',
      epic: 'Épico',
    },

    characterCreation: {
      title: 'Crea Tu Personaje',
      characterName: 'Nombre del Personaje',
      characterNamePlaceholder: 'Ingresa el nombre...',
      attributes: 'Atributos',
      randomize: 'Aleatorizar',
      range: 'Rango',
      createCharacter: 'Crear Personaje',
      cancel: 'Cancelar',
      nameRequired: 'Por favor, ingresa un nombre para el personaje',
      backgroundOptional: 'Historia del Personaje (Opcional)',
      backstory: 'Historia',
      backstoryPlaceholder: '¿Quién es tu personaje? ¿De dónde viene?',
      personality: 'Personalidad',
      personalityPlaceholder: 'Ej.: valiente, curioso, imprudente',
      goals: 'Objetivos',
      goalsPlaceholder: '¿Qué quiere lograr tu personaje?',
      fears: 'Miedos',
      fearsPlaceholder: '¿A qué le teme tu personaje?',
      basicTab: 'Básico',
      attributesTab: 'Atributos',
      inventoryTab: 'Inventario',
      inventoryHint: 'Selecciona los objetos iniciales. Puedes obtener más durante la aventura cuando el narrador los conceda.',
      backgroundTab: 'Historia',
      generateWithAI: 'Generar con IA',
      generating: 'Generando...',
      apiKeyRequired: 'Por favor, configure su clave de API de Claude en Configuración primero.',
      invalidApiKey: 'Clave de API inválida. Verifique su clave de API de Claude en Configuración.',
      generationFailed: 'Error al generar el historial del personaje. Inténtelo de nuevo.',
    },

    characterPanel: {
      level: 'Nivel',
      experience: 'Experiencia',
      hitPoints: 'Puntos de Vida',
      attributes: 'Atributos',
      maxLevel: 'MÁX',
    },

    levelUp: {
      title: '¡SUBISTE DE NIVEL!',
      congratulations: '¡Felicitaciones!',
      youAreNowLevel: 'Ahora eres Nivel',
      allocatePoints: 'Distribuye {count} puntos de atributo',
      allocatePoint: 'Distribuye {count} punto de atributo',
      pointsRemaining: 'Puntos restantes',
      confirmLevelUp: 'Confirmar Subida de Nivel',
    },

    sidebar: {
      gameInfo: 'Info del Caso',
      menu: 'Menú',
      endSession: 'Finalizar Sesión',
      character: 'Personaje',
      arrest: 'Arresto',
      recap: 'Resumen',
      entities: 'Entidades',
      notes: 'Notas',
    },

    arrest: {
      title: 'Voz de Arresto',
      testHypothesis: 'Probar Hipótesis',
      voiceOfArrest: 'Dar Voz de Arresto',
      attemptsRemaining: 'Intentos restantes: {count}',
      noMysteryYet: 'Inicia el caso para hacer un arresto.',
      accusation: 'Tu Acusación',
      hypothesisHint: 'Prueba tu teoría sin usar intentos de arresto.',
      selectHint: 'Elige entre entidades descubiertas o escribe el tuyo.',
      commonMotives: 'Herencia, Venganza, Celos, Chantaje, Dinero, Odio, Amor, Protección, Encubrimiento',
      suspect: 'Sospechoso',
      suspectPlaceholder: 'ej: el mayordomo, James Wilson',
      weapon: 'Arma',
      weaponPlaceholder: 'ej: candelabro, vino envenenado',
      motive: 'Motivo',
      motivePlaceholder: 'ej: herencia, venganza',
      submit: 'Enviar Acusación',
      caseSolvedMessage: '**¡Caso resuelto!** Identificaste correctamente al culpable, el arma y el motivo.\n\n**La respuesta:**\n- Culpable: {criminal}\n- Arma: {weapon}\n- Motivo: {motive}',
      caseSolvedTitle: '¡Caso Resuelto!',
      caseSolvedAnswer: 'La respuesta',
      caseFailedTitle: 'Caso Fallido',
      caseFailedMessage: '**El criminal escapó.** Te quedaste sin intentos.\n\n**La respuesta era:**\n- Culpable: {criminal}\n- Arma: {weapon}\n- Motivo: {motive}',
      backToCampaigns: 'Volver a campañas',
    },

    recapPanel: {
      title: 'Historia Hasta Ahora',
      noRecap: 'No hay resumen aún. La investigación comienza...',
      update: 'Actualizar',
      updating: 'Actualizando...',
      clickUpdate: 'Haz clic en "Actualizar" para generar un resumen de la historia de tu investigación...',
      progressTracks: 'Relojes de Progreso',
    },

    entitiesPanel: {
      title: 'Entidades Conocidas',
      noEntities: 'No se han descubierto entidades aún',
      empty: 'Sospechosos, investigadores, lugares y evidencias aparecerán aquí...',
      updateHint: '¡Haz clic en "Actualizar" en la pestaña Resumen para extraer sospechosos y pistas de tu investigación!',
      suspect: 'Sospechoso',
      investigator: 'Investigador',
      place: 'Lugar',
      evidence: 'Evidencia',
      faction: 'Facción',
      other: 'Otro',
    },

    notesPanel: {
      title: 'Notas',
      placeholder: 'Anota ideas, pistas, teorías...',
      saving: 'Guardando...',
    },

    chat: {
      messagePlaceholder: 'Describe tu acción de investigación...',
      aiThinking: 'IA está pensando...',
      suggestedActions: 'Acciones Sugeridas',
      rolled: 'Tiró',
      rollResult: 'Tirada {notation}: {result}',
      dc: 'CD',
      adventureBegins: 'Tu investigación comienza...',
      firstActionPrompt: 'Describe tu primera acción abajo',
      narratorTyping: 'NARRADOR · escribiendo...',
      narratorThinking: 'Narrador está pensando',
      resendMessage: 'Reenviar',
      continueNarration: 'Continuar',
    },

    xp: {
      gained: '+{amount} XP',
      lost: '-{amount} XP',
      easySuccess: 'Éxito fácil',
      mediumSuccess: 'Éxito medio',
      hardSuccess: 'Éxito difícil',
      veryHardSuccess: 'Éxito muy difícil',
      criticalSuccess: '¡Crítico!',
      storyProgression: 'Progreso de la historia',
      levelUp: '¡SUBISTE DE NIVEL! ¡Ahora eres Nivel {level}!',
      levelDown: '¡Bajaste de nivel! Ahora Nivel {level}',
      youAreNowLevel: 'Ahora eres Nivel {level}',
    },

    combat: {
      takeDamage: '¡Recibes {amount} de daño!',
      recover: '¡Recuperas {amount} de HP!',
      armorReduced: 'armadura -{reduced} (era {original})',
      damageRoll: 'Tirada de daño {notation}: {result}',
    },

    inventory: {
      title: 'Inventario',
      itemAcquired: 'Adquirido: {name} x{quantity}',
      useItem: 'Usar',
      noItems: 'Sin objetos',
      weapon: 'Arma',
      armor: 'Armadura',
      equip: 'Equipar',
      unequip: 'Desequipar',
      equipped: 'Equipado',
    },

    itemNames: {
      healing_potion: 'Poción de Curación',
      lesser_healing_potion: 'Poción de Curación Menor',
      rope: 'Cuerda (15m)',
      lucky_charm: 'Amuleto de la Suerte',
      iron_rations: 'Raciones de Viaje',
      torch: 'Antorcha',
      thieves_tools: 'Herramientas de Ladrón',
      shield: 'Escudo',
      shortsword: 'Espada Corta',
      dagger: 'Daga',
      staff: 'Bastón',
      leather_armor: 'Armadura de Cuero',
      chainmail: 'Cota de Malla',
      greater_healing_potion: 'Poción de Curación Mayor',
      magic_sword: 'Espada Mágica',
      plate_armor: 'Armadura de Placas',
      amulet_protection: 'Amuleto de Protección',
      gold_coins: 'Monedas de Oro',
      revolver: 'Revólver',
      flashlight: 'Linterna',
      med_kit: 'Botiquín Médico',
      laser_pistol: 'Pistola Láser',
      energy_shield: 'Escudo de Energía',
      hacking_rig: 'Equipo de Hackeo',
    },

    misfortune: {
      claimedRollNotice: 'Tirada alegada detectada. Mala suerte +1 ({stacks} total). Próximas tiradas penalizadas.',
      effectiveResult: 'efectivo {value}',
      label: 'Mala suerte',
      tooltip: 'Penalización por alegar resultados. Decae con tiradas honestas.',
    },

    recap: {
      memoryUpdated: '¡Memoria actualizada! Extraído:',
      extractedRecap: 'Resumen',
      extractedEntities: 'Entidades',
      extractedFacts: 'Hechos',
      yes: 'Sí',
      no: 'No',
    },

    apiKeySetup: {
      welcome: '¡Bienvenido a Solo Detective!',
      intro: 'Para comenzar a investigar, necesitas configurar tu clave de API del proveedor de IA.',
      introPrivacy: 'Tu clave de API se almacena localmente en tu navegador y nunca se envía a ningún lugar excepto directamente a la API del proveedor.',
      aiProvider: 'Proveedor de IA',
      anthropicKey: 'Clave de API de Anthropic',
      googleKey: 'Clave de API de Google AI',
      noKeyTitle: '¿No tienes una clave de API?',
      claudeStep1: 'Ve a',
      claudeStep2: 'Regístrate o inicia sesión',
      claudeStep3: 'Ve a "API Keys"',
      claudeStep4: 'Crea una nueva clave y cópiala aquí',
      geminiStep1: 'Ve a',
      geminiStep2: 'Inicia sesión con tu cuenta de Google',
      geminiStep3: 'Haz clic en "Create API Key"',
      geminiStep4: 'Copia la clave y pégala aquí',
      claudeNote: 'Nota: Necesitarás añadir crédito a tu cuenta Anthropic para usar la API.',
      geminiNote: 'Nota: Gemini tiene un nivel gratuito generoso.',
      saveAndStart: 'Guardar y Empezar a Jugar',
      saving: 'Guardando...',
      changeLater: 'Puedes cambiar tu clave de API más tarde en la configuración',
      tryTutorialFirst: 'Probar Tutorial Primero (sin clave de API)',
      enterKey: 'Por favor, ingresa tu clave de API',
      invalidClaudeFormat: 'Formato de clave inválido. Debe comenzar con "sk-ant-"',
      invalidGeminiFormat: 'Formato de clave de Gemini inválido',
    },

    settings: {
      title: 'Configuración',
      apiKeyConfigTitle: 'Configuración de Clave de API',
      providerLabel: 'Proveedor',
      status: 'Estado',
      configured: 'Configurado',
      notConfigured: 'No configurado',
      hideKey: 'Ocultar clave actual',
      showKey: 'Mostrar clave actual',
      saveNewKey: 'Guardar Nueva Clave',
      removeKey: 'Eliminar Clave',
      removeKeyConfirm: '¿Estás seguro de que quieres eliminar tu clave de API? Tendrás que ingresarla de nuevo para usar las funciones de IA.',
      apiKeySaved: '¡Clave de API guardada! Recargando...',
      generalSettings: 'Configuración General',
      languageHint: 'La narración de la IA se generará en este idioma',
      language: 'Idioma',
      aiProvider: 'Proveedor de IA',
      apiKey: 'Clave de API',
      apiKeyPlaceholder: 'Ingresa tu clave de API...',
      apiKeyConfiguredPlaceholder: '•••••••• (configurada - escribe para reemplazar)',
      theme: 'Tema',
      themeGreen: '8-bit Verde',
      themeAmber: '8-bit Ámbar',
      themeClassic: 'Clásico',
      saveSettings: 'Guardar Configuración',
      clearData: 'Borrar Todos los Datos',
      clearDataConfirm: '¿Estás seguro? ¡Esto eliminará todas las campañas y personajes!',
      exportCampaign: 'Exportar Campaña',
      importCampaign: 'Importar Campaña',
      exportSuccess: '¡Campaña exportada con éxito!',
      importSuccess: '¡Campaña importada con éxito!',
      importFailed: 'Error al importar campaña',
      selectFile: 'Seleccionar Archivo',
    },

    errors: {
      unknown: 'Error desconocido',
      noActiveCampaign: 'No hay campaña activa',
      campaignNotFound: 'Campaña no encontrada',
      failedToCreateCharacter: 'Error al crear personaje',
      failedToLevelUp: 'Error al confirmar subida de nivel',
      failedToUpdateRecap: 'Error al actualizar resumen',
      failedToSaveSession: 'Error al guardar sesión',
      failedToVerifyArrest: 'Error al verificar arresto. Intenta de nuevo.',
      apiKeyRequired: 'Se requiere clave de API',
      invalidDiceNotation: 'Notación de dados inválida',
    },
  },
};
