import { Categories } from './categories.js';

const renderArtistCategories = () => {
  const categoriesContainer = document.querySelector('#app-artist-page');
  const configCategory = {
    figureElementClass: 'artist-container-quiz',
    aElementClass: 'artist-link-quiz',
    imgElementClass: 'artist-image-quiz',
    figcaptionElementClass: 'artist-description-quiz',
    spanCategoryElementClass: 'artist-category-quiz',
    spanScoreElementClass: 'artist-score-quiz',
    step: 0,
  };

  for (let i = 1; i <= 12; i++) {
    const category = new Categories(categoriesContainer, configCategory, i);
    category.renderCategory();
  }
};

export { renderArtistCategories };
