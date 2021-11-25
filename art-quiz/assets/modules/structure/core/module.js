import { wfm } from '../tools/utility.js';
import {
  toggleDisableRange,
  offsetRange,
  playSound,
  checkBoxValue,
} from '../../app/app.listeners.js';
import { removeActiveLink } from './../tools/link.js';
import { renderArtistCategories } from '../../app/categories/artist-categories.js';
import { renderPictureCategories } from '../../app/categories/picture-categories.js';
import { getLocalStorage } from './../tools/local.js';
/* import { playAudio } from '../../app/app.audio.js'; */
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

  async renderRoute() {
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

    removeActiveLink(route);
    /* toggleDisableRange(); */
    offsetRange();

    if (route.path === 'settings') {
      playSound();
      getLocalStorage('soundValue', '#volume');
      getLocalStorage('timerValue', '#timer');
      checkBoxValue();
      toggleDisableRange();

      /*      const checkBox = document.querySelector('.checkbox-volume-quiz');
      if (checkBox.checked) {
        console.log('play');
        playAudio.setPlay();
      } */
    }

    if (route.path === 'artist') {
      await renderArtistCategories();
    }

    if (route.path === 'picture') {
      await renderPictureCategories();
    }
  }

  renderComponent(component) {
    component.render();
  }
}
