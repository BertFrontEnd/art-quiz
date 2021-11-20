import { homePageComponent } from './pages/home-page.component.js';
import { quizPageComponent } from './pages/quiz-page.component.js';
import { artistPageComponent } from './pages/artist-page.component.js';
import { artistQuizPageComponent } from './pages/artist-quiz-page.component.js';
import { picturePageComponent } from './pages/picture-page.component.js';
import { settingsPageComponent } from './pages/settings-page.component.js';
import { errorPageComponent } from './pages/error-page.component.js';

export const appRoutes = [
  { path: 'home', component: homePageComponent },
  { path: 'quiz', component: quizPageComponent },
  { path: 'artist', component: artistPageComponent },
  {
    path: 'artist-01',
    component: artistQuizPageComponent.artist01,
  },
  {
    path: 'artist-02',
    component: artistQuizPageComponent.artist02,
  },
  { path: 'picture', component: picturePageComponent },
  { path: 'settings', component: settingsPageComponent },
  { path: 'error', component: errorPageComponent },
];
