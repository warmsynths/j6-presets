import csv
from pathlib import Path

csv_path = Path('data/Roland J-6 Preset Sounds Ver1.0 (RAW).xlsx - Sheet1.csv')
js_path = Path('src/presets-data.js')

with csv_path.open(newline='', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile)
    rows = list(reader)

# Header is on row index 5
header = rows[5]
if 'Preset' not in header:
    raise ValueError('CSV header row not found')

items = []
for row in rows[6:]:
    if len(row) <= 24:
        continue
    notes = row[24].strip()
    if not notes:
        continue
    bank_patch = row[1].strip().replace(' - ', '-').replace(' -', '-').replace('- ', '-')
    sound_name = notes.split(':')[0].strip()

    def clean(x):
        return x.strip() if x and x.strip() else 'Off'

    def wave_label(val):
        if not val:
            return None
        v = val.strip()
        if not v or v.upper() == 'X':
            return None
        if v == 'SQU':
            return 'Square'
        if v == 'SAW':
            return 'Saw'
        if v == 'LFO*':
            return 'LFO'
        if v.endswith('%') and v[:-1].isdigit():
            return f'Sub {v}'
        return v

    wave_parts = []
    for col_index in [9, 10, 7, 8, 11]:
        label = wave_label(row[col_index])
        if label:
            wave_parts.append(label)

    waveform = ' + '.join(wave_parts) if wave_parts else 'Unknown'

    item = {
        'bankPatch': bank_patch,
        'soundNameCategory': sound_name,
        'waveformOscType': waveform,
        'filterFreq': clean(row[13]),
        'resonance': clean(row[14]),
        'envMod': clean(row[15]),
        'attack': clean(row[19]),
        'decay': clean(row[20]),
        'sustain': clean(row[21]),
        'release': clean(row[22]),
        'chorus': clean(row[23]),
        'delayReverb': clean(row[5]),
        'notesDescription': notes,
    }
    items.append(item)

js_content = 'export const presetsData = ' + str(items).replace("'", '"') + ';\n'
js_path.write_text(js_content, encoding='utf-8')
print(f'Wrote {len(items)} presets to {js_path}')
