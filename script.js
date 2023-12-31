const video = document.getElementById("video");
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//Play and pause video

function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
//update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML =
      '  <i class="fa-solid fa-play fa-2xl" style="color: #36c403;"></i>';
  } else {
    play.innerHTML =
      '<i class="fa-solid fa-pause fa-2xl" style="color: #e9d60c;"></i>';
  }
}

//update progress and timestamp
function updateProgress() {

  progress.value = (video.currentTime / video.duration) * 100;
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }
  let seconds = Math.floor(video.currentTime % 60);
  console.log(video.currentTime % 60)
  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }
  timestamp.innerHTML = `${mins}:${seconds}`;
}

//set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}
//stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);
playBtn.addEventListener("click", toggleVideoStatus);
stopBtn.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoProgress);
