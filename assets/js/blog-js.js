 const blogMenu = document.getElementById('blog-menu');
  const submenu = document.getElementById('submenu-blog');
  let hideTimeout;

  blogMenu.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    submenu.classList.remove('hidden', 'opacity-0', 'translate-y-2');
    submenu.classList.add('opacity-100', 'translate-y-0');
  });

  blogMenu.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      submenu.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => submenu.classList.add('hidden'), 300); // mismo que duration-300
    }, 200); // <-- Delay de 200ms antes de cerrar
  });