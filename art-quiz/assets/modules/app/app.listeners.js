import { wfm } from './../structure/tools/utility.js';

const getHash = () => {
  window.addEventListener('load', () => {
    const hash = window.location.hash;

    if (hash === '') {
      hash = 'home';
    }

    return hash;
  });
};

const saveActiveLink = () => {
  const links = document.querySelectorAll('.link');
  console.log(links);

  links.forEach((link) => {
    if (link.classList.contains(window.location.hash.slice(1))) {
      link.classList.add('active-link');
    }
  });
};

const toggleDisableRange = () => {
  const labelsQuiz = document.querySelectorAll('.label-quiz');

  labelsQuiz.forEach((label) => {
    label.addEventListener('click', (e) => {
      wfm.setDisable(
        label.previousSibling.previousSibling.previousSibling.previousSibling,
      );
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
