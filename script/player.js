
const play = document.querySelector('.play');

const audio = new Audio();

function playAudio() {
  audio.src = 'https://7oom.ru/audio/naturesounds/07%20Birds%20(7oom.ru).mp3'
  audio.currentTime = 0;
  audio.play();
  
}

document.querySelector(".play").addEventListener('click', playAudio)
