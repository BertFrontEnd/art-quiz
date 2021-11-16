const wfm = {
  delay(ms = 1000) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  },
  router() {
    return window.location.hash.slice(1);
  },
  isUndefined(element) {
    return typeof element === 'undefined';
  },
  setDisable(element) {
    if (element.getAttribute('disabled')) {
      element.removeAttribute('disabled');
    } else {
      element.setAttribute('disabled', 'disabled');
    }
  },
};

export { wfm };
