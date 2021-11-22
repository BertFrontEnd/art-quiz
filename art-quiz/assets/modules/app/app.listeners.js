import { wfm } from './../structure/tools/utility.js';
import { playAudio } from './app.audio.js';
import { setLocalStorage } from './../structure/tools/local.js';

const getHash = () => {
  window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash === '') {
      window.location.hash = 'home';
    }
  });
};

const bulkheadValues = (str, item) => {
  for (let i = 1; i <= 12; i++) {
    let k = i < 10 ? `0${i}` : i;

    if (
      item.classList.contains('quiz') &&
      window.location.hash === `#${str}-${k}`
    ) {
      item.classList.add('active-link');
    }
  }
};

const saveActiveLink = () => {
  const links = document.querySelectorAll('.link');
  const hash = window.location.hash;

  links.forEach((link) => {
    if (link.classList.contains(hash.slice(1))) {
      link.classList.add('active-link');
    }

    if (
      link.classList.contains('quiz') &&
      (hash === '#artist' || hash === '#picture')
    ) {
      link.classList.add('active-link');
    }

    bulkheadValues('artist', link);
    bulkheadValues('picture', link);
  });
};

const toggleDisableRange = () => {
  const labelsQuiz = document.querySelectorAll('.label-quiz');
  const volumeRangeQuiz = document.querySelector('.volume-range-quiz');
  const timerRangeQuiz = document.querySelector('.timer-range-quiz');

  labelsQuiz.forEach((label) => {
    label.addEventListener('click', (e) => {
      if (label.classList.contains('label-volume-quiz'))
        wfm.setDisable(volumeRangeQuiz);
      if (label.classList.contains('label-timer-quiz'))
        wfm.setDisable(timerRangeQuiz);
    });
  });
};

const offsetRange = () => {
  const rangeQuiz = document.querySelectorAll('.range-setting-quiz');
  let volumeValueQuiz = document.querySelector('.volume-value-quiz');
  let timerValueQuiz = document.querySelector('.timer-value-quiz');

  rangeQuiz.forEach((range) => {
    range.addEventListener('input', (e) => {
      if (range.classList.contains('volume-range-quiz')) {
        volumeValueQuiz.innerHTML = range.value;
      }
      if (range.classList.contains('timer-range-quiz')) {
        timerValueQuiz.innerHTML = range.value;
      }
    });
  });
};

const playSound = () => {
  const checkBox = document.querySelector('.checkbox-volume-quiz');
  const rangeThumb = document.querySelector('.volume-range-quiz');

  checkBox.addEventListener('input', () => {
    if (checkBox.checked) {
      playAudio.setPlay();
    }
    if (!checkBox.checked) {
      playAudio.setPause();
    }
  });

  rangeThumb.addEventListener('input', () => {
    playAudio.setVolume(Number(rangeThumb.value));
  });
};

const playSoundOnLoad = () => {
  const checkBox = document.querySelector('.checkbox-volume-quiz');
  console.log(checkBox.checked);

  /*   window.addEventListener('load', () => {
    console.log('click');
    if (checkBox.checked) {
      playAudio.setPlay();
    }
  }); */

  if (window.location.hash === '#settings' && checkBox.checked) {
    playAudio.setPlay();
  }
};

const checkBoxValue = () => {
  const checkBoxes = document.querySelectorAll('.checkbox-quiz');

  window.addEventListener('load', () => {
    const hash = window.location.hash.slice(1);
    if (hash === 'settings') {
      console.log('play');
      getLocalValue('soundValue', '#volume');
      getLocalValue('timerValue', '#timer');
    }
  });

  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener('input', () => {
      if (checkbox.classList.contains('checkbox-volume-quiz')) {
        setLocalStorage('soundValue', '#volume');
      }
      if (checkbox.classList.contains('checkbox-timer-quiz')) {
        setLocalStorage('timerValue', '#timer');
      }
    });
  });
};

export {
  getHash,
  saveActiveLink,
  toggleDisableRange,
  offsetRange,
  playSound,
  playSoundOnLoad,
  checkBoxValue,
};
