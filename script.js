const videoContainer = document.querySelector('.video-container');
const video = document.querySelector('.video-container video');
const watchButton = document.querySelector('#watch-button');
const closeButton = document.querySelector('#close-button');


watchButton.addEventListener('click', () =>{
    videoContainer.classList.remove('active');
})

closeButton.addEventListener('click', () =>{
    videoContainer.classList.add('active');
    video.pause();
    video.currentTime = 0;
})