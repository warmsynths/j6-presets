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
  @state() private searchQuery: string = '';
  @state() private activeGenreMood: string = 'All';
  @state() private activeInstrumentType: string = 'All';
  @state() private activeCharacter: string = 'All';
  @state() private activeEnvelope: string = 'All';
  @state() private activeEffects: string = 'All';
  @state() private activeWaveform: string = 'All';

  // UI Interactive States
  @state() private presetListOpen = false;
  @state() private filtersOpen = false;
  @state() private aboutOpen = false;
  @state() private searchOn = true;
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
      background: #1b1c20;
      border: 4px solid #3c3d42;
      border-radius: 12px;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), inset 0 2px 2px rgba(255,255,255,0.1);
      overflow: hidden;
      position: relative;
    }

    /* Grille stripes on top metal bar */
    .synth-header {
      background: repeating-linear-gradient(90deg, #16171a, #16171a 3px, #1e1f24 3px, #1e1f24 6px);
      border-bottom: 3px solid #0d0d0f;
      padding: 16px 24px;
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
      letter-spacing: 0.1em;
      color: #a4a5aa;
      text-transform: uppercase;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    }

    .plugout-badge {
      background: linear-gradient(180deg, #e4e6eb 0%, #b2b4b8 100%);
      border: 2px solid #5a5c62;
      border-radius: 4px;
      padding: 4px 10px;
      font-size: 0.65rem;
      font-weight: 900;
      color: #ff5d00;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.3);
      text-shadow: 0 0 3px rgba(255, 93, 0, 0.4);
    }

    .header-center-knobs {
      display: flex;
      gap: 24px;
      align-items: center;
    }

    .header-knob-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }

    .header-knob-label {
      font-size: 0.55rem;
      font-weight: bold;
      color: #8c8e94;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .juno-logo {
      font-weight: 900;
      font-size: 2.8rem;
      font-style: italic;
      color: #b4b6ba;
      letter-spacing: -0.05em;
      text-shadow: 2px 2px 0px #0d0d0f, 4px 4px 10px rgba(0,0,0,0.5);
    }

    /* Main Synth Panel Grid */
    .synth-body {
      padding: 16px;
      background: radial-gradient(circle at center, #22232a 0%, #15161a 100%);
    }

    .synth-grid {
      display: grid;
      grid-template-columns: 1.25fr 1fr;
      gap: 16px;
    }

    .grid-left {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .grid-right {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .full-width-module {
      grid-column: 1 / -1;
    }

    /* Skeuomorphic Module Card styling */
    .panel-card {
      background: #0d0d10;
      border: 2px solid #2e3037;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.05);
      position: relative;
    }

    .panel-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      border: 1px solid #16171c;
      border-radius: 4px;
      pointer-events: none;
    }

    /* Red and Blue headers */
    .panel-header {
      padding: 6px 12px;
      font-size: 0.75rem;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #ffffff;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
    }

    .panel-header.red {
      background: linear-gradient(180deg, #be3127 0%, #9e241c 100%);
      border-bottom: 2px solid #751a14;
    }

    .panel-header.blue {
      background: linear-gradient(180deg, #3684b5 0%, #266b96 100%);
      border-bottom: 2px solid #1c4f70;
    }

    .panel-content {
      padding: 16px;
      display: flex;
      gap: 16px;
      justify-content: space-around;
      align-items: center;
    }

    /* Fader controls styling */
    .fader-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 150px;
      width: 44px;
    }

    .fader-label {
      font-size: 0.65rem;
      font-weight: bold;
      color: #9e9fa4;
      text-transform: uppercase;
      margin-bottom: 6px;
    }

    .fader-body {
      flex: 1;
      display: flex;
      align-items: center;
      position: relative;
      width: 100%;
      justify-content: center;
    }

    .fader-ticks {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 90px;
      position: absolute;
    }

    .fader-ticks.left {
      left: 2px;
    }

    .fader-ticks.right {
      right: 2px;
    }

    .fader-ticks span {
      display: block;
      width: 5px;
      height: 1.5px;
      background: #44454d;
    }

    .fader-ticks span.major {
      width: 8px;
      background: #888990;
    }

    .fader-track {
      width: 8px;
      height: 90px;
      background: #050507;
      border-radius: 4px;
      border: 1px solid #232429;
      position: relative;
      cursor: pointer;
    }

    .fader-track-inner {
      position: absolute;
      top: 0; bottom: 0; left: 0; right: 0;
    }

    .fader-handle {
      width: 24px;
      height: 16px;
      background: linear-gradient(180deg, #d2d4d9 0%, #8c8e94 50%, #4c4e54 50%, #76787e 100%);
      border-radius: 3px;
      border: 1px solid #1a1a1c;
      box-shadow: 0 3px 6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.7);
      position: absolute;
      left: calc(50% - 12px);
      cursor: ns-resize;
      transition: bottom 0.05s linear;
    }

    .fader-handle::after {
      content: '';
      display: block;
      position: absolute;
      top: calc(50% - 1.5px);
      left: 0; right: 0;
      height: 3px;
      background: #ff5d00;
      box-shadow: 0 0 4px #ff5d00;
    }

    .fader-val-label {
      font-family: monospace;
      font-size: 0.6rem;
      color: #6c6d72;
      margin-top: 4px;
    }

    /* Rotary Knobs styling */
    .knob-control {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }

    .knob-dial-wrapper {
      position: relative;
      width: 38px;
      height: 38px;
    }

    .knob-dial {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #42444c, #16171b);
      border: 1.5px solid #282a30;
      box-shadow: 0 4px 6px rgba(0,0,0,0.5), inset 0 2px 2px rgba(255,255,255,0.08);
      position: relative;
      cursor: ns-resize;
    }

    .knob-indicator {
      position: absolute;
      top: 3px;
      left: calc(50% - 1.5px);
      width: 3px;
      height: 12px;
      background: #e0e2e5;
      border-radius: 2px;
      transform-origin: bottom center;
    }

    .knob-label {
      font-size: 0.6rem;
      font-weight: bold;
      color: #9e9fa4;
      text-transform: uppercase;
    }

    /* PATCH display panel elements */
    .led-screen {
      background-color: #1c0502;
      background-image: radial-gradient(rgba(255, 93, 0, 0.15) 1px, transparent 0);
      background-size: 3px 3px;
      border: 4px solid #101114;
      box-shadow: inset 0 0 20px rgba(0,0,0,0.9), 0 0 10px rgba(255, 93, 0, 0.08);
      padding: 12px 16px;
      border-radius: 6px;
      min-height: 100px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 8px;
    }

    .led-top-row {
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
    }

    .led-patch-btn {
      background: linear-gradient(180deg, #f0ebd9 0%, #dbd4bf 100%);
      border: 2px solid #635f52;
      border-radius: 4px;
      padding: 6px 12px;
      font-family: 'VT323', monospace;
      font-size: 1.4rem;
      font-weight: bold;
      color: #2b271d;
      cursor: pointer;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.6), 0 3px 5px rgba(0,0,0,0.4);
      transition: all 0.1s ease;
    }

    .led-patch-btn:hover {
      background: linear-gradient(180deg, #fffae8 0%, #e6dfc7 100%);
    }

    .led-preset-btn {
      background: linear-gradient(180deg, #f0ebd9 0%, #dbd4bf 100%);
      border: 2px solid #635f52;
      border-radius: 4px;
      padding: 6px 14px;
      font-family: 'VT323', monospace;
      font-size: 1.3rem;
      font-weight: bold;
      color: #2b271d;
      cursor: pointer;
      text-transform: uppercase;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.6), 0 3px 5px rgba(0,0,0,0.4);
      transition: all 0.1s ease;
    }

    .led-preset-btn:hover {
      background: linear-gradient(180deg, #fffae8 0%, #e6dfc7 100%);
    }

    .led-search-box {
      flex: 1;
      position: relative;
      min-width: 140px;
    }

    .led-search-input {
      width: 100%;
      background: transparent;
      border: none;
      color: #ff5d00;
      font-family: 'VT323', monospace;
      font-size: 1.8rem;
      letter-spacing: 0.05em;
      outline: none;
      text-transform: uppercase;
      text-shadow: 0 0 6px rgba(255, 93, 0, 0.7);
      padding: 0 24px 0 4px;
      box-sizing: border-box;
    }

    .led-search-input::placeholder {
      color: #ff5d0044;
      text-shadow: none;
    }

    .led-search-icon {
      position: absolute;
      right: 4px;
      top: calc(50% - 10px);
      width: 20px;
      height: 20px;
      fill: #ff5d00;
      filter: drop-shadow(0 0 3px rgba(255, 93, 0, 0.7));
      pointer-events: none;
    }

    .search-toggle-btn {
      width: 20px;
      height: 20px;
      background: #2b1f1d;
      border: 2px solid #523c39;
      border-radius: 4px;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0,0,0,0.4);
      position: relative;
    }

    .search-toggle-btn.active {
      background: #ff5d00;
      border-color: #ffa166;
      box-shadow: 0 0 10px #ff5d00;
    }

    .search-toggle-label {
      font-size: 0.55rem;
      font-weight: bold;
      color: #8c8e94;
      text-transform: uppercase;
    }

    .led-notes {
      font-size: 0.8rem;
      line-height: 1.3;
      color: #dfd0bb;
      min-height: 2.2rem;
    }

    .led-counts {
      font-family: 'VT323', monospace;
      font-size: 1rem;
      color: #ff5d00aa;
      text-align: right;
      letter-spacing: 0.05em;
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

    .waveform-led {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #2b1b18;
      border: 1px solid #4a3633;
    }

    .waveform-led.active {
      background: #ff5d00;
      border-color: #ffa166;
      box-shadow: 0 0 8px #ff5d00, 0 0 12px #ff5d00;
    }

    .btn-beige {
      width: 32px;
      height: 32px;
      background: linear-gradient(180deg, #f0ebd9 0%, #dbd4bf 100%);
      border: 2px solid #5a574c;
      border-radius: 4px;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.6), 0 3px 5px rgba(0,0,0,0.5);
      cursor: pointer;
    }

    .btn-beige.active {
      background: linear-gradient(180deg, #ffffff 0%, #eae4cf 100%);
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.3), 0 1px 1px rgba(255,255,255,0.2);
    }

    .btn-orange {
      width: 32px;
      height: 32px;
      background: linear-gradient(180deg, #d3692d 0%, #b84c14 100%);
      border: 2px solid #5e311a;
      border-radius: 4px;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 3px 5px rgba(0,0,0,0.5);
      cursor: pointer;
    }

    .btn-orange.active {
      background: linear-gradient(180deg, #ff7b36 0%, #ff5d00 100%);
      border-color: #ff9152;
      box-shadow: 0 0 12px #ff5d00, inset 0 1px 0 rgba(255,255,255,0.5);
    }

    /* Chorus panel specific elements */
    .chorus-panel-grid {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      width: 100%;
      box-sizing: border-box;
      gap: 12px;
    }

    .chorus-section {
      display: flex;
      align-items: center;
      gap: 12px;
      justify-content: center;
    }

    .chorus-section:not(:last-child) {
      border-right: 1px solid #232429;
      padding-right: 16px;
    }

    .chorus-picker {
      display: flex;
      gap: 8px;
    }

    .chorus-button {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }

    .chorus-button span {
      font-size: 0.55rem;
      font-weight: bold;
      color: #8c8e94;
    }

    .chorus-led {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #2b1f1a;
    }

    .chorus-led.active {
      background: #ff5d00;
      box-shadow: 0 0 6px #ff5d00;
    }



    /* Modals & Overlays */
    .modal-backdrop {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(4px);
      z-index: 2000;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .preset-dropdown-container {
      width: 100%;
      max-width: 500px;
    }

    .retro-modal {
      background: #141518;
      border: 3px solid #3c3d42;
      border-radius: 8px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9);
      width: 100%;
      max-width: 550px;
      overflow: hidden;
      font-family: 'Inter', sans-serif;
    }

    .modal-header {
      background: linear-gradient(180deg, #be3127 0%, #9e241c 100%);
      padding: 10px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #751a14;
    }

    .modal-title {
      font-size: 0.8rem;
      font-weight: bold;
      color: #fff;
      letter-spacing: 0.08em;
    }

    .close-btn {
      background: transparent;
      border: none;
      color: #fff;
      font-size: 1.4rem;
      cursor: pointer;
      line-height: 1;
    }

    .modal-body {
      padding: 20px;
    }

    .modal-body.text-content h3 {
      margin-top: 0;
      color: #ff5d00;
    }

    .modal-body.text-content p {
      line-height: 1.5;
      font-size: 0.9rem;
      color: #b2b4b8;
    }

    .modal-body.text-content a {
      color: #ff5d00;
      text-decoration: none;
    }

    .modal-body.text-content a:hover {
      text-decoration: underline;
    }

    .filter-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
    }

    .filter-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .filter-group label {
      font-size: 0.75rem;
      font-weight: bold;
      color: #8c8e94;
      text-transform: uppercase;
    }

    .filter-select {
      background: #0c0c0e;
      border: 2px solid #2e3037;
      color: #e2e2e4;
      border-radius: 4px;
      padding: 8px;
      font-size: 0.85rem;
      outline: none;
    }

    .modal-footer {
      background: #0f1012;
      padding: 12px 16px;
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      border-top: 1px solid #1f2025;
    }

    .retro-btn {
      background: linear-gradient(180deg, #3c3e44 0%, #202124 100%);
      border: 2px solid #5a5c62;
      color: #e2e2e4;
      font-size: 0.7rem;
      font-weight: bold;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
      text-transform: uppercase;
    }

    .retro-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .retro-btn.accent {
      background: linear-gradient(180deg, #d3692d 0%, #b84c14 100%);
      border-color: #5e311a;
      color: #fff;
    }

    .retro-btn.accent:hover {
      background: linear-gradient(180deg, #ff7b36 0%, #ff5d00 100%);
    }

    /* Attribution footer text inside synth faceplate bottom */
    .synth-footer {
      padding: 16px 24px;
      background: #0d0d10;
      border-top: 3px solid #1a1b1f;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.75rem;
      color: #6a6b72;
    }

    .synth-footer a {
      color: #ff5d00;
      text-decoration: none;
    }

    .synth-footer a:hover {
      text-decoration: underline;
    }

    /* Mobile vertical layout queries */
    @media (max-width: 768px) {
      :host {
        padding: 8px;
      }
      .synth-container {
        border-width: 2px;
      }
      .roland-logo {
        font-size: 1.6rem;
      }
      .juno-logo {
        font-size: 2rem;
      }
      .synth-grid {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .grid-right {
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
      }
      /* side-by-side for envelope and filter on mobile as in Image 2 */
      .grid-right-mobile-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      .panel-content {
        padding: 10px;
        gap: 8px;
      }
      .waveform-picker {
        overflow-x: auto;
        padding-bottom: 4px;
        width: 100%;
        justify-content: flex-start;
      }
      .chorus-panel-grid {
        flex-direction: column;
        gap: 20px;
        padding: 8px 0;
      }
      .chorus-section {
        width: 100%;
      }
      .chorus-section:not(:last-child) {
        border-right: none;
        padding-right: 0;
        border-bottom: 1px solid #232429;
        padding-bottom: 16px;
      }
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
    const patchDump = `--- Roland J-6 / JUNO-60 Patch Info ---
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

  private clearFilters() {
    this.searchQuery = '';
    this.activeGenreMood = 'All';
    this.activeInstrumentType = 'All';
    this.activeCharacter = 'All';
    this.activeEnvelope = 'All';
    this.activeEffects = 'All';
    this.activeWaveform = 'All';
  }

  private get hasActiveFilters() {
    return this.searchQuery !== '' ||
      this.activeGenreMood !== 'All' ||
      this.activeInstrumentType !== 'All' ||
      this.activeCharacter !== 'All' ||
      this.activeEnvelope !== 'All' ||
      this.activeEffects !== 'All' ||
      this.activeWaveform !== 'All';
  }

  get filteredPresets() {
    const q = this.searchQuery.trim().toLowerCase();
    return presetsData.filter(preset => {
      const hay = [preset.name, preset.notes, preset.waveformOscType, preset.bankPatch, preset.filterFreq, preset.delayEffects, (preset.tags || []).join(' ')]
        .filter(Boolean)
        .join(' ').toLowerCase();

      const matchesSearch = !this.searchOn || q === '' || hay.includes(q);
      const matchesGenreMood = this.activeGenreMood === 'All' || (preset.tags || []).some((t: string) => t.toLowerCase() === this.activeGenreMood.toLowerCase());
      const matchesInstrumentType = this.activeInstrumentType === 'All' || (preset.tags || []).some((t: string) => t.toLowerCase() === this.activeInstrumentType.toLowerCase());
      const matchesCharacter = this.activeCharacter === 'All' || (preset.tags || []).some((t: string) => t.toLowerCase() === this.activeCharacter.toLowerCase());
      const matchesEnvelope = this.activeEnvelope === 'All' || (preset.tags || []).some((t: string) => t.toLowerCase() === this.activeEnvelope.toLowerCase());
      const matchesEffects = this.activeEffects === 'All' || (preset.tags || []).some((t: string) => t.toLowerCase() === this.activeEffects.toLowerCase());
      const matchesWaveform = this.activeWaveform === 'All' || (preset.tags || []).some((t: string) => t.toLowerCase() === this.activeWaveform.toLowerCase());

      return matchesSearch && matchesGenreMood && matchesInstrumentType && matchesCharacter && matchesEnvelope && matchesEffects && matchesWaveform;
    });
  }

  get groupedTags() {
    const tagSet = new Set<string>();
    presetsData.forEach(p => (p.tags || []).forEach((t: string) => tagSet.add(t)));
    const grouped = new Map<string, string[]>();
    Array.from(tagSet).sort((a, b) => a.localeCompare(b)).forEach(tag => {
      const category = getTagCategory(tag);
      const list = grouped.get(category) ?? [];
      list.push(tag);
      grouped.set(category, list);
    });
    return grouped;
  }

  // Render sub-templates
  private renderFader(label: string, value: number, paramName: string) {
    return html`
      <div 
        class="fader-container"
        @mousedown=${(e: MouseEvent) => this.handleFaderMouseDown(e, paramName)}
        @touchstart=${(e: TouchEvent) => this.handleFaderTouchStart(e, paramName)}
      >
        <span class="fader-label">${label}</span>
        <div class="fader-body">
          <div class="fader-ticks left">
            <span class="major"></span><span></span><span></span><span></span><span></span>
            <span class="major"></span><span></span><span></span><span></span><span></span>
            <span class="major"></span>
          </div>
          <div class="fader-track">
            <div class="fader-track-inner">
              <div class="fader-handle" style="bottom: calc(${value}% * 0.8 + 10px)"></div>
            </div>
          </div>
          <div class="fader-ticks right">
            <span class="major"></span><span></span><span></span><span></span><span></span>
            <span class="major"></span><span></span><span></span><span></span><span></span>
            <span class="major"></span>
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
          <div class="knob-dial">
            <div class="knob-indicator" style="transform: rotate(${rotation}deg)"></div>
          </div>
        </div>
        <span class="knob-label">${label}</span>
      </div>
    `;
  }

  private renderCategorySelect(category: string, tags: string[], selectedValue: string, field: string) {
    return html`
      <div class="filter-group">
        <label>${category}</label>
        <select
          class="filter-select"
          .value=${selectedValue}
          @change=${(e: Event) => { (this as any)[field] = (e.target as HTMLSelectElement).value; }}
        >
          <option value="All">All</option>
          ${tags.map(tag => html`<option value=${tag} ?selected=${selectedValue === tag}>${tag}</option>`) }
        </select>
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

    // Count categories of filtered list
    const filteredList = this.filteredPresets;
    const bassCount = filteredList.filter(pr => (pr.tags || []).some(t => t.toLowerCase() === 'bass')).length;
    const padCount = filteredList.filter(pr => (pr.tags || []).some(t => t.toLowerCase() === 'pad')).length;
    const leadCount = filteredList.filter(pr => (pr.tags || []).some(t => t.toLowerCase() === 'lead')).length;

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
                <div style="padding: 14px; display: flex; flex-direction: column; gap: 10px;">
                  
                  <div class="led-screen">
                    <div class="led-top-row">
                      <button class="led-patch-btn" @click=${() => this.presetListOpen = true}>
                        ${p.id || '1-1'}
                      </button>
                      <button class="led-preset-btn" @click=${() => this.presetListOpen = true}>
                        ${p.name || 'MELLOW SUB OCTAVE'}
                      </button>
                      
                      <!-- LED Search field -->
                      <div class="led-search-box">
                        <input 
                          class="led-search-input" 
                          placeholder="SEARCH..."
                          .value=${this.searchQuery}
                          @input=${(e: InputEvent) => { 
                            this.searchQuery = (e.target as HTMLInputElement).value;
                            this.presetListOpen = true; // Open search lists on type
                          }}
                        />
                        <svg class="led-search-icon" viewBox="0 0 24 24">
                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        </svg>
                      </div>

                      <!-- Search Toggle -->
                      <div style="display:flex; flex-direction:column; align-items:center; gap:3px;">
                        <button 
                          class="search-toggle-btn ${this.searchOn ? 'active' : ''}" 
                          @click=${() => this.searchOn = !this.searchOn}
                        ></button>
                        <span class="search-toggle-label">Search On</span>
                      </div>
                    </div>

                    <div class="led-notes">
                      ${this.isEdited ? html`<span style="color:#ffa166;">[EDITED] </span>` : ''}
                      ${p.notes || 'Factory patch preset definition'}
                    </div>

                    <div class="led-counts">
                      FILTERED [ BASS: ${bassCount} | PAD: ${padCount} | LEAD: ${leadCount} ]
                    </div>
                  </div>
                </div>
              </div>

              <!-- OSCILLATOR PANEL -->
              <div class="panel-card">
                <div class="panel-header blue">Oscillator</div>
                <div class="panel-content">
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
                      <div class="waveform-led ${isSawActive ? 'active' : ''}"></div>
                      <button class="btn-beige ${isSawActive ? 'active' : ''}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label">
                        <svg width="12" height="12" viewBox="0 0 10 10" stroke="#8c8e94" fill="none" stroke-width="1.5">
                          <path d="M1 9 L1 1 L5 1 L5 9 L9 9" />
                        </svg>
                      </span>
                      <div class="waveform-led ${isPulseActive ? 'active' : ''}"></div>
                      <button class="btn-beige ${isPulseActive ? 'active' : ''}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label">
                        <svg width="12" height="12" viewBox="0 0 10 10" stroke="#8c8e94" fill="none" stroke-width="1.5">
                          <path d="M1 5 L9 5" stroke-dasharray="2 2" />
                          <path d="M3 9 L3 1 L7 1 L7 9" />
                        </svg>
                      </span>
                      <div class="waveform-led ${isPulseWidthActive ? 'active' : ''}"></div>
                      <button class="btn-beige ${isPulseWidthActive ? 'active' : ''}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label">
                        <span style="font-size:0.5rem; letter-spacing:0.02em;">SUB</span>
                      </span>
                      <div class="waveform-led ${isSubActive ? 'active' : ''}"></div>
                      <button class="btn-beige ${isSubActive ? 'active' : ''}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label" style="font-size:0.55rem; font-family:sans-serif;">Sub 50%</span>
                      <div class="waveform-led ${isSub50Active ? 'active' : ''}"></div>
                      <button class="btn-beige ${isSub50Active ? 'active' : ''}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label" style="font-size:0.55rem;">Noise</span>
                      <button class="btn-orange ${isNoiseActive ? 'active' : ''}"></button>
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
                  <div class="panel-content">
                    ${this.renderFader('A', this.customValues.a || 0, 'a')}
                    ${this.renderFader('D', this.customValues.d || 0, 'd')}
                    ${this.renderFader('S', this.customValues.s || 0, 's')}
                    ${this.renderFader('R', this.customValues.r || 0, 'r')}
                  </div>
                </div>

                <!-- FILTER PANEL -->
                <div class="panel-card">
                  <div class="panel-header red">Filter</div>
                  <div class="panel-content">
                    ${this.renderFader('Freq', this.customValues.freq || 50, 'freq')}
                    ${this.renderFader('Res', this.customValues.res || 0, 'res')}
                    ${this.renderFader('Env Mod', this.customValues.env || 50, 'env')}
                  </div>
                </div>
              </div>

              <!-- CHORUS & UTILITIES PANEL -->
              <div class="panel-card full-width-module">
                <div class="panel-header red" style="background: linear-gradient(180deg, #3c3e44 0%, #202124 100%); border-bottom: 2px solid #141517;">Chorus & Utilities</div>
                <div class="chorus-panel-grid">
                  
                  <!-- Section 1: Chorus -->
                  <div class="chorus-section">
                    <div class="chorus-picker">
                      <div class="chorus-button">
                        <span>OFF</span>
                        <div class="chorus-led ${isChorusOffActive ? 'active' : ''}"></div>
                        <button class="btn-beige ${isChorusOffActive ? 'active' : ''}"></button>
                      </div>
                      <div class="chorus-button">
                        <span>I</span>
                        <div class="chorus-led ${isChorusIActive ? 'active' : ''}"></div>
                        <button class="btn-beige ${isChorusIActive ? 'active' : ''}"></button>
                      </div>
                      <div class="chorus-button">
                        <span>II</span>
                        <div class="chorus-led ${isChorusIIActive ? 'active' : ''}"></div>
                        <button class="btn-beige ${isChorusIIActive ? 'active' : ''}"></button>
                      </div>
                    </div>
                  </div>

                  <!-- Section 2: Utilities -->
                  <div class="chorus-section">
                    <div style="display:flex; gap: 6px;">
                      <button class="retro-btn accent" @click=${this.handleSendGet}>Send/Get</button>
                      <button class="retro-btn" @click=${() => this.filtersOpen = true}>Option</button>
                      <button class="retro-btn" @click=${() => this.aboutOpen = true}>Help</button>
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
          <div>
            Built by <a href="https://github.com/warmsynths" target="_blank" rel="noopener noreferrer">Warm Synths</a>.
          </div>
          <div>
            Nick Standing's J-6 Compilation Guide.
          </div>
        </div>
      </div>

      <!-- PRESET LIST OVERLAY MODAL -->
      ${this.presetListOpen ? html`
        <div class="modal-backdrop" @click=${() => this.presetListOpen = false}>
          <div class="preset-dropdown-container" @click=${(e: Event) => e.stopPropagation()}>
            <j6-preset-list
              .presets=${this.filteredPresets}
              .selectedId=${this.selectedPreset.id}
              @preset-selected=${(e: CustomEvent) => {
                this.selectedPreset = e.detail;
                this.presetListOpen = false;
              }}
            ></j6-preset-list>
          </div>
        </div>
      ` : ''}

      <!-- FILTER DRAWER MODAL -->
      ${this.filtersOpen ? html`
        <div class="modal-backdrop" @click=${() => this.filtersOpen = false}>
          <div class="retro-modal" @click=${(e: Event) => e.stopPropagation()}>
            <div class="modal-header">
              <span class="modal-title">FILTER PRESETS</span>
              <button class="close-btn" @click=${() => this.filtersOpen = false}>&times;</button>
            </div>
            <div class="modal-body filter-grid">
              ${this.renderCategorySelect('Genre / Mood', this.groupedTags.get('Genre / Mood') || [], this.activeGenreMood, 'activeGenreMood')}
              ${this.renderCategorySelect('Instrument / Type', this.groupedTags.get('Instrument / Type') || [], this.activeInstrumentType, 'activeInstrumentType')}
              ${this.renderCategorySelect('Character', this.groupedTags.get('Character') || [], this.activeCharacter, 'activeCharacter')}
              ${this.renderCategorySelect('Envelope', this.groupedTags.get('Envelope') || [], this.activeEnvelope, 'activeEnvelope')}
              ${this.renderCategorySelect('Effects', this.groupedTags.get('Effects') || [], this.activeEffects, 'activeEffects')}
              ${this.renderCategorySelect('Waveform', this.groupedTags.get('Waveform') || [], this.activeWaveform, 'activeWaveform')}
            </div>
            <div class="modal-footer">
              <button class="retro-btn" @click=${this.clearFilters} ?disabled=${!this.hasActiveFilters}>CLEAR ALL</button>
              <button class="retro-btn accent" @click=${() => this.filtersOpen = false}>OK</button>
            </div>
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