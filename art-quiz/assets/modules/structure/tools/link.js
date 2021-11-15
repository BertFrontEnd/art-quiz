const setActiveLink = () => {
  const navigation = document.querySelector('#header-nav');
  console.log(navigation);

  navigation.addEventListener('click', (e) => {
    const items = document.querySelectorAll('.link');
    items.forEach((item) => {
      item.classList.remove('active-link');
      e.target.classList.add('active-link');
    });
  });
  console.log('click');
};

export { setActiveLink };
