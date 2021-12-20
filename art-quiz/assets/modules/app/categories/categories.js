export class Categories {
  constructor(container, config, increment) {
    this.container = container;
    this.figureElementClass = config.figureElementClass;
    this.directionDataset = config.directionDataset;
    this.aElementClass = config.aElementClass;
    this.imgElementClass = config.imgElementClass;
    this.figcaptionElementClass = config.figcaptionElementClass;
    this.spanCategoryElementClass = config.spanCategoryElementClass;
    this.spanScoreElementClass = config.spanScoreElementClass;
    this.step = config.step;
    this.increment = increment;
  }

  renderCategory() {
    const categoryNumber =
      this.increment < 10 ? '0' + this.increment : this.increment;

    const quizCategory = `${this.directionDataset}-${categoryNumber}`;

    const figureElement = document.createElement('figure');
    figureElement.classList.add(this.figureElementClass);
    figureElement.dataset.direction = quizCategory;

    const aElement = document.createElement('a');
    aElement.classList.add(this.aElementClass);
    aElement.setAttribute('href', `#${quizCategory}`);

    const imgElement = document.createElement('img');
    imgElement.classList.add(this.imgElementClass);
    imgElement.src = `https://raw.githubusercontent.com/BertFrontEnd/art-quiz-images/master/art-quiz-images/img/${
      this.step + this.increment + 10
    }.jpg`;
    imgElement.alt = `Image ${this.increment}`;

    const figcaptionElement = document.createElement('figcaption');
    figcaptionElement.classList.add(this.figcaptionElementClass);

    const spanCategoryElement = document.createElement('span');
    spanCategoryElement.classList.add(this.spanCategoryElementClass);
    spanCategoryElement.textContent = categoryNumber;

    const spanScoreElement = document.createElement('span');
    spanScoreElement.classList.add(this.spanScoreElementClass);
    spanScoreElement.textContent = `0/10`;

    this.container.append(figureElement);
    figureElement.append(aElement);
    aElement.append(imgElement);
    figureElement.append(figcaptionElement);
    figcaptionElement.append(spanCategoryElement);
    figcaptionElement.append(spanScoreElement);
  }
}
