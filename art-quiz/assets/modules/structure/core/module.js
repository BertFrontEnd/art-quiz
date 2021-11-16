import { wfm } from '../tools/utility.js';
import { toggleDisableRange, offsetRange } from '../../app/app.listeners.js';

export class Module {
  constructor(config) {
    this.components = config.components;
    this.bootstrapComponent = config.bootstrap;
    this.routes = config.routes;
  }

  start() {
    this.initComponent();
    if (this.routes) this.initRoutes();
  }

  initComponent() {
    this.bootstrapComponent.render();
    this.components.forEach(this.renderComponent.bind(this));
  }

  initRoutes() {
    window.addEventListener('hashchange', this.renderRoute.bind(this));
    this.renderRoute();
  }

  renderRoute() {
    let url = wfm.router();
    let route = this.routes.find((route) => route.path === url);

    if (wfm.isUndefined(route)) {
      route = this.routes.find((el) => el.path === 'error');
    }

    let currentRouteSelector = route.component.selector;

    document.querySelector(
      '#app-main-router',
    ).innerHTML = `<section id="${currentRouteSelector.slice(1)}"></section>`;

    this.renderComponent(route.component);

    toggleDisableRange();
    offsetRange();
  }

  renderComponent(component) {
    component.render();
  }
}
