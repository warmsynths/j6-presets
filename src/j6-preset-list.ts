import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Preset } from './types.js';

/**
 * A beautiful, retro-styled dropdown/overlay list of presets.
 * Appears when clicking on the Preset Name or Bank/Patch display.
 */
@customElement('j6-preset-list')
export class J6PresetList extends LitElement {
  @property({ type: Array }) presets: Preset[] = [];
  @property({ type: String }) selectedId = '';

  static styles = css`
    :host {
      display: block;
      background: #141416;
      border: 3px solid #3c3d42;
      border-radius: 8px;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.85), inset 0 0 20px rgba(0, 0, 0, 0.6);
      overflow: hidden;
      max-height: 400px;
      font-family: 'Inter', system-ui, sans-serif;
      color: #e2e2e4;
      z-index: 1000;
    }
    
    .list-header {
      background: #1c1d22;
      border-bottom: 2px solid #2e2f34;
      padding: 10px 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .list-title {
      font-size: 0.85rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #9e9fa4;
    }
    
    .preset-count {
      font-family: 'VT323', monospace;
      color: #ff5d00;
      font-size: 1.2rem;
      letter-spacing: 0.05em;
      background: #0c0c0d;
      padding: 2px 8px;
      border-radius: 4px;
      border: 1px solid #ff5d0033;
      box-shadow: 0 0 6px rgba(255, 93, 0, 0.15);
    }
    
    .scroll-container {
      overflow-y: auto;
      max-height: 350px;
    }

    /* Custom Retro Scrollbar */
    .scroll-container::-webkit-scrollbar {
      width: 10px;
    }
    .scroll-container::-webkit-scrollbar-track {
      background: #0f0f11;
      border-left: 1px solid #232328;
    }
    .scroll-container::-webkit-scrollbar-thumb {
      background: #3a3b40;
      border-radius: 5px;
      border: 2px solid #0f0f11;
    }
    .scroll-container::-webkit-scrollbar-thumb:hover {
      background: #ff5d00;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    li {
      padding: 10px 14px;
      border-bottom: 1px solid #1f2024;
      cursor: pointer;
      display: grid;
      grid-template-columns: 50px 1fr;
      gap: 12px;
      align-items: center;
      transition: all 0.15s ease;
      font-size: 0.9rem;
    }
    
    li:hover {
      background: #24252b;
      color: #ffffff;
    }
    
    li.selected {
      background: rgba(255, 93, 0, 0.08);
      border-left: 4px solid #ff5d00;
      color: #ff7700;
    }
    
    .preset-id {
      font-family: 'VT323', monospace;
      font-size: 1.4rem;
      color: #ff5d00;
      text-shadow: 0 0 4px rgba(255, 93, 0, 0.2);
    }
    
    .preset-name {
      font-weight: 500;
    }

    .no-results {
      padding: 30px;
      text-align: center;
      color: #6a6b72;
      font-family: 'VT323', monospace;
      font-size: 1.5rem;
    }
  `;

  render() {
    return html`
      <div class="list-header">
        <span class="list-title">Select Preset</span>
        <span class="preset-count">MATCH: ${this.presets.length}</span>
      </div>
      <div class="scroll-container">
        ${this.presets.length === 0 
          ? html`<div class="no-results">NO PRESETS FOUND</div>`
          : html`
            <ul>
              ${this.presets.map((preset) => {
                const id = preset.id || preset.bankPatch;
                const name = preset.name || preset.soundNameCategory;
                const isSelected = this.selectedId === id;
                
                return html`
                  <li 
                    class=${isSelected ? 'selected' : ''} 
                    @click=${() => {
                      this.dispatchEvent(new CustomEvent('preset-selected', { detail: preset }));
                    }}
                  >
                    <span class="preset-id">${id}</span>
                    <span class="preset-name">${name}</span>
                  </li>
                `;
              })}
            </ul>
          `
        }
      </div>
    `;
  }
}