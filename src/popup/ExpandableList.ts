class ExpandableList extends HTMLUListElement {
  btn: HTMLButtonElement | null;
  constructor() {
    super();
    this.style.position = "relative";
    this.btn = document.createElement("button");
    this.btn.style.position = "absolute";
    this.btn.style.top = "0";
    this.btn.style.padding = "0";
    this.btn.style.border = "none";
    this.btn.style.background = "none";
    this.btn.style.left = "-15px";
    this.btn.style.cursor = "pointer";
    this.btn.innerText = ">";
    this.btn.addEventListener("click", () => {
      this.dataset.expanded = this.isExpanded ? "false" : "true";
    });
    this.appendChild(this.btn);
  }

  get isExpanded() {
    return this.dataset.expanded !== "false" && this.dataset.expanded !== null;
  }

  static get observedAttributes() {
    return ["data-expanded"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    this.updateStyles();
  }

  updateStyles() {
    const transform = this.isExpanded ? "rotate(90deg)" : "";
    this.btn!.style.transform = transform;
    [...this.children].forEach((child) => {
      if (child instanceof HTMLElement) {
        if (child !== this.btn) {
          child.style.display = this.isExpanded ? "" : "none";
        }
      }
    });
  }
}

customElements.define("expandable-list", ExpandableList, {
  extends: "ul",
});
