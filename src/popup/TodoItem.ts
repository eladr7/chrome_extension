const template = document.createElement("template");

template.innerHTML = `
<style>
  .span-style {
    font-size: 0.65rem;
    font-weight: lighter;
    color: green;
  }
</style>

<label>
  <input type="checkbox"/>
  <slot></slot>
  <span class="span-style">
    <slot name="todo-span-slot"></slot>
  </span>
</label>
`;

class TodoItem extends HTMLElement {
  checkbox: HTMLInputElement | null;
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
    this.checkbox = shadow.querySelector("input");
  }

  static get observedAttributes() {
    return ["checked"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "checked") {
      this.toggleCheckbox(newValue);
    }
  }

  toggleCheckbox(value: string) {
    this.dataset.checked =
      value !== null && value !== "false" ? "true" : "false";
  }
}

customElements.define("todo-item", TodoItem);
