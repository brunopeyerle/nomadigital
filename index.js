// Verifica se o CSS e o JavaScript estão funcionando
console.log("JavaScript carregado corretamente!");

// Função para adicionar animação de fade-in nos vídeos ao rolar a página
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

// Confirmação de que os vídeos estão sendo reconhecidos
document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll("video");
  if (videos.length > 0) {
    console.log(`${videos.length} vídeos carregados na página.`);
  } else {
    console.warn("Nenhum vídeo encontrado na página.");
  }
});
