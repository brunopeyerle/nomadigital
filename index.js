// Efeito de transição suave para o scroll nas âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Adiciona uma animação ao carregar os vídeos (fade-in)
window.addEventListener('scroll', function () {
  const videos = document.querySelectorAll('.video-item');
  const windowHeight = window.innerHeight;

  videos.forEach(video => {
    const videoTop = video.getBoundingClientRect().top;
    if (videoTop < windowHeight - 100) {
      video.classList.add('fade-in');
    }
  });
});
