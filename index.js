document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.getElementById('videoGrid');
    const categorySelect = document.getElementById('category');

    // Função para carregar vídeos a partir de um arquivo JSON
    const loadVideos = (category = 'all') => {
        fetch('videos.json')
            .then(response => response.json())
            .then(data => {
                videoGrid.innerHTML = '';
                const filteredVideos = category === 'all' ? data : data.filter(video => video.category === category);

                filteredVideos.forEach(video => {
                    const videoItem = document.createElement('div');
                    videoItem.classList.add('video-item');
                    videoItem.innerHTML = `<video src="${video.src}" autoplay muted loop></video>`;
                    videoGrid.appendChild(videoItem);
                });
            })
            .catch(error => console.error('Erro ao carregar vídeos:', error));
    };

    // Evento para filtrar vídeos quando a categoria é alterada
    categorySelect.addEventListener('change', () => {
        loadVideos(categorySelect.value);
    });

    // Carregar todos os vídeos ao iniciar a página
    loadVideos();
});
