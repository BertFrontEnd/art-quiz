import { wfm } from './../structure/tools/utility.js';

const getHash = () => {
  window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash === '') {
      hash = 'home';
    }
  });
};

const saveActiveLink = () => {
  const links = document.querySelectorAll('.link');

  links.forEach((link) => {
    if (link.classList.contains(window.location.hash.slice(1))) {
      link.classList.add('active-link');
    }
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

export { getHash, saveActiveLink, toggleDisableRange, offsetRange };
