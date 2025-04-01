var x = document.getElementById('incident');
var y = false;
var i = document.getElementById('iframe_kiss');
var severed = new Audio('/audio/ArtificialFear - ＂Severance＂ Intro Theme (Metal Version) ｜｜ Artificial Fear.opus');

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
  // O vídeo está pronto para ser controlado
}

function onPlayerStateChange(event) {
  // Aqui você pode lidar com mudanças de estado se necessário
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
  
  // Pausar o vídeo do YouTube
  if (player && typeof player.pauseVideo === 'function') {
    player.pauseVideo();
  }
}