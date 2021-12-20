import { Categories } from './categories.js';

const renderPictureCategories = () => {
  const categoriesContainer = document.querySelector('#app-picture-page');
  const configCategory = {
    figureElementClass: 'picture-container-quiz',
    directionDataset: 'picture',
    aElementClass: 'picture-link-quiz',
    imgElementClass: 'picture-image-quiz',
    figcaptionElementClass: 'picture-description-quiz',
    spanCategoryElementClass: 'picture-category-quiz',
    spanScoreElementClass: 'picture-score-quiz',
    step: 120,
  };

  for (let i = 1; i <= 12; i++) {
    const category = new Categories(categoriesContainer, configCategory, i);
    category.renderCategory();
  }
};

export { renderPictureCategories };
