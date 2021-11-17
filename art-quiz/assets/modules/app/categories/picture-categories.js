const renderPictureCategories = () => {
  const categoriesContainer = document.querySelector('#app-picture-page');

  for (let i = 1; i <= 12; i++) {
    const figureElement = document.createElement('figure');
    figureElement.classList.add('picture-container-quiz');

    const aElement = document.createElement('a');
    aElement.classList.add('picture-link-quiz');
    aElement.setAttribute('href', '#');

    const imgElement = document.createElement('img');
    imgElement.classList.add('picture-image-quiz');
    imgElement.src = `https://raw.githubusercontent.com/BertFrontEnd/art-quiz-images/master/art-quiz-images/img/${
      120 + i + 10
    }.jpg`;
    imgElement.alt = `Image ${(i = i < 10 ? '0' + i : i)}`;

    const figcaptionElement = document.createElement('figcaption');
    figcaptionElement.classList.add('picture-description-quiz');

    const spanCategoryElement = document.createElement('span');
    spanCategoryElement.classList.add('picture-category-quiz');
    spanCategoryElement.textContent = `${i}`;

    const spanScoreElement = document.createElement('span');
    spanScoreElement.classList.add('picture-score-quiz');
    spanScoreElement.textContent = `0/10`;

    categoriesContainer.append(figureElement);
    figureElement.append(aElement);
    aElement.append(imgElement);
    figureElement.append(figcaptionElement);
    figcaptionElement.append(spanCategoryElement);
    figcaptionElement.append(spanScoreElement);
  }
};

export { renderPictureCategories };
