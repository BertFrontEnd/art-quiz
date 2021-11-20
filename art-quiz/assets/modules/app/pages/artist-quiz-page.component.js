import { GameQuizPageComponent } from './../app.quiz.component.js';

const artistQuizPageComponent = {
  artist01: new GameQuizPageComponent({
    selector: `#app-artist-01-page`,
    template: `<div>artist-01</div>`,
  }),

  artist02: new GameQuizPageComponent({
    selector: `#app-artist-02-page`,
    template: `<div>artist-02</div>`,
  }),
};

export { artistQuizPageComponent };
