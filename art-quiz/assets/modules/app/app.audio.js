class PlayAudio {
  audio = new Audio();
  constructor() {}

  setPlay() {
    this.audio.src = './assets/sound/cat.mp3';
    this.audio.currentTime = 0;
    this.audio.loop = true;
    this.audio.load();
    this.audio.play();
  }

  setPause() {
    this.audio.pause();
  }

  setVolume(value) {
    this.audio.volume = ((0.1 * value) / 10).toFixed(2);
    console.log(this.audio.volume);
  }
}

export const playAudio = new PlayAudio();
