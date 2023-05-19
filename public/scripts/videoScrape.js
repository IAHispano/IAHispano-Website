document.addEventListener('DOMContentLoaded', function() {
  // Array de URL de los videos de YouTube
  const videoUrls = [
    'https://www.youtube.com/watch?v=sD5gGMdUndE',
    'https://www.youtube.com/watch?v=YkXAFMp6fj0',
    'https://www.youtube.com/watch?v=ws9CgWTFwg4',
    'https://www.youtube.com/watch?v=gJcFvGIDeTE',
    'https://www.youtube.com/watch?v=gJcFvGIDeTE',
    'https://www.youtube.com/watch?v=gJcFvGIDeTE',
    'https://www.youtube.com/watch?v=gJcFvGIDeTE',
    'https://www.youtube.com/watch?v=gJcFvGIDeTE',
    // Agrega más URL de videos aquí...
  ];

  function loadVideos() {
    const container = document.getElementById('video-container');

    videoUrls.forEach(videoUrl => {
      const videoId = getVideoIdFromUrl(videoUrl);

      // Crear el cuadro del video
      const videoWrapper = document.createElement('div');
      videoWrapper.className = 'video-wrapper';

      // Crear la miniatura del video
      const thumbnailLink = document.createElement('a');
      thumbnailLink.href = videoUrl;
      thumbnailLink.target = '_blank';

      const thumbnailImg = document.createElement('img');
      thumbnailImg.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
      thumbnailImg.alt = 'Video Thumbnail';

      thumbnailLink.appendChild(thumbnailImg);
      videoWrapper.appendChild(thumbnailLink);

      // Obtener el título del video
      const videoTitle = getVideoTitle(videoUrl);

      // Crear el título del video
      const titleLink = document.createElement('a');
      titleLink.href = videoUrl;
      titleLink.target = '_blank';
      titleLink.textContent = videoTitle;
      titleLink.className = 'video-title'; // Agrega la clase CSS para dar estilo al título

      videoWrapper.appendChild(titleLink);

      // Obtener la descripción del video
      const videoDescription = getVideoDescription(videoUrl);

      // Crear la descripción del video
      const descriptionPara = document.createElement('p');
      descriptionPara.textContent = videoDescription;
      descriptionPara.className = 'video-description'; // Agrega la clase CSS para dar estilo a la descripción

      videoWrapper.appendChild(descriptionPara);

      // Agregar el cuadro del video al contenedor
      container.appendChild(videoWrapper);
    });
  }

  function getVideoIdFromUrl(videoUrl) {
    const urlParams = new URLSearchParams(new URL(videoUrl).search);
    return urlParams.get('v');
  }

  function getVideoTitle(videoUrl) {
    // Aquí puedes introducir manualmente los títulos de los videos correspondientes
    const videoTitles = {
      'https://www.youtube.com/watch?v=sD5gGMdUndE': 'Título del video 1',
      'https://www.youtube.com/watch?v=YkXAFMp6fj0': 'Título del video 2',
      'https://www.youtube.com/watch?v=ws9CgWTFwg4': 'Título del video 3',
      'https://www.youtube.com/watch?v=gJcFvGIDeTE': 'Título del video 4',
      // Agrega más títulos aquí...
    };

    return videoTitles[videoUrl] || 'Video no disponible';
  }

  function getVideoDescription(videoUrl) {
    // Aquí puedes introducir manualmente las descripciones de los videos correspondientes
    const videoDescriptions = {
      'https://www.youtube.com/watch?v=sD5gGMdUndE': 'Descripción del video 1',
      'https://www.youtube.com/watch?v=YkXAFMp6fj0': 'Descripción del video 2',
      'https://www.youtube.com/watch?v=ws9CgWTFwg4': 'Descripción del video 3',
      'https://www.youtube.com/watch?v=gJcFvGIDeTE': 'Descripción del video 4',
      // Agrega más descripciones aquí...
    };

    return videoDescriptions[videoUrl] || 'Descripción no disponible';
  }

  loadVideos();
});
