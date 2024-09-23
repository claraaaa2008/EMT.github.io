window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    
    // Cambiar color cuando se hace scroll más allá de 100px
    if (window.scrollY > 100) {
      header.classList.remove('dark-background');
      header.classList.add('light-background');
    } else {
      header.classList.remove('light-background');
      header.classList.add('dark-background');
    }
  });
  