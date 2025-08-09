const toggles = document.querySelectorAll('.faq-toggle');

    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const icon = toggle.querySelector('svg');

        if (content.style.maxHeight && content.style.maxHeight !== '0px') {
          
          content.style.maxHeight = content.scrollHeight + 'px'; 
          requestAnimationFrame(() => {
            content.classList.remove('opacity-100', 'scale-y-100');
            content.classList.add('opacity-0', 'scale-y-95');
            content.style.maxHeight = '0px';
            icon.classList.remove('rotate-180');
          });
        } else {
          
          content.style.maxHeight = content.scrollHeight + 'px'; 
          content.classList.remove('opacity-0', 'scale-y-95');
          content.classList.add('opacity-100', 'scale-y-100');
          icon.classList.add('rotate-180');

          
          setTimeout(() => {
            content.style.maxHeight = 'none';
          }, 100); 
        }
      });
    });