/**
 * Schema representing the shape of raw preset data from the source sheet.
 */
export interface RawPreset {
  blank: string;
  preset: string;
  glide: string;
  octave: string;
  rate: string;
  delay: string;
  lfo: string;
  pwm: string;
  pulse: string;
  saw: string;
  sub: string;
  noise: string;
  blank_2: string;
  freq: string;
  res: string;
  env: string;
  lfo_2: string;
  kybd: string;
  env_gate: string;
  a: string;
  d: string;
  s_control_range: string;
  r: string;
  blank_3: string;
  notes_description: string;
  bankPatch: string;
  soundNameCategory: string;
  notesDescription: string;
  waveformOscType: string;
  filterFreq: string;
  resonance: string;
  envMod: string;
  attack: string;
  decay: string;
  sustain: string;
  release: string;
  chorus: string;
  delayReverb: string;
}

/**
 * Schema representing the transformed preset structure used internally by the application.
 */
export interface Preset extends RawPreset {
  /** Derived from bankPatch, e.g., '1-1' */
  id: string;
  /** Derived from soundNameCategory, e.g., 'Mellow Sub Octave Pluck' */
  name: string;
  /** Normalized notes/description string */
  notes: string;
  /** Normalized delay/reverb effects value */
  delayEffects: string;
  /** Inferred search/filter tags based on name and note attributes */
  tags: string[];
}

/**
 * Chord analysis data
 */
export interface ChordAnalysis {
  summaryJa: string;
  bestKey: string;
  topKeys: { key: string; score: number; raw: number }[];
  diatonicToneRatio: number;
  tags: string[];
  qualityCounts: Record<string, number>;
  extensionCounts: Record<string, number>;
  alterationCounts: Record<string, number>;
  whiteInferredKey: string;
  whiteInferredKeyScore: number;
  recommendedProgressionName: string;
  recommendedProgression: string;
  blackSubstitutionsToWhite: string;
  blackMappingReasonCounts: string;
}

/**
 * Voicing validation data
 */
export interface VoicingValidation {
  matchesSource: boolean;
  sourceTokenCount: number;
  extractedTokenCount: number;
  usedFallback: boolean;
}

/**
 * Chord set
 */
export interface ChordSet {
  number: number;
  genre: string;
  chords: string[];
  voicings: string[][];
  voicingValidation: VoicingValidation;
  analysis: ChordAnalysis;
}

/**
 * Chords Data Root
 */
export interface ChordsData {
  source: string;
  voicingSource: string;
  generatedAt: string;
  keys: string[];
  sets: ChordSet[];
}
