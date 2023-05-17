const channelId = 'UCv_i_W7tr2yYg7K3fDqgvrQ';
const apiKey = 'AIzaSyB8GVp1CPyIvNp5X_ESpdI4QQhDP9M_Z1Y';
const maxVideos = 30;

function loadVideos() {
    const url = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${encodeURIComponent(channelId)}&maxResults=${maxVideos}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('video-container');
            const videoIdsSet = new Set();

            for (let i = 0; i < data.items.length; i++) {
                const videoId = data.items[i].id.videoId;

                if (!videoIdsSet.has(videoId)) {
                    videoIdsSet.add(videoId);

                    const videoTitle = data.items[i].snippet.title;
                    const videoThumbnail = data.items[i].snippet.thumbnails.medium.url;

                    const videoWrapper = document.createElement('div');
                    videoWrapper.className = 'video-wrapper';

                    const thumbnailLink = document.createElement('a');
                    thumbnailLink.href = `https://www.youtube.com/watch?v=${videoId}`;
                    thumbnailLink.target = '_blank';

                    const thumbnailImg = document.createElement('img');
                    thumbnailImg.src = videoThumbnail;

                    const titleDiv = document.createElement('div');
                    titleDiv.className = 'video-title';
                    titleDiv.textContent = videoTitle;

                    thumbnailLink.appendChild(thumbnailImg);
                    videoWrapper.appendChild(thumbnailLink);
                    videoWrapper.appendChild(titleDiv);
                    container.appendChild(videoWrapper);
                }
            }

            const lastVideoWrapper = container.lastElementChild;
            lastVideoWrapper.style.pointerEvents = 'none';
            lastVideoWrapper.style.cursor = 'default';
        })
        .catch(error => {
            console.log(error);
        });
}

function onYouTubeIframeAPIReady() {
    loadVideos();
}
