export class Component {
  constructor(config) {
    this.template = config.template;
    this.selector = config.selector;
    this.element = null;
  }

  render() {
    this.element = document.querySelector(this.selector);
    if (!this.element)
      throw new Error(
        `Component with selector '${this.selector}' wasn't found`,
      );
    this.element.innerHTML = this.template;
  }
}
