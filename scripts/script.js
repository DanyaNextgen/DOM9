const videoGrid = document.querySelector('.video-grid'),
      modal = document.getElementById('modal'),
      closeButtonModal = document.querySelector('.close-button'),
      titleInput = document.getElementById('titleInput'),
      channelInput = document.getElementById('channelInput'),
      saveButton = document.getElementById('saveButton');

let currentVideoId = null; 

function reload(arr) {
    videoGrid.innerHTML = '';
    for (let video of arr) {
        const videoItem = document.createElement('div'),
              img = document.createElement('img'),
              videoInfo = document.createElement('div'),
              h3 = document.createElement('h3'),
              p = document.createElement('p'),
              closeButton = document.createElement('button'),
              editButton = document.createElement('button');

        img.setAttribute('src', video.thumbnail)
        img.setAttribute('alt', video.title)
        h3.innerHTML = video.title
        p.innerHTML = video.channel
        closeButton.innerHTML = 'X'
        editButton.textContent = 'Edit'
        editButton.classList.add('edit-button')
        closeButton.classList.add('close-btn')

        videoInfo.classList.add('video-info')
        videoItem.classList.add('video-item')

        editButton.onclick = () => {
            titleInput.value = video.title
            channelInput.value = video.channel
            modal.style.display = 'block'
            currentVideoId = video.id
        };

        closeButton.onclick = () => {
            const filteredArray = videos.filter((item) => item.id !== video.id)
            localStorage.setItem('videos', JSON.stringify(filteredArray))
            reload(filteredArray)
        };

        videoInfo.append(h3, p)
        videoItem.append(img, videoInfo, closeButton, editButton)
        videoGrid.append(videoItem)
    }
}

closeButtonModal.onclick = () => {
    modal.style.display = 'none'
};

saveButton.onclick = () => {
    const video = videos.find(item => item.id === currentVideoId)

    if (video) {
        if (titleInput.value) {
            video.title = titleInput.value
        }
        if (channelInput.value) {
            video.channel = channelInput.value
        }
        localStorage.setItem('videos', JSON.stringify(videos))
        reload(videos); 
    }
    modal.style.display = 'none';
};

function fetch() {
    const storedVideos = JSON.parse(localStorage.getItem('videos'))
    if (storedVideos) {
        videos = storedVideos
        reload(videos);
    }
}

fetch();

