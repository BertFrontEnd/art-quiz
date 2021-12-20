import { QComponent } from '../../structure/index.js';

class HomePageComponent extends QComponent {
  constructor(config) {
    super(config);
  }
}

export const homePageComponent = new HomePageComponent({
  selector: '#app-home-page',
  template: `
    <figure class="home-quiz">
      <img src="./assets/img/logo-art-quiz.webp" alt="">
      <figcaption class="description-quiz">Application-quiz on the knowledge of painting masterpieces and their authors</figcaption>
    </figure>
  `,
});
