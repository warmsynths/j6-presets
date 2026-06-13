var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
let J6PresetList = class J6PresetList extends LitElement {
    constructor() {
        super(...arguments);
        this.presets = [];
        this.selectedId = '';
        this.isOpen = false;
    }
    static { this.styles = css `
    :host {
      display: block;
      background: #1e1e1e;
      border: 1px solid #333;
      border-radius: 8px;
      overflow-y: auto;
      max-height: 80vh;
    }
    .drawer-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: #2a2a2a;
      cursor: pointer;
      border-bottom: 1px solid #333;
      font-weight: bold;
    }
    .drawer-header:hover {
      background: #333;
    }
    .toggle-icon {
      color: #ff5500;
      font-size: 0.8rem;
    }
    .drawer-content {
      display: none;
    }
    .drawer-content.open {
      display: block;
    }
    
    /* List styles */
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    li {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid #333;
      cursor: pointer;
      transition: background-color 0.2s;
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    li:hover {
      background-color: #2a2a2a;
    }
    li.selected {
      background-color: #ff550033;
      border-left: 4px solid #ff5500;
    }
    .id {
      color: #ff5500;
      font-family: monospace;
      font-size: 1.1rem;
      font-weight: bold;
      min-width: 3rem;
    }
    
    /* Desktop override: Always show list, hide drawer header */
    @media (min-width: 768px) {
      .drawer-header {
        display: none;
      }
      .drawer-content {
        display: block;
      }
    }
  `; }
    render() {
        // Find the currently selected preset to display in the header
        const selectedPreset = this.presets.find(p => (p.id || p.bankPatch) === this.selectedId);
        const headerTitle = selectedPreset
            ? `${selectedPreset.id || selectedPreset.bankPatch} - ${selectedPreset.name || selectedPreset.soundNameCategory}`
            : 'Select a Preset...';
        return html `
      <div class="drawer-header" @click=${() => this.isOpen = !this.isOpen}>
        <div class="current-selection">
          <span class="id">☰</span> <span>${headerTitle}</span>
        </div>
        <div class="toggle-icon">${this.isOpen ? '▲' : '▼'}</div>
      </div>

      <div class="drawer-content ${this.isOpen ? 'open' : ''}">
        <ul>
          ${this.presets.map((preset) => {
            const id = preset.id || preset.bankPatch;
            const name = preset.name || preset.soundNameCategory;
            return html `
              <li class=${this.selectedId === id ? 'selected' : ''} @click=${() => {
                this.isOpen = false; // Close drawer on selection
                this.dispatchEvent(new CustomEvent('preset-selected', { detail: preset }));
            }}>
                <span class="id">${id}</span>
                <span class="name">${name}</span>
              </li>
            `;
        })}
        </ul>
      </div>
    `;
    }
};
__decorate([
    property({ type: Array })
], J6PresetList.prototype, "presets", void 0);
__decorate([
    property({ type: String })
], J6PresetList.prototype, "selectedId", void 0);
__decorate([
    state()
], J6PresetList.prototype, "isOpen", void 0);
J6PresetList = __decorate([
    customElement('j6-preset-list')
], J6PresetList);
export { J6PresetList };
