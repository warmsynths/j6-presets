import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { presetsData as rawPresetsData } from './presets-data.js';
import {
  inferTags,
  getTagCategory,
  mapEnvelopeParam,
  mapSustainParam,
  mapFreqParam,
  mapResParam,
  mapEnvModParam,
  mapLfoParam,
  mapPwmParam
} from './utils.js';
import { RawPreset, Preset } from './types.js';
import './j6-preset-list.js';

// Parse raw data to Preset interface
const presetsData: Preset[] = (rawPresetsData as RawPreset[]).map((p: RawPreset) => {
  return {
    ...p,
    id: p.bankPatch,
    name: p.soundNameCategory,
    notes: p.notesDescription || '',
    delayEffects: p.delayReverb,
    tags: inferTags(p)
  };
});

@customElement('j6-app')
export class J6App extends LitElement {
  // Preset States
  @state() private selectedPreset: Preset = presetsData[0];

  // UI Interactive States
  @state() private presetListOpen = false;
  @state() private aboutOpen = false;
  @state() private isEdited = false;

  // Custom tweaked parameters (override preset defaults)
  @state() private customValues: Record<string, number> = {};

  static styles = css`
    :host {
      display: block;
      color: #e2e2e4;
      background-color: #0b0c0d;
      min-height: 100vh;
      font-family: 'Inter', system-ui, sans-serif;
      padding: 20px;
      box-sizing: border-box;
    }

    /* Outer Skeuomorphic Synth Faceplate */
    .synth-container {
      max-width: 1200px;
      margin: 0 auto;
      background: #18191e;
      border: 4px solid #2a2b30;
      border-radius: 8px;
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.9), inset 0 1px 2px rgba(255,255,255,0.08);
      overflow: hidden;
      position: relative;
    }

    /* Grille stripes on top metal bar */
    .synth-header {
      background: repeating-linear-gradient(90deg, #111214, #111214 1.5px, #1a1b20 1.5px, #1a1b20 3px);
      border-bottom: 4px solid #08080a;
      padding: 16px 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .roland-logo {
      font-weight: 800;
      font-size: 2.2rem;
      letter-spacing: 0.15em;
      color: #a5a298;
      text-transform: uppercase;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.6);
    }

    .plugout-badge {
      background: linear-gradient(135deg, #e4e6eb 0%, #b2b4b8 40%, #76787e 50%, #b2b4b8 60%, #e4e6eb 100%);
      border: 2px solid #4e5055;
      border-radius: 3px;
      padding: 3px 10px;
      font-size: 0.65rem;
      font-weight: 900;
      color: #ff5d00;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      box-shadow: inset 0 1px 1px rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.4);
      text-shadow: 0 0 2px rgba(255, 93, 0, 0.4);
    }

    .juno-logo {
      font-family: 'Arial Black', system-ui, sans-serif;
      font-weight: 900;
      font-size: 3.6rem;
      letter-spacing: -0.02em;
      
      /* Horizontally stretch the font to match the ultra-wide JUNO logo */
      transform: scaleX(1.4);
      transform-origin: right center;

      /* Metallic vertical gradient */
      background: linear-gradient(180deg, #f0efea 0%, #dcdad2 40%, #a4a298 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      
      /* Subtle drop shadow behind the clipped text */
      filter: drop-shadow(0px 2px 3px rgba(0,0,0,0.8));
      
      margin-right: 16px;
    }

    /* Main Synth Panel (Continuous Flat Plate) */
    .synth-body {
      padding: 24px;
      background: #15161b; /* Charcoal grey background */
    }

    .synth-grid {
      display: grid;
      grid-template-columns: 1.25fr 1fr;
      gap: 20px;
    }

    .grid-left {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .grid-right {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .full-width-module {
      grid-column: 1 / -1;
    }

    /* Flat JUNO Section Panel Outline styling */
    .panel-card {
      background: transparent;
      border: 1px solid #2e3037;
      border-radius: 4px;
      box-sizing: border-box;
      position: relative;
    }

    /* Red and Blue screen-printed block headers */
    .panel-header {
      padding: 6px 12px;
      font-size: 0.72rem;
      font-weight: 800;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: #ffffff;
    }

    .panel-header.red {
      background: #b52c24;
      border-bottom: 1.5px solid #ffa19922;
    }

    .panel-header.blue {
      background: #346d92;
      border-bottom: 1.5px solid #a8cce422;
    }

    .panel-content {
      padding: 20px 16px 16px;
      display: flex;
      gap: 16px;
      justify-content: space-around;
      align-items: center;
    }

    /* Fader controls styling */
    .fader-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }

    .fader-label {
      font-size: 0.65rem;
      font-weight: 800;
      color: #a4a5aa;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .fader-track-wrapper {
      position: relative;
      padding: 0 10px;
    }

    /* narrow slit track */
    .fader-track {
      width: 5px;
      height: 100px;
      background: #000000;
      border-radius: 2px;
      box-shadow: inset 0 2px 5px rgba(0,0,0,0.8);
      position: relative;
      cursor: pointer;
    }

    /* JUNO gold/tan ticks printed directly on faceplate next to track */
    .fader-track::before, .fader-track::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 4px;
      background: repeating-linear-gradient(180deg, #9e9a8e, #9e9a8e 1.5px, transparent 1.5px, transparent 10px);
      opacity: 0.55;
    }

    .fader-track::before { left: -8px; }
    .fader-track::after { right: -8px; }

    /* JUNO-60 dark charcoal plastic fader handle with white center stripe */
    .fader-handle {
      width: 24px;
      height: 14px;
      background: linear-gradient(180deg, #44464f 0%, #1a1b1e 100%);
      border: 1.5px solid #0a0b0d;
      border-radius: 3px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.7), inset 0 1px 1px rgba(255,255,255,0.1);
      position: absolute;
      left: calc(50% - 12px);
      cursor: ns-resize;
      transition: bottom 0.05s linear;
    }

    .fader-handle::before {
      content: '';
      display: block;
      position: absolute;
      left: 1.5px; right: 1.5px;
      top: 5px;
      height: 1.5px;
      background: #e2e2e4;
      box-shadow: 0 0.5px 1px rgba(0,0,0,0.3);
    }

    .fader-val-label {
      font-family: monospace;
      font-size: 0.6rem;
      color: #5d5f66;
      margin-top: 8px;
    }

    /* Shared fader numeric scales */
    .fader-scale-shared {
      font-family: monospace;
      font-size: 0.55rem;
      color: #8c8e94;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100px;
      margin-top: 20px;
      padding: 0 2px;
    }

    .fader-scale-shared span {
      text-align: center;
      line-height: 1;
    }

    /* Rotary Knobs styling */
    .knob-control {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      position: relative;
    }

    .knob-dial-wrapper {
      position: relative;
      width: 44px;
      height: 44px;
    }

    /* printed tick marks around the knob dial */
    .knob-dial-wrapper::before {
      content: '';
      position: absolute;
      top: -4px; left: -4px; right: -4px; bottom: -4px;
      border-radius: 50%;
      background: repeating-conic-gradient(
        from 225deg,
        #a4a5aa 0deg,
        #a4a5aa 2deg,
        transparent 2deg,
        transparent 27deg
      );
      mask-image: radial-gradient(circle at center, transparent 65%, black 66%);
      -webkit-mask-image: radial-gradient(circle at center, transparent 65%, black 66%);
      pointer-events: none;
      opacity: 0.4;
    }

    .knob-dial {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #42454e 0%, #151619 80%);
      border: 1.5px solid #1c1d21;
      box-shadow: 0 5px 8px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.1);
      position: relative;
      cursor: ns-resize;
    }

    /* JUNO orange knob indicator pointer */
    .knob-indicator {
      position: absolute;
      top: 3px;
      left: calc(50% - 1.5px);
      width: 3px;
      height: 10px;
      background: #ff8500;
      border-radius: 1px;
      transform-origin: bottom center;
      box-shadow: 0 0 2px rgba(255,133,0,0.8);
    }

    .knob-label {
      font-size: 0.6rem;
      font-weight: bold;
      color: #8c8e94;
      text-transform: uppercase;
    }

    /* PATCH display panel elements */
    .patch-panel-content {
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .patch-top-row {
      display: flex;
      gap: 12px;
      align-items: flex-end;
    }

    /* Override btn-key for the wide patch buttons */
    .patch-btn {
      width: auto !important;
      height: 34px !important;
      padding: 0 12px;
      font-family: 'Inter', sans-serif;
      font-weight: 800;
      font-size: 0.8rem;
      color: #2b271d;
      white-space: nowrap;
    }

    /* Recessed LED search screen */
    .led-search-screen {
      flex: 1;
      height: 34px;
      background-color: #120201;
      background-image: radial-gradient(rgba(255, 93, 0, 0.2) 1.5px, transparent 0);
      background-size: 4px 4px;
      border: 2px solid #09090b;
      box-shadow: inset 0 2px 8px rgba(0,0,0,0.98), 0 1px 1px rgba(255,255,255,0.05);
      border-radius: 3px;
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 10px;
      box-sizing: border-box;
    }

    .led-search-input {
      width: 100%;
      background: transparent;
      border: none;
      color: #ff5d00;
      font-family: 'VT323', monospace;
      font-size: 1.7rem;
      letter-spacing: 0.05em;
      outline: none;
      text-transform: uppercase;
      text-shadow: 0 0 6px rgba(255, 93, 0, 0.8);
      padding: 0;
    }
    .led-search-input::placeholder { color: #ff5d0033; text-shadow: none; }
    
    .led-search-icon {
      position: absolute; right: 8px; top: calc(50% - 9px);
      width: 18px; height: 18px; fill: #ff5d00;
      filter: drop-shadow(0 0 4px rgba(255, 93, 0, 0.7)); pointer-events: none;
    }

    .search-toggle-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }
    
    .search-toggle-label {
      font-size: 0.55rem;
      font-weight: 800;
      color: #8c8e94;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .search-toggle-btn {
      width: 26px;
      height: 26px;
      background: #231b1a;
      border: 2px solid #101113;
      border-radius: 4px;
      cursor: pointer;
      box-shadow: 0 3px 0 #000, 0 4px 6px rgba(0,0,0,0.5);
      transition: all 0.1s ease;
    }

    .search-toggle-btn.active {
      background: #ffab44; /* Bright glowing amber */
      box-shadow: 0 1px 0 #000, 0 0 12px #ff9d00, inset 0 0 4px #fff;
      transform: translateY(2px);
    }

    .patch-bottom-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 4px;
    }

    .patch-notes {
      font-size: 0.8rem;
      color: #a4a5aa;
      font-weight: 600;
      line-height: 1.4;
      flex: 1;
      padding-right: 20px;
    }

    .patch-counts {
      font-size: 0.55rem;
      color: #8c8e94;
      font-weight: 800;
      text-align: right;
      line-height: 1.3;
      text-transform: uppercase;
      white-space: nowrap;
    }

    /* Waveform selector styling */
    .waveform-picker {
      display: flex;
      gap: 12px;
      align-items: flex-end;
    }

    .waveform-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .waveform-label {
      font-size: 0.6rem;
      font-weight: bold;
      color: #8c8e94;
      text-transform: uppercase;
      height: 12px;
      display: flex;
      align-items: center;
    }

    /* Inset LED well above switches */
    .led-well {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #380c0d; /* dark red off state */
      border: 1px solid #120c0a;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.9), 0 1px 1px rgba(255,255,255,0.05);
      transition: all 0.15s ease;
    }

    .led-well.active {
      background: #ff9d00; /* warm amber glow */
      border-color: #ffc466;
      box-shadow: 0 0 8px #ff9d00, 0 0 16px #ff5d00, inset 0 0 2px #fff;
    }

    /* Skeuomorphic retro keys with thick black borders and deep drop shadows */
    .btn-key {
      width: 34px;
      height: 34px;
      border: 2px solid #101113;
      border-radius: 4px;
      box-shadow: 0 4px 0 #000000, 0 6px 10px rgba(0, 0, 0, 0.6);
      cursor: pointer;
      box-sizing: border-box;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
      position: relative;
    }

    .btn-key::after {
      /* Subtle top highlight inner bevel for plastic texture */
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; height: 1px;
      background: rgba(255,255,255,0.25);
    }

    /* Only physically depress the button while the mouse is actively holding it down */
    .btn-key:active {
      transform: translateY(3px);
      box-shadow: 0 1px 0 #000000, 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    /* Individual custom hardware hues */
    .key-cream { background: #ebdcb9; }
    .key-sub { background: #d6c886; }
    .key-sub50 { background: #e8aa55; }
    .key-noise { background: #e68a35; }

    /* Chorus panel specific elements */
    .chorus-panel-grid {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      width: 100%;
      box-sizing: border-box;
      gap: 12px;
    }

    .chorus-section {
      display: flex;
      align-items: center;
      gap: 16px;
      justify-content: center;
    }

    .chorus-section:not(:last-child) {
      border-right: 1px solid #282930;
      padding-right: 20px;
    }

    .chorus-picker {
      display: flex;
      gap: 10px;
    }

    .chorus-button {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .chorus-button span {
      font-size: 0.6rem;
      font-weight: bold;
      color: #8c8e94;
    }

    /* Modals & Overlays */
    .modal-backdrop {
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(4px);
      z-index: 2000; display: flex; justify-content: center; align-items: center; padding: 20px;
    }
    .preset-dropdown-container { width: 100%; max-width: 500px; }
    .retro-modal {
      background: #141518; border: 3px solid #3c3d42; border-radius: 8px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9); width: 100%; max-width: 550px;
      overflow: hidden; font-family: 'Inter', sans-serif;
    }
    .modal-header {
      background: #b52c24; padding: 10px 16px; display: flex;
      justify-content: space-between; align-items: center; border-bottom: 2px solid #751a14;
    }
    .modal-title { font-size: 0.8rem; font-weight: bold; color: #fff; letter-spacing: 0.08em; }
    .close-btn { background: transparent; border: none; color: #fff; font-size: 1.4rem; cursor: pointer; }
    .modal-body { padding: 20px; }
    .modal-body.text-content h3 { margin-top: 0; color: #ff5d00; }
    .modal-body.text-content p { line-height: 1.5; font-size: 0.9rem; color: #b2b4b8; }
    .filter-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; }
    .filter-group { display: flex; flex-direction: column; gap: 6px; }
    .filter-group label { font-size: 0.75rem; font-weight: bold; color: #8c8e94; text-transform: uppercase; }
    .filter-select {
      background: #0c0c0e; border: 2px solid #2e3037; color: #e2e2e4;
      border-radius: 4px; padding: 8px; font-size: 0.85rem; outline: none;
    }
    .modal-footer {
      background: #0f1012; padding: 12px 16px; display: flex;
      justify-content: flex-end; gap: 12px; border-top: 1px solid #1f2025;
    }
    .retro-btn {
      background: linear-gradient(180deg, #3c3e44 0%, #202124 100%);
      border: 2px solid #5a5c62; color: #e2e2e4; font-size: 0.7rem; font-weight: bold;
      padding: 6px 12px; border-radius: 4px; cursor: pointer; text-transform: uppercase;
    }
    .retro-btn.accent { background: #cd5a1e; border-color: #3e2010; color: #fff; }
    .retro-btn.accent:hover { background: #ff5d00; }
    .synth-footer {
      padding: 16px 24px; background: #0d0d10; border-top: 3px solid #1a1b1f;
      display: flex; justify-content: center; align-items: center; gap: 24px; font-size: 0.8rem; color: #6a6b72;
    }
    .synth-footer a {
      color: #8c8e94;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: color 0.2s ease;
      font-weight: 600;
    }
    .synth-footer a:hover {
      color: #e2e2e4;
    }
    .footer-divider {
      color: #2e3037;
    }

    /* Mobile vertical layout queries */
    @media (max-width: 768px) {
      :host { padding: 8px; }
      .synth-container { border-width: 2px; }
      .roland-logo { font-size: 1.6rem; }
      .juno-logo { font-size: 2rem; }
      .synth-grid { display: flex; flex-direction: column; gap: 12px; }
      .grid-right { display: grid; grid-template-columns: 1fr; gap: 12px; }
      .grid-right-mobile-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
      .panel-content { padding: 10px; gap: 8px; }
      .waveform-picker { overflow-x: auto; padding-bottom: 4px; width: 100%; justify-content: flex-start; }
      .chorus-panel-grid { flex-direction: column; gap: 20px; padding: 8px 0; }
      .chorus-section { width: 100%; border-right: none; padding-right: 0; border-bottom: 1px solid #232429; padding-bottom: 16px; }
      .chorus-section:last-child { border-bottom: none; }
      .synth-footer { flex-direction: column; gap: 12px; }
      .footer-divider { display: none; }
    }
  `;

  // Reactive properties trigger updates
  override willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('selectedPreset')) {
      this.resetToPresetValues();
    }
  }

  private resetToPresetValues() {
    const p = this.selectedPreset;
    this.customValues = {
      lfo: mapLfoParam(p.lfo),
      pwm: mapPwmParam(p.pwm),
      a: mapEnvelopeParam(p.attack),
      d: mapEnvelopeParam(p.decay),
      s: mapSustainParam(p.sustain),
      r: mapEnvelopeParam(p.release),
      freq: mapFreqParam(p.filterFreq),
      res: mapResParam(p.resonance),
      env: mapEnvModParam(p.envMod),
      // Knobs default rotation values
      effect: p.chorus !== 'Off' ? 70 : 0,
      delay: p.delayReverb === 'Y' ? 60 : 0,
      reverb: p.delayReverb === 'Y' ? 50 : 0
    };
    this.isEdited = false;
  }

  // Mouse and Touch drag-and-drop parameter helpers
  private handleFaderMouseDown(e: MouseEvent, paramName: string) {
    e.preventDefault();
    const track = (e.currentTarget as HTMLElement).querySelector('.fader-track') as HTMLElement;
    this.updateFaderFromCoord(e.clientY, track, paramName);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      this.updateFaderFromCoord(moveEvent.clientY, track, paramName);
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }

  private handleFaderTouchStart(e: TouchEvent, paramName: string) {
    const track = (e.currentTarget as HTMLElement).querySelector('.fader-track') as HTMLElement;
    this.updateFaderFromCoord(e.touches[0].clientY, track, paramName);

    const handleTouchMove = (moveEvent: TouchEvent) => {
      this.updateFaderFromCoord(moveEvent.touches[0].clientY, track, paramName);
    };

    const handleTouchEnd = () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };

    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  }

  private updateFaderFromCoord(clientY: number, track: HTMLElement, paramName: string) {
    const rect = track.getBoundingClientRect();
    const relativeY = Math.max(0, Math.min(1, (rect.bottom - clientY) / rect.height));
    const percent = Math.round(relativeY * 100);
    this.customValues = { ...this.customValues, [paramName]: percent };
    this.isEdited = true;
  }

  private handleKnobMouseDown(e: MouseEvent, paramName: string) {
    e.preventDefault();
    const startY = e.clientY;
    const startVal = this.customValues[paramName] || 0;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaY = startY - moveEvent.clientY;
      const change = deltaY * 1.2;
      const newVal = Math.max(0, Math.min(100, startVal + change));
      this.customValues = { ...this.customValues, [paramName]: Math.round(newVal) };
      this.isEdited = true;
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }

  private handleSendGet() {
    const patchDump = `--- Roland J-6 Patch Info ---
Preset: [${this.selectedPreset.id}] ${this.selectedPreset.name}
Notes: ${this.selectedPreset.notes}
Waveform: ${this.selectedPreset.waveformOscType}
Chorus: ${this.selectedPreset.chorus}
---------------------------------------
LFO Rate: ${this.customValues.lfo}%
PWM Depth: ${this.customValues.pwm}%
Attack Time: ${this.customValues.a}%
Decay Time: ${this.customValues.d}%
Sustain Level: ${this.customValues.s}%
Release Time: ${this.customValues.r}%
Cutoff Freq: ${this.customValues.freq}%
Resonance: ${this.customValues.res}%
Env Mod: ${this.customValues.env}%
Delay Level: ${this.customValues.delay}%
Reverb Level: ${this.customValues.reverb}%
Effect Chorus: ${this.customValues.effect}%
---------------------------------------`;

    navigator.clipboard.writeText(patchDump).then(() => {
      alert("Patch dump copied to clipboard successfully!");
    });
  }


  // Render sub-templates
  private renderFader(label: string, value: number, paramName: string) {
    return html`
      <div 
        class="fader-group"
        @mousedown=${(e: MouseEvent) => this.handleFaderMouseDown(e, paramName)}
        @touchstart=${(e: TouchEvent) => this.handleFaderTouchStart(e, paramName)}
      >
        <span class="fader-label">${label}</span>
        <div class="fader-track-wrapper">
          <div class="fader-track">
            <div class="fader-handle" style="bottom: calc(${value}% * 0.86)"></div>
          </div>
        </div>
        <span class="fader-val-label">${value}%</span>
      </div>
    `;
  }

  private renderKnob(label: string, value: number, paramName: string) {
    const rotation = -135 + 2.7 * value; // Maps 0-100 to -135deg to +135deg
    return html`
      <div class="knob-control" @mousedown=${(e: MouseEvent) => this.handleKnobMouseDown(e, paramName)}>
        <div class="knob-dial-wrapper">
          <div class="knob-dial" style="transform: rotate(${rotation}deg)">
            <div class="knob-indicator"></div>
          </div>
        </div>
        <span class="knob-label">${label}</span>
      </div>
    `;
  }



  override render() {
    const p = this.selectedPreset;
    const isSawActive = p.saw === 'SAW';
    const isPulseActive = p.pulse === 'SQU' || p.pulse === 'PWM';
    const isPulseWidthActive = ['15%', '20%', '25%', '33%'].includes(p.pulse);
    const isSubActive = ['100%', '25%'].includes(p.sub);
    const isSub50Active = p.sub === '50%';
    const isNoiseActive = p.noise !== 'x';

    const isChorusOffActive = p.chorus === 'Off' || !p.chorus;
    const isChorusIActive = p.chorus === 'I';
    const isChorusIIActive = p.chorus === 'II';

    // ADSR calculation
    const aWidth = (this.customValues.a || 0) * 0.25;
    const dWidth = (this.customValues.d || 0) * 0.25;
    const sHeight = (this.customValues.s || 0) * 0.40;
    const sWidth = 25;
    const rWidth = (this.customValues.r || 0) * 0.25;
    const p1 = `0,40`;
    const p2 = `${aWidth},0`;
    const p3 = `${aWidth + dWidth},${40 - sHeight}`;
    const p4 = `${aWidth + dWidth + sWidth},${40 - sHeight}`;
    const p5 = `${aWidth + dWidth + sWidth + rWidth},40`;
    const adsrPath = `M ${p1} L ${p2} L ${p3} L ${p4} L ${p5}`;

    return html`
      <div class="synth-container">
        <!-- Top Bar Header -->
        <div class="synth-header">
          <div class="header-left">
            <span class="roland-logo">Roland</span>
            <span class="plugout-badge">Plug-Out</span>
          </div>

          <div class="juno-logo">J6</div>
        </div>

        <!-- Main Body Controls -->
        <div class="synth-body">
          <div class="synth-grid">
            <!-- Left Grid (Patch Display + Oscillator Settings) -->
            <div class="grid-left">
              <!-- PATCH PANEL -->
              <div class="panel-card">
                <div class="panel-header red">Patch</div>
                
                <div class="patch-panel-content">
                  
                  <!-- Top Row: Buttons, LED Search, Toggle -->
                  <div class="patch-top-row">
                    <button class="btn-key key-cream patch-btn" @click=${() => this.presetListOpen = true}>
                      ${p.id || '1-1'}
                    </button>
                    <button class="btn-key key-cream patch-btn" @click=${() => this.presetListOpen = true}>
                      ${p.name || 'MELLOW SUB OCTAVE'}
                    </button>
                    
                    <!-- ADSR LCD Screen -->
                    <div class="led-search-screen" style="padding: 0; overflow: hidden; justify-content: center;">
                      <svg viewBox="0 0 100 40" style="width: 90%; height: 80%; overflow: visible;" preserveAspectRatio="none">
                        <path d=${adsrPath} fill="none" stroke="#ff5d00" stroke-width="2" vector-effect="non-scaling-stroke" filter="drop-shadow(0 0 4px rgba(255, 93, 0, 0.7))"/>
                      </svg>
                    </div>
                  </div>

                  <!-- Bottom Row: Notes and Counts -->
                  <div class="patch-bottom-row">
                    <div class="patch-notes">
                      ${this.isEdited ? html`<span style="color:#ffa166;">[EDITED] </span>` : ''}
                      ${p.notes || 'Factory patch preset definition'}
                    </div>


                  </div>
                  
                </div>
              </div>

              <!-- OSCILLATOR PANEL -->
              <div class="panel-card">
                <div class="panel-header blue">Oscillator</div>
                
                <div class="panel-content" style="padding-top: 24px;">
                  
                  <!-- Shared Scale left of LFO -->
                  <div class="fader-scale-shared" style="margin-right: -4px;">
                    <span>4</span>
                    <span>-</span>
                    <span>0</span>
                  </div>
                  <!-- LFO slider -->
                  ${this.renderFader('LFO', this.customValues.lfo || 0, 'lfo')}
                  <!-- PWM slider -->
                  ${this.renderFader('PWM', this.customValues.pwm || 0, 'pwm')}

                  <!-- Waveform Toggle Buttons with LEDs -->
                  <div class="waveform-picker">
                    <div class="waveform-item">
                      <span class="waveform-label">
                        <svg width="12" height="12" viewBox="0 0 10 10" stroke="#8c8e94" fill="none" stroke-width="1.5">
                          <path d="M1 9 L9 1 L9 9 Z" />
                        </svg>
                      </span>
                      <div class="led-well ${isSawActive ? 'active' : ''}"></div>
                      <button class="btn-key key-cream ${isSawActive ? 'active' : ''}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label">
                        <svg width="12" height="12" viewBox="0 0 10 10" stroke="#8c8e94" fill="none" stroke-width="1.5">
                          <path d="M1 9 L1 1 L5 1 L5 9 L9 9" />
                        </svg>
                      </span>
                      <div class="led-well ${isPulseActive ? 'active' : ''}"></div>
                      <button class="btn-key key-cream ${isPulseActive ? 'active' : ''}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label">
                        <svg width="12" height="12" viewBox="0 0 10 10" stroke="#8c8e94" fill="none" stroke-width="1.5">
                          <path d="M1 5 L9 5" stroke-dasharray="2 2" />
                          <path d="M3 9 L3 1 L7 1 L7 9" />
                        </svg>
                      </span>
                      <div class="led-well ${isPulseWidthActive ? 'active' : ''}"></div>
                      <button class="btn-key key-cream ${isPulseWidthActive ? 'active' : ''}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label">
                        <span style="font-size:0.5rem; letter-spacing:0.02em;">SUB</span>
                      </span>
                      <div class="led-well ${isSubActive ? 'active' : ''}"></div>
                      <button class="btn-key key-sub ${isSubActive ? 'active' : ''}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label" style="font-size:0.55rem; font-family:sans-serif;">Sub 50%</span>
                      <div class="led-well ${isSub50Active ? 'active' : ''}"></div>
                      <button class="btn-key key-sub50 ${isSub50Active ? 'active' : ''}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label" style="font-size:0.55rem;">Noise</span>
                      <div class="led-well ${isNoiseActive ? 'active' : ''}"></div>
                      <button class="btn-key key-noise ${isNoiseActive ? 'active' : ''}"></button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <!-- Right Grid (Envelope + Filter + Chorus Panels) -->
            <div class="grid-right">
              <!-- On mobile screens, render Amp Envelope and Filter side-by-side -->
              <div class="grid-right-mobile-row" style="grid-column: 1 / -1; display: contents;">
                <!-- AMP ENVELOPE PANEL -->
                <div class="panel-card">
                  <div class="panel-header red">Amp Envelope</div>
                  
                  <div class="panel-content" style="padding-top: 24px;">
                    ${this.renderFader('A', this.customValues.a || 0, 'a')}
                    
                    <div class="fader-scale-shared">
                      <span>12</span>
                    </div>
                    
                    ${this.renderFader('D', this.customValues.d || 0, 'd')}
                    
                    <div class="fader-scale-shared">
                      <span>6</span>
                    </div>
                    
                    ${this.renderFader('S', this.customValues.s || 0, 's')}
                    
                    <div class="fader-scale-shared">
                      <span>0</span>
                    </div>
                    
                    ${this.renderFader('R', this.customValues.r || 0, 'r')}
                  </div>
                </div>

                <!-- FILTER PANEL -->
                <div class="panel-card">
                  <div class="panel-header red">Filter</div>
                  
                  <div class="panel-content" style="padding-top: 24px;">
                    <!-- shared ticks labels -->
                    <div class="fader-scale-shared" style="margin-right: -4px;">
                      <span>120</span>
                      <span>55</span>
                      <span>10</span>
                    </div>
                    ${this.renderFader('Freq', this.customValues.freq || 50, 'freq')}
                    
                    <div class="fader-scale-shared">
                      <span>65</span>
                      <span>0</span>
                      <span>-8</span>
                    </div>
                    ${this.renderFader('Res', this.customValues.res || 0, 'res')}
                    
                    <div class="fader-scale-shared">
                      <span>16</span>
                      <span>0</span>
                      <span>-4</span>
                    </div>
                    ${this.renderFader('Env Mod', this.customValues.env || 50, 'env')}
                  </div>
                </div>
              </div>

              <!-- CHORUS & UTILITIES PANEL -->
              <div class="panel-card full-width-module">
                <div class="panel-header red" style="background: linear-gradient(180deg, #3c3e44 0%, #202124 100%); border-bottom: 2px solid #141517;">Chorus & Utilities</div>
                
                <div class="chorus-panel-grid" style="padding-top: 24px;">
                  
                  <!-- Section 1: Chorus -->
                  <div class="chorus-section">
                    <div class="chorus-picker">
                      <div class="chorus-button">
                        <span>OFF</span>
                        <div class="led-well ${isChorusOffActive ? 'active' : ''}"></div>
                        <button class="btn-key key-cream ${isChorusOffActive ? 'active' : ''}"></button>
                      </div>
                      <div class="chorus-button">
                        <span>I</span>
                        <div class="led-well ${isChorusIActive ? 'active' : ''}"></div>
                        <button class="btn-key key-cream ${isChorusIActive ? 'active' : ''}"></button>
                      </div>
                      <div class="chorus-button">
                        <span>II</span>
                        <div class="led-well ${isChorusIIActive ? 'active' : ''}"></div>
                        <button class="btn-key key-cream ${isChorusIIActive ? 'active' : ''}"></button>
                      </div>
                    </div>
                  </div>

                  <!-- Section 2: Utilities -->
                  <div class="chorus-section">
                    <div class="chorus-picker">
                      <div class="chorus-button">
                        <span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8c8e94" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display:block; margin-bottom: 1px;">
                            <path d="M7 16V4M7 4L3 8M7 4L11 8M17 8V20M17 20L21 16M17 20L13 16"/>
                          </svg>
                        </span>
                        <div class="led-well"></div>
                        <button class="btn-key key-sub" title="Send/Get Patch" @click=${this.handleSendGet}></button>
                      </div>
                      <div class="chorus-button">
                        <span style="font-size: 0.75rem; line-height: 12px; margin-bottom: 1px;">?</span>
                        <div class="led-well ${this.aboutOpen ? 'active' : ''}"></div>
                        <button class="btn-key key-sub ${this.aboutOpen ? 'active' : ''}" title="Help" @click=${() => this.aboutOpen = true}></button>
                      </div>
                    </div>
                  </div>

                  <!-- Section 3: Knobs -->
                  <div class="chorus-section">
                    <div style="display:flex; gap:10px;">
                      ${this.renderKnob('Effect', this.customValues.effect || 0, 'effect')}
                      ${this.renderKnob('Delay', this.customValues.delay || 0, 'delay')}
                      ${this.renderKnob('Reverb', this.customValues.reverb || 0, 'reverb')}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- Footer bar inside synth container -->
        <div class="synth-footer">
          <a href="https://github.com/warmsynths/j6-presets" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          <span class="footer-divider">|</span>
          <a href="mailto:warmsythsiloveyou@ail.com">
            Made with ❤️ by warmsynths
          </a>
          <span class="footer-divider">|</span>
          <a href="https://ko-fi.com/warmsynths" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.061-4.3-.037-.046-.054-.09-.054-.118-.014-.015-.024-.023-.024-.023-.497-1.182-.266-2.59.882-3.13 1.554-.735 2.809.18 3.565 1.127.756-.947 2.011-1.862 3.565-1.127 1.149.54 1.379 1.948.882 3.13 0 0-.01.008-.024.023-.001.027-.018.072-.054.118-.328.618-1.503 1.93-2.248 2.812zm9.44 1.455c-1.077 1.054-3.52 1.492-3.52 1.492s.103-3.66.1-4.821c-.004-1.229-.024-2.864-.024-2.864s1.77-.076 2.502.213c.732.288 1.42 1.021 1.545 1.834.126.812-.061 1.761-1.065 2.696z"/></svg>
            Support
          </a>
        </div>
      </div>

      <!-- PRESET LIST OVERLAY MODAL -->
      ${this.presetListOpen ? html`
        <div class="modal-backdrop" @click=${() => this.presetListOpen = false}>
          <div class="preset-dropdown-container" @click=${(e: Event) => e.stopPropagation()}>
            <j6-preset-list
              .presets=${presetsData}
              .selectedId=${this.selectedPreset.id}
              @preset-selected=${(e: CustomEvent) => {
          this.selectedPreset = e.detail;
          this.presetListOpen = false;
        }}
            ></j6-preset-list>
          </div>
        </div>
      ` : ''}



      <!-- ABOUT/HELP MODAL -->
      ${this.aboutOpen ? html`
        <div class="modal-backdrop" @click=${() => this.aboutOpen = false}>
          <div class="retro-modal" @click=${(e: Event) => e.stopPropagation()}>
            <div class="modal-header">
              <span class="modal-title">ABOUT ROLAND J-6 EXPLORER</span>
              <button class="close-btn" @click=${() => this.aboutOpen = false}>&times;</button>
            </div>
            <div class="modal-body text-content">
              <h3>Roland J-6 Preset Explorer</h3>
              <p>This web explorer allows you to view and interact with the preset configurations for the Roland J-6 synthesizer.</p>
              <p>Selecting presets visually moves the physical knobs and sliders to show their underlying settings as modeled by the Roland Juno-60 faceplate parameters.</p>
              <p><strong>Interactive Tweaking:</strong> Click and drag up/down on the sliders and knobs to custom-tweak the patch sound parameters! The screen will show an <code>[EDITED]</code> warning.</p>
              <p><strong>Patch Dump (Send/Get):</strong> Click <em>Send/Get</em> to copy the current patch values as a formatted text summary, perfect for archiving your edits!</p>
              <p>Based on Nick Standing's J-6 video. <a href="https://www.youtube.com/watch?v=z6hoNwWadR8" target="_blank" rel="noreferrer">Watch the source video</a>.</p>
            </div>
            <div class="modal-footer">
              <button class="retro-btn accent" @click=${() => this.aboutOpen = false}>CLOSE</button>
            </div>
          </div>
        </div>
      ` : ''}
    `;
  }
}