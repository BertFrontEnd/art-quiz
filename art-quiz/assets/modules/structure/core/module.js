export class Module {
  constructor(config) {
    this.components = config.components;
    this.bootstrapComponent = config.bootstrap;
  }

  start() {
    this.initComponent();
  }

  initComponent() {
    this.bootstrapComponent.render();
    this.components.forEach((component) => component.render());
  }
}
