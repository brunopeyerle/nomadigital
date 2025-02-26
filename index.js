document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript carregado!");

    const videos = document.querySelectorAll(".video-item video");

    // Adiciona um evento para dar play/pause ao clicar no vídeo
    videos.forEach(video => {
        video.addEventListener("click", () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });

    console.log(`Foram encontrados ${videos.length} vídeos.`);
});
