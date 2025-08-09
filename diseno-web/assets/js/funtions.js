const navToggle = document.getElementById('nav-toggle');
  const navContent = document.getElementById('nav-content');

  navToggle.addEventListener('click', () => {
    if (navContent.classList.contains('mobile-menu-open')) {
      navContent.classList.remove('mobile-menu-open');
      setTimeout(() => navContent.classList.add('hidden'), 400);
    } else {
      navContent.classList.remove('hidden');
      setTimeout(() => navContent.classList.add('mobile-menu-open'), 10);
    }
    document.querySelectorAll('#nav-content .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navContent.classList.remove('mobile-menu-open');
    setTimeout(() => navContent.classList.add('hidden'), 400);
  });
});

});