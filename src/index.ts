// By Westbrook Johnson @westbrookj

import {
  LitElement,
  html,
  customElement,
  TemplateResult,
  css,
} from "lit-element";
import "@spectrum-web-components/progress-bar/sp-progress-bar.js";

@customElement("my-progress-bar")
export default class MyProgressBar extends LitElement {
  static styles = [
    css`
      :host {
        width: 250px;
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
      }
    `,
  ];
  protected render(): TemplateResult {
    return html`
      <sp-progress-bar label="Loaded a lot" progress="1" small></sp-progress-bar>
       <sp-progress-bar label="Loaded a lot" progress="1" small></sp-progress-bar>
        <sp-progress-bar label="Loaded a lot" progress="1" small></sp-progress-bar>
         <sp-progress-bar label="Loaded a lot" progress="1" small></sp-progress-bar>
          <sp-progress-bar label="Loaded a lot" progress="1" small></sp-progress-bar>
      <sp-progress-bar
        label="Loaded indeterminately"
        indeterminate
      ></sp-progress-bar>
    `;
  }
}
