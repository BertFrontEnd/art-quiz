const setLocalStorage = (settingKey, settingValue) => {
  const value = document.querySelector(settingValue).checked;
  localStorage.setItem(settingKey, value);
};

const getLocalStorage = (settingKey, selector) => {
  const loc = localStorage.getItem(settingKey);
  console.log('get:', loc == 'true' ? true : false);

  const checkBox = document.querySelector(selector);
  console.log(loc == 'true' ? true : false);
  checkBox.checked = JSON.parse(loc);
};

/* const handlingVolumeCheckbox = () => {
  setLocalStorage('soundValue', '#volume');
  getLocalValue('soundValue', '#volume');
};

const handlingTimerCheckbox = () => {
  setLocalStorage('timerValue', '#timer');
  getLocalValue('timerValue', '#timer');
}; */

export { setLocalStorage, getLocalStorage };
