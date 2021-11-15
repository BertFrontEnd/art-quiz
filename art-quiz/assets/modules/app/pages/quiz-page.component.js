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
      <a href="#">
        <img src="./assets/img/artist-quiz.jpg" alt="" />
      </a>
      <figcaption class="direction-quiz">Artist <span class="text-quiz">Quiz</span></figcaption>
    </figure>
    <figure class="picture-quiz">
      <a href="#">
        <img src="./assets/img/picture-quiz.jpg" alt="" />
      </a>
      <figcaption class="direction-quiz">Picture <span class="text-quiz">Quiz</span></figcaption>
    </figure>
  `,
});
