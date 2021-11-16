import { QComponent } from '../../structure/index.js';

/* const category = new QComponent().renderArtistCategory();
console.log(category); */

class ArtistPageComponent extends QComponent {
  constructor(config) {
    super(config);
  }
}

export const artistPageComponent = new ArtistPageComponent({
  selector: '#app-artist-page',
  template: `<div></div>`,
});
