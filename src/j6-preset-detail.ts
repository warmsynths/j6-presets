import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Preset } from './types.js';

/**
 * Component representing the detailed inspector for a selected Roland J-6 preset.
 * Displays preset tags, dynamic Amp Envelope visualizer, and synthesis parameters.
 */
@customElement('j6-preset-detail')
export class J6PresetDetail extends LitElement {
  /** The selected preset object. */
  @property({ type: Object }) preset: Preset | null = null;

  static styles = css`
    :host {
      display: block;
      background: var(--bg-panel);
      border: 1px solid #333;
      border-radius: 8px;
      padding: 1.5rem;
    }
    .envelope-visualizer {
      background: #000;
      border-radius: 4px;
      padding: 0.5rem;
      margin: 1rem 0;
    }
    svg {
      width: 100%;
      height: 120px;
    }
    path {
      stroke: var(--color-orange-glow); /* Roland orange vibe */
      stroke-width: 3;
      fill: none;
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation: trace-line 3s ease-in-out infinite, neon-pulse 2s infinite ease-in-out;
    }
    @keyframes trace-line {
      0% {
        stroke-dashoffset: 1000;
      }
      40% {
        stroke-dashoffset: 0;
      }
      60% {
        stroke-dashoffset: 0;
      }
      100% {
        stroke-dashoffset: 1000;
      }
    }
    @keyframes neon-pulse {
      0% {
        filter: drop-shadow(0 0 2px rgba(255, 85, 0, 0.4));
        stroke-width: 3px;
      }
      50% {
        filter: drop-shadow(0 0 8px rgba(255, 85, 0, 1)) drop-shadow(0 0 16px rgba(255, 85, 0, 0.6));
        stroke-width: 4px;
      }
      100% {
        filter: drop-shadow(0 0 2px rgba(255, 85, 0, 0.4));
        stroke-width: 3px;
      }
    }
    .params-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    .param-group {
      background: #2a2a2a;
      padding: 1rem;
      border-radius: 4px;
    }
    .param-group h4 {
      margin-top: 0;
      color: var(--color-orange-glow);
      border-bottom: 1px solid var(--border-lighter);
      padding-bottom: 0.5rem;
    }
    .tag-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 0.75rem 0 1rem;
    }
    .tag {
      background: #333;
      color: #f0f0f0;
      padding: 0.25rem 0.6rem;
      border-radius: 999px;
      font-size: 0.8rem;
      border: 1px solid var(--border-lighter);
    }
    .param-group p {
      margin: 0.5rem 0;
    }
  `;

  /**
   * Maps textual envelope parameters (attack, decay, sustain, release) to 
   * standard X/Y coordinate segments for drawing the SVG envelope visualization.
   * 
   * @returns An SVG path definition string (`d` attribute value)
   */
  getEnvelopePath(): string {
    if (!this.preset) return 'M 0 100 L 100 100';
    
    // Default base coordinates: Start at bottom left (0, 100)
    let attackX = this.preset.attack === 'Fast' ? 10 : this.preset.attack === 'Mid' ? 40 : 80;
    let decayX = this.preset.decay === 'Fast' ? attackX + 20 : attackX + 50;
    let sustainY = this.preset.sustain === 'Max' ? 10 : this.preset.sustain === 'Mid' ? 50 : 90;
    let releaseX = this.preset.release === 'Fast' ? decayX + 20 : decayX + 70;

    // Build the SVG path string: Move to start, line to Peak, line to Sustain, line to End
    return `M 10 100 L ${attackX} 10 L ${decayX} ${sustainY} L ${releaseX - 20} ${sustainY} L ${releaseX} 100`;
  }

  render() {
    if (!this.preset) return html`<p>Select a preset to see details</p>`;

    return html`
      <h2>[${this.preset.id}] ${this.preset.name}</h2>
      <p class="description">${this.preset.notes}</p>
      ${this.preset.tags?.length ? html`
        <div class="tag-bar">
          ${this.preset.tags.map((tag: string) => html`<span class="tag">${tag}</span>`) }
        </div>
      ` : ''}
      
      <h3>Amp Envelope Visualizer</h3>
      <div class="envelope-visualizer">
        <svg viewBox="0 0 300 120">
          <line x1="0" y1="100" x2="300" y2="100" stroke="#222" />
          <path d=${this.getEnvelopePath()} />
        </svg>
        <div style="display: flex; justify-content: space-between; font-size: 12px; color: #888;">
          <span>A: ${this.preset.attack}</span>
          <span>D: ${this.preset.decay}</span>
          <span>S: ${this.preset.sustain}</span>
          <span>R: ${this.preset.release}</span>
        </div>
      </div>

      <div class="params-grid">
        <div class="param-group">
          <h4>Oscillator</h4>
          <p><strong>Waveform:</strong> ${this.preset.waveformOscType}</p>
        </div>
        <div class="param-group">
          <h4>Filter</h4>
          <p><strong>Cutoff:</strong> ${this.preset.filterFreq}</p>
          <p><strong>Resonance:</strong> ${this.preset.resonance}</p>
          <p><strong>Env Mod:</strong> ${this.preset.envMod}</p>
        </div>
        <div class="param-group" style="grid-column: 1 / -1;">
          <h4>Effects</h4>
          <p><strong>Delay/Reverb:</strong> ${this.preset.delayEffects || 'Off'}</p>
          <p><strong>Chorus:</strong> ${this.preset.chorus || 'Off'}</p>
        </div>
      </div>
    `;
  }
}
