import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, '../data/chords.json');
const outDir = path.join(__dirname, '../data/relational');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const rawData = fs.readFileSync(dataPath, 'utf8');
const chordsData = JSON.parse(rawData);

function getChordSetComplexity(chords) {
  let score = 0;
  chords.forEach(c => {
     if (c.includes('9') || c.includes('11') || c.includes('13')) score += 2;
     if (c.includes('m') || c.includes('aug') || c.includes('dim')) score += 1;
     if (c.includes('/')) score += 1;
     if (c.includes('sus')) score += 1;
  });
  return Math.min(100, Math.floor((score / 48) * 100));
}

function extractRoot(chord) {
  const match = chord.match(/^[A-G](#|b)?/);
  return match ? match[0] : null;
}

function inferKey(chords) {
  if (!chords || chords.length === 0) return 'Unknown';
  
  const rootCounts = {};
  chords.forEach(c => {
    const root = extractRoot(c);
    if (root) {
      rootCounts[root] = (rootCounts[root] || 0) + 1;
    }
  });

  const firstRoot = extractRoot(chords[0]);
  const lastRoot = extractRoot(chords[chords.length - 1]);
  if (firstRoot) rootCounts[firstRoot] = (rootCounts[firstRoot] || 0) + 2;
  if (lastRoot) rootCounts[lastRoot] = (rootCounts[lastRoot] || 0) + 2;

  let bestKey = 'Unknown';
  let maxScore = -1;
  for (const [root, count] of Object.entries(rootCounts)) {
    if (count > maxScore) {
      maxScore = count;
      bestKey = root;
    }
  }
  
  const firstChord = chords[0];
  if (firstChord.includes('m') && !firstChord.includes('maj') && !firstChord.includes('M')) {
    return bestKey + ' Minor';
  }
  return bestKey + ' Major';
}

function analyzeChords(chords, genre, complexity) {
  const qualityCounts = {
    Major: 0,
    Minor: 0,
    Diminished: 0,
    Augmented: 0
  };
  
  const extensionCounts = {
    '7': 0,
    '9': 0,
    '11': 0,
    '13': 0,
    'sus': 0
  };

  chords.forEach(c => {
    // Quality
    if (c.includes('dim')) qualityCounts.Diminished++;
    else if (c.includes('aug')) qualityCounts.Augmented++;
    else if (c.includes('m') && !c.includes('maj') && !c.includes('M')) qualityCounts.Minor++;
    else qualityCounts.Major++;

    // Extensions
    if (c.includes('7')) extensionCounts['7']++;
    if (c.includes('9')) extensionCounts['9']++;
    if (c.includes('11')) extensionCounts['11']++;
    if (c.includes('13')) extensionCounts['13']++;
    if (c.includes('sus')) extensionCounts['sus']++;
  });

  const tags = [];
  if (qualityCounts.Minor > 6) tags.push('Dark');
  if (qualityCounts.Major > 8) tags.push('Bright');
  if (extensionCounts['9'] + extensionCounts['11'] + extensionCounts['13'] > 4) tags.push('Jazzy');
  if (complexity > 50) tags.push('Complex');
  if (genre.includes('Synthwave')) tags.push('Retro');

  // Naive diatonic ratio - just random logic for now based on Major/Minor dominance
  // Real diatonic checking would require parsing each chord's notes against a scale
  let diatonicRatio = 0;
  if (qualityCounts.Major > qualityCounts.Minor) {
    diatonicRatio = (qualityCounts.Major + qualityCounts.Minor) / 12; // pseudo-logic
  } else {
    diatonicRatio = (qualityCounts.Minor + qualityCounts.Major) / 12; // pseudo-logic
  }
  diatonicRatio = Math.round(diatonicRatio * 100) / 100;
  // Ensure it's never 1.0 if there are aug/dim unless they are diatonic dim
  if (qualityCounts.Augmented > 0) diatonicRatio -= 0.1;

  // Simple progression suggestion
  const roots = chords.slice(0, 4).map(c => extractRoot(c)).filter(Boolean);
  const recommendedProgression = roots.length >= 3 ? roots.join(' - ') : 'I - IV - V';

  return {
    qualityCounts,
    extensionCounts,
    tags,
    diatonicToneRatio: Math.max(0, Math.min(1, diatonicRatio)),
    recommendedProgression
  };
}

const genres = [];
const genreMap = new Map(); // name -> id

const chordSets = [];
const setChords = [];

let genreIdCounter = 1;
let setIdCounter = 1;

for (const set of chordsData.chord_sets) {
  // Process Genre
  if (!genreMap.has(set.genre)) {
    genreMap.set(set.genre, genreIdCounter);
    genres.push({
      id: genreIdCounter,
      name: set.genre
    });
    genreIdCounter++;
  }
  const genreId = genreMap.get(set.genre);
  
  // Calculate criteria
  const complexity = getChordSetComplexity(set.chords);
  const inferredKey = inferKey(set.chords);
  const analysis = analyzeChords(set.chords, set.genre, complexity);
  
  // Process Set
  const setId = setIdCounter++;
  chordSets.push({
    id: setId,
    number: set.number,
    genre_id: genreId,
    complexity: complexity,
    inferred_key: inferredKey,
    analysis: analysis
  });
  
  // Process Chords
  set.chords.forEach((chord, index) => {
    setChords.push({
      set_id: setId,
      index: index,
      chord: chord
    });
  });
}

// Write outputs
fs.writeFileSync(path.join(outDir, 'genres.json'), JSON.stringify(genres, null, 2));
fs.writeFileSync(path.join(outDir, 'chord_sets.json'), JSON.stringify(chordSets, null, 2));
fs.writeFileSync(path.join(outDir, 'set_chords.json'), JSON.stringify(setChords, null, 2));

console.log('Relational datasets generated successfully in data/relational/');
console.log(`- ${genres.length} genres`);
console.log(`- ${chordSets.length} chord sets`);
console.log(`- ${setChords.length} total chords mapped`);
