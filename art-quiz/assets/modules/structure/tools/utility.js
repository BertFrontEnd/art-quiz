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
};

export { wfm };
