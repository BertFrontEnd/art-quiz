import { homePageComponent } from './pages/home-page.component.js';
import { quizPageComponent } from './pages/quiz-page.component.js';
import { artistPageComponent } from './pages/artist-page.component.js';
import { artistQuizPageComponent } from './pages/artist-quiz-page.component.js';
import { picturePageComponent } from './pages/picture-page.component.js';
import { pictureQuizPageComponent } from './pages/picture-quiz-page.component.js';
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
  {
    path: 'artist-03',
    component: artistQuizPageComponent.artist03,
  },
  {
    path: 'artist-04',
    component: artistQuizPageComponent.artist04,
  },
  {
    path: 'artist-05',
    component: artistQuizPageComponent.artist05,
  },
  {
    path: 'artist-06',
    component: artistQuizPageComponent.artist06,
  },
  {
    path: 'artist-07',
    component: artistQuizPageComponent.artist07,
  },
  {
    path: 'artist-08',
    component: artistQuizPageComponent.artist08,
  },
  {
    path: 'artist-09',
    component: artistQuizPageComponent.artist09,
  },
  {
    path: 'artist-10',
    component: artistQuizPageComponent.artist10,
  },
  {
    path: 'artist-11',
    component: artistQuizPageComponent.artist11,
  },
  {
    path: 'artist-12',
    component: artistQuizPageComponent.artist12,
  },
  { path: 'picture', component: picturePageComponent },
  {
    path: 'picture-01',
    component: pictureQuizPageComponent.picture01,
  },
  {
    path: 'picture-02',
    component: pictureQuizPageComponent.picture02,
  },
  {
    path: 'picture-03',
    component: pictureQuizPageComponent.picture03,
  },
  {
    path: 'picture-04',
    component: pictureQuizPageComponent.picture04,
  },
  {
    path: 'picture-05',
    component: pictureQuizPageComponent.picture05,
  },
  {
    path: 'picture-06',
    component: pictureQuizPageComponent.picture06,
  },
  {
    path: 'picture-07',
    component: pictureQuizPageComponent.picture07,
  },
  {
    path: 'picture-08',
    component: pictureQuizPageComponent.picture08,
  },
  {
    path: 'picture-09',
    component: pictureQuizPageComponent.picture09,
  },
  {
    path: 'picture-10',
    component: pictureQuizPageComponent.picture10,
  },
  {
    path: 'picture-11',
    component: pictureQuizPageComponent.picture11,
  },
  {
    path: 'picture-12',
    component: pictureQuizPageComponent.picture12,
  },
  { path: 'settings', component: settingsPageComponent },
  { path: 'error', component: errorPageComponent },
];
