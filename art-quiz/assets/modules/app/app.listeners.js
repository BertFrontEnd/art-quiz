import { wfm } from './../structure/tools/utility.js';

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

export { toggleDisableRange };
