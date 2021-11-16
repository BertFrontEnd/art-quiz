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

  /* renderArtistCategory() {
    const categoryContainer = document.querySelector('#app-artist-page');

    for (let i = 0; i < 20; i++) {
      const divElement = document.createElement('div');
      const imgElement = document.createElement('img');
      const spanCategoryElement = document.createElement('span');
      const spanScoreElement = document.createElement('span');
      divElement.classList.add('artist-container-quiz');
      imgElement.classList.add('artist-image-quiz');
      imgElement.src = `./assets/img/gallery/gallery${i}.jpg`;
      imgElement.alt = `Category Image ${i}`;
      spanCategoryElement.classList.add('artist-category-quiz');
      spanScoreElement.classList.add('artist-score-quiz');
      categoryContainer.append(divElement);
      divElement.append(imgElement);
      divElement.append(spanCategoryElement);
      divElement.append(spanScoreElement);
    }
  } */
}
