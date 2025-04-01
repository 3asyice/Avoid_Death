var x = document.getElementById('incident');
var y = false;
var i = document.getElementById('iframe_kiss');
var severed = new Audio('https://raw.githubusercontent.com/3asyice/Avoid_Death/main/áudio/Intro Theme.opus');

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('iframe_kiss', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {

}

function onPlayerStateChange(event) {

}

function kiss() {
  y = !y;
  x.style.display = y ? 'block' : 'none';
  severed.play();
  severed.volume = 0.1;
}

function reject() {
  y = !y;
  x.style.display = y ? 'block' : 'none';
  severed.pause();
  
  if (player && typeof player.pauseVideo === 'function') {
    player.pauseVideo();
  }
}
