function MudarVideo(name) {
    const listavideos = document.querySelectorAll('.video-atleta');
    const atletas = document.querySelectorAll('.atleta');

    listavideos.forEach(video => {
        video.classList.remove('active');
        if (video.classList.contains(name)) {
            video.classList.add('active')
        }
    })

    atletas.forEach(atleta => {
        atleta.classList.remove('active');
        if (atleta.classList.contains(name)) {
            atleta.classList.add('active')
        }
    })
}