import { TemplateResult } from "../../../node_modules/lit-html/lit-html";

export type Callback = () => void;

export interface Renderable<T> {
  requestRendering: Callback;
  render(data: T): TemplateResult;
}