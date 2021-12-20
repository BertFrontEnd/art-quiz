const setActiveLink = () => {
  const navigation = document.querySelector('#header-nav');

  navigation.addEventListener('click', (e) => {
    const items = document.querySelectorAll('.link');
    items.forEach((item) => {
      item.classList.remove('active-link');
      e.target.classList.add('active-link');
    });
  });
};

const removeActiveLink = (currentRoute) => {
  if (currentRoute.path === 'error') {
    const items = document.querySelectorAll('.link');
    items.forEach((item) => {
      item.classList.remove('active-link');
    });
  }
};

export { removeActiveLink, setActiveLink };
