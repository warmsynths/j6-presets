const fs = require('fs');
const path = require('path');
const csvPath = path.join(__dirname, '..', 'src', 'Roland J-6 Preset Sounds Ver1.0 (RAW).xlsx - Sheet1.csv');
const jsPath = path.join(__dirname, '..', 'src', 'presets-data.js');
const csv = fs.readFileSync(csvPath, 'utf8');
const rows = csv.split(/\r?\n/).map(line => {
  const res = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      res.push(cur);
      cur = '';
    } else {
      cur += ch;
    }
  }
  res.push(cur);
  return res;
});
const items = [];
for (let i = 6; i < rows.length; i++) {
  const cols = rows[i];
  if (!cols || cols.length <= 24) continue;
  const notes = cols[24].trim();
  if (!notes) continue;
  const bankPatch = cols[1].trim().replace(/\s*-\s*/g, '-');
  const soundNameCategory = notes.split(':')[0].trim();
  const waveParts = [];
  const waveCols = [cols[9], cols[10], cols[7], cols[8], cols[11]];
  for (const raw of waveCols) {
    if (!raw) continue;
    const trimmed = raw.trim();
    if (!trimmed || trimmed.toUpperCase() === 'X') continue;
    let label = trimmed;
    if (label === 'SQU') label = 'Square';
    if (label === 'SAW') label = 'Saw';
    if (label === 'LFO*') label = 'LFO';
    if (/^\d+%$/.test(label)) label = 'Sub ' + label;
    waveParts.push(label);
  }
  const waveformOscType = waveParts.length ? waveParts.join(' + ') : 'Unknown';
  const obj = {
    bankPatch,
    soundNameCategory,
    waveformOscType,
    filterFreq: (cols[13] || '').trim() || 'Off',
    resonance: (cols[14] || '').trim() || 'Off',
    envMod: (cols[15] || '').trim() || 'Off',
    attack: (cols[19] || '').trim() || 'Off',
    decay: (cols[20] || '').trim() || 'Off',
    sustain: (cols[21] || '').trim() || 'Off',
    release: (cols[22] || '').trim() || 'Off',
    chorus: (cols[23] || '').trim() || 'Off',
    delayReverb: (cols[5] || '').trim() || 'Off',
    notesDescription: notes,
  };
  items.push(obj);
}
const generated = 'export const presetsData = ' + JSON.stringify(items, null, 2) + ';\n';
const current = fs.readFileSync(jsPath, 'utf8');
console.log('current length', current.length);
console.log('generated length', generated.length);
console.log('equal?', current.trim() === generated.trim());
if (current.trim() !== generated.trim()) {
  console.log('first 5 generated items:');
  console.log(JSON.stringify(items.slice(0, 5), null, 2));
}
