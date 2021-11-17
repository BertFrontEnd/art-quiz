class Categories {
  categoriesContainer = document.querySelector(this.categoriesContainer);

  constructor(config) {
    this.categoriesContainer = config.categoriesContainer;
    this.figureElement = config.figureElement;
    this.figureElementClass = config.figureElementClass;
    this.aElement = config.aElement;
    this.aElementClass = config.aElementClass;
    this.imgElement = config.imgElement;
    this.imgElementClass = config.imgElementClass;
    this.figcaptionElement = figcaptionElement;
    this.figcaptionElementClass = figcaptionElementClass;
    this.spanCategoryElement = spanCategoryElement;
    this.spanCategoryElementClass = spanCategoryElementClass;
    this.spanScoreElement = spanScoreElement;
    this.spanScoreElementClass = spanScoreElementClass;
    this.increment = increment;
  }

  renderCategory() {
    const figureElement = document.createElement(this.figureElement);
    figureElement.classList.add(figureElementClass);

    const aElement = document.createElement(this.aElement);
    aElement.classList.add(this.aElementClass);
    aElement.setAttribute('href', '#');

    const imgElement = document.createElement(this.imgElement);
    imgElement.classList.add(this.imgElementClass);
    imgElement.src = `https://raw.githubusercontent.com/BertFrontEnd/art-quiz-images/master/art-quiz-images/img/${
      i + 10
    }.jpg`;
    imgElement.alt = `Image ${(i = i < 10 ? '0' + i : i)}`;

    const figcaptionElement = document.createElement(this.figcaptionElement);
    figcaptionElement.classList.add(this.figcaptionElementClass);

    const spanCategoryElement = document.createElement(
      this.spanCategoryElement,
    );
    spanCategoryElement.classList.add(this.spanCategoryElementClass);
    spanCategoryElement.textContent = `${i}`;

    const spanScoreElement = document.createElement(this.spanScoreElement);
    spanScoreElement.classList.add(this.spanScoreElementClass);
    spanScoreElement.textContent = `0/10`;

    categoriesContainer.append(this.figureElement);
    this.figureElement.append(this.aElement);
    this.aElement.append(this.imgElement);
    this.figureElement.append(this.figcaptionElement);
    this.figcaptionElement.append(this.spanCategoryElement);
    this.figcaptionElement.append(this.spanScoreElement);
  }
}
