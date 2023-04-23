// By Westbrook Johnson @westbrookj

import {
  LitElement,
  html,
  customElement,
  TemplateResult,
  css,
} from "lit-element";
import "@spectrum-web-components/progress-bar/sp-progress-bar.js";
import '@spectrum-web-components/progress-circle/sp-progress-circle.js';
import '@spectrum-web-components/meter/sp-meter.js';



@customElement("progress-and-meter")
export default class ProgressAndMeter extends LitElement {
  static styles = [
    css`
      :host {
        width: auto;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
      }

      sp-progress-bar { 
        padding: 22px;
      }

      

      h2 {padding-bottom: 0.5em;text-align: left;width:100%;background-color: var(--spectrum-global-color-gray-100);border-bottom:1px solid; border-bottom-color: var(--spectrum-body-text-color);}
    `,
  ];
  protected render(): TemplateResult {
    return html`
    <h2>Progress Bar</h2>
      <sp-progress-bar label="Loaded a lot" progress="71" small></sp-progress-bar>
      <sp-progress-bar
        label="Loaded indeterminately"
        indeterminate
      ></sp-progress-bar>
      <sp-progress-bar
        aria-label="Using aria-label"
        indeterminate
      ></sp-progress-bar>
      <div
          style="width: var(--spectrum-global-dimension-size-3000); height: var(--spectrum-global-dimension-size-2000); display: flex; flex-direction: column; align-items: center; justify-content: space-around; background-color: var(--spectrum-alias-background-color-modal-overlay);"
      >
          <sp-progress-bar
              label="Load overbackground"
              progress="77"
              over-background
          ></sp-progress-bar>
      </div>

      <h2>Progress Circle</h2>

      <div style="width: 250px; height: 150px; display: flex; align-items: center; justify-content: space-around;"><sp-progress-circle label="A small representation of a somewhat completed action" progress="71" size="s"></sp-progress-circle><sp-progress-circle label="A medium representation of a recently started action" progress="22"></sp-progress-circle><sp-progress-circle label="A large representation of an almost completed action" progress="86" size="l"></sp-progress-circle></div>
      <div style="width: 250px; height: 150px; display: flex; align-items: center; justify-content: space-around;  background-color: rgba(0,0,0,0.4);"><sp-progress-circle label="A small representation of a partially completed action" progress="42" static="white" size="s"></sp-progress-circle> <sp-progress-circle label="A medium representation of a barely started action" progress="7" static="white"></sp-progress-circle><sp-progress-circle label="A large representation of a somewhat completed action" progress="68" static="white" size="l"></sp-progress-circle></div>
      <div style="width: 250px; height: 150px; display: flex; align-items: center; justify-content: space-around;"><sp-progress-circle label="A small representation of an unclear amount of work" indeterminate size="s"></sp-progress-circle><sp-progress-circle label="A medium representation of an unclear amount of work" indeterminate></sp-progress-circle><sp-progress-circle label="A large representation of an unclear amount of work" indeterminate size="l"></sp-progress-circle></div>
      
      <h2>Meter</h2>

      <sp-meter size="m" progress="71">Tasks Completed</sp-meter>
      <div style="width: var(--spectrum-global-dimension-size-3000); height: var(--spectrum-global-dimension-size-2000); display: flex; flex-direction: column; align-items: center; justify-content: space-around; background-color: var(--spectrum-alias-background-color-modal-overlay); margin-top: 12px;">
        <sp-meter progress="42" over-background>Tasks Completed</sp-meter>
      </div>



    `;
  }
}
