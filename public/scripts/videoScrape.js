document.addEventListener("DOMContentLoaded", function () {
  // Array de URL de los videos de YouTube
  const videoUrls = [
    "https://www.youtube.com/watch?v=g97qO2meh0Q",
    "https://www.youtube.com/watch?v=N_mugYwUhT8",
    "https://www.youtube.com/watch?v=t1RNsLM87TI",
    "https://www.youtube.com/watch?v=bWSG2yi-VJA",
    "https://www.youtube.com/watch?v=1Ac7HiG7r3c",
    "https://www.youtube.com/watch?v=uyb2iDjR970",
    "https://www.youtube.com/watch?v=7UvshC1Qdps",
    "https://www.youtube.com/watch?v=eOBOtYbt_3w",
    "https://www.youtube.com/watch?v=gJcFvGIDeTE",
    "https://www.youtube.com/watch?v=IKuhZUlWUnc",
  ];

  function loadVideos() {
    const container = document.getElementById("video-container");

    videoUrls.forEach((videoUrl) => {
      const videoId = getVideoIdFromUrl(videoUrl);

      // Crear el cuadro del video
      const videoWrapper = document.createElement("div");
      videoWrapper.className = "video-wrapper";

      // Crear la miniatura del video
      const thumbnailLink = document.createElement("a");
      thumbnailLink.href = videoUrl;
      thumbnailLink.target = "_blank";

      const thumbnailImg = document.createElement("img");
      thumbnailImg.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
      thumbnailImg.alt = "Video Thumbnail";

      thumbnailLink.appendChild(thumbnailImg);
      videoWrapper.appendChild(thumbnailLink);

      // Obtener el título del video
      const videoTitle = getVideoTitle(videoUrl);

      // Crear el título del video
      const titleLink = document.createElement("a");
      titleLink.href = videoUrl;
      titleLink.target = "_blank";
      titleLink.textContent = videoTitle;
      titleLink.className = "video-title"; // Agrega la clase CSS para dar estilo al título

      videoWrapper.appendChild(titleLink);

      // Obtener la descripción del video
      const videoDescription = getVideoDescription(videoUrl);

      // Crear la descripción del video
      const descriptionPara = document.createElement("p");
      descriptionPara.textContent = videoDescription;
      descriptionPara.className = "video-description"; // Agrega la clase CSS para dar estilo a la descripción

      videoWrapper.appendChild(descriptionPara);

      // Agregar el cuadro del video al contenedor
      container.appendChild(videoWrapper);
    });
  }

  function getVideoIdFromUrl(videoUrl) {
    const urlParams = new URLSearchParams(new URL(videoUrl).search);
    return urlParams.get("v");
  }

  function getVideoTitle(videoUrl) {
    // Aquí puedes introducir manualmente los títulos de los videos correspondientes
    const videoTitles = {
      "https://www.youtube.com/watch?v=N_mugYwUhT8": "CLONAR VOCES CON KITS.AI",
      "https://www.youtube.com/watch?v=g97qO2meh0Q": "CREAR CANCIONES CON IA",
      "https://www.youtube.com/watch?v=t1RNsLM87TI": "ENTRENAMIENTO RVC",
      "https://www.youtube.com/watch?v=bWSG2yi-VJA": "COMO HACER UN DATASET",
      "https://www.youtube.com/watch?v=1Ac7HiG7r3c": "EN TO' LAO'",
      "https://www.youtube.com/watch?v=uyb2iDjR970": "ANTES DE PERDERTE",
      "https://www.youtube.com/watch?v=7UvshC1Qdps": "POLARIS",
      "https://www.youtube.com/watch?v=eOBOtYbt_3w": `SHE DON'T GIVE A FO`,
      "https://www.youtube.com/watch?v=gJcFvGIDeTE": "MEMORIAS",
      "https://www.youtube.com/watch?v=IKuhZUlWUnc": "DÁKITI",
    };

    return videoTitles[videoUrl] || "Video no disponible";
  }

  function getVideoDescription(videoUrl) {
    // Aquí puedes introducir manualmente las descripciones de los videos correspondientes
    const videoDescriptions = {
      "https://www.youtube.com/watch?v=bWSG2yi-VJA": "COMO HACER UN DATASET",
      "https://www.youtube.com/watch?v=sD5gGMdUndE": "CREAR CANCIONES CON IA",
      "https://www.youtube.com/watch?v=YkXAFMp6fj0": "CREAR MODELOS IA",
      "https://www.youtube.com/watch?v=ws9CgWTFwg4": "TUTORIAL RVC",
      "https://www.youtube.com/watch?v=OyC6A0AsRRE": "SAIKO - UN VERANO SIN TI",
      "https://www.youtube.com/watch?v=uyb2iDjR970": "ANTES DE PERDERTE",
      "https://www.youtube.com/watch?v=7UvshC1Qdps": "POLARIS",
      "https://www.youtube.com/watch?v=eOBOtYbt_3w": `SHE DON'T GIVE A FO`,
      "https://www.youtube.com/watch?v=gJcFvGIDeTE": "MEMORIAS",
      "https://www.youtube.com/watch?v=IKuhZUlWUnc": "DÁKITI",
      // Agrega más descripciones aquí...
    };

    return videoDescriptions[videoUrl] || "Descripción no disponible";
  }

  loadVideos();
});
