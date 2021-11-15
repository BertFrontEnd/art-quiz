import { QComponent } from '../../structure/index.js';

class QuizPageComponent extends QComponent {
  constructor(config) {
    super(config);
  }
}

export const quizPageComponent = new QuizPageComponent({
  selector: '#app-quiz-page',
  template: `
  <h1>Quiz Page</h1>
  <div>Artist <span>Art-Quiz</span></div>
  <div>Pictures <span>Art-Quiz</span></div>
  `,
});
