const audio = document.getElementById("audio");
const prev = document.getElementById("prev");
const pause = document.getElementById("pause");
const next = document.getElementById("next");
const cover = document.getElementById("cover");
const progressBar = document.getElementById("progress-bar");
const title = document.getElementById("title");
let musicContainer = document.getElementById("nothing");
const icon = document.querySelector(".bi-play-fill");

const song = ["hey", "summer", "ukulele"];
let songIndex = 0;

function loadSong(song) {
  audio.src = `./music/${song}.mp3`;
  cover.src = `./images/${song}.jpg`;
  title.innerText = song;
}

loadSong(song[songIndex]);

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    icon.classList.add("bi-pause-fill");
    icon.classList.remove("bi-play-fill");
  } else {
    audio.pause();
    icon.classList.remove("bi-pause-fill");
    icon.classList.add("bi-play-fill");
  }
}

function nextSong() {
  songIndex = songIndex + 1;

  if (songIndex > song.length - 1) {
    songIndex = 0;
  }

  loadSong(song[songIndex]);
  toggleAudio();
}
function prevSong() {
  songIndex = songIndex - 1;

  if (songIndex < 0) {
    songIndex = song.length - 1;
  }

  loadSong(song[songIndex]);
  toggleAudio();
}

function updateProgress(e){
  const { duration, currentTime} = e.srcElement;
  // console.log(duration);
  // console.log(currentTime);
  const progress = (currentTime / duration) * 100;
  // console.log(progress);
  progressBar.style.width = `${progress}%`;
}


pause.addEventListener("click", toggleAudio);
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
audio.addEventListener("timeupdate", updateProgress);
