import { QComponent } from '../../structure/index.js';

class QuizPageComponent extends QComponent {
  constructor(config) {
    super(config);
  }
}

export const quizPageComponent = new QuizPageComponent({
  selector: 'app-quiz-page',
  template: `
  <h1>Quiz Page</h1>
  <div class="direction">Artist <span class="quiz">Art-Quiz</span></div>
  <div class="direction">Pictures <span class="quiz">Art-Quiz</span></div>
  `,
});
