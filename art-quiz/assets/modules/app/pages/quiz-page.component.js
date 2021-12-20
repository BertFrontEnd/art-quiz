import { QComponent } from '../../structure/index.js';

class QuizPageComponent extends QComponent {
  constructor(config) {
    super(config);
  }
}

export const quizPageComponent = new QuizPageComponent({
  selector: '#app-quiz-page',
  template: `
    <figure class="artist-quiz">
      <a href="#artist" class="artist-link-quiz">
        <img src="./assets/img/artist-quiz.jpg" class="category-image-quiz" alt="" />
      </a>
      <figcaption class="direction-quiz">Artist <span class="text-quiz">Quiz</span></figcaption>
    </figure>
    <figure class="picture-quiz">
      <a href="#picture" class="picture-link-quiz">
        <img src="./assets/img/picture-quiz.jpg" class="category-image-quiz" alt="" />
      </a>
      <figcaption class="direction-quiz">Picture <span class="text-quiz">Quiz</span></figcaption>
    </figure>
  `,
});
