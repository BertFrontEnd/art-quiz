import { homePageComponent } from './pages/home-page.component.js';
import { quizPageComponent } from './pages/quiz-page.component.js';
import { settingsPageComponent } from './pages/settings-page.component.js';
import { errorPageComponent } from './pages/error-page.component.js';

export const appRoutes = [
  { path: 'home', component: homePageComponent },
  { path: 'quiz', component: quizPageComponent },
  { path: 'settings', component: settingsPageComponent },
  { path: 'error', component: errorPageComponent },
];
