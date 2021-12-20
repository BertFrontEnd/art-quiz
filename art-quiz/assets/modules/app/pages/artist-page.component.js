import { QComponent } from '../../structure/index.js';

class ArtistPageComponent extends QComponent {
  constructor(config) {
    super(config);
  }
}

export const artistPageComponent = new ArtistPageComponent({
  selector: '#app-artist-page',
  template: ``,
});
