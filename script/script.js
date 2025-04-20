var x = document.getElementById('incident');
var y = false;
var i = document.getElementById('iframe_kiss');
var severed = new Audio('https://raw.githubusercontent.com/3asyice/Avoid_Death/main/audio/Intro Theme.opus');

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

var matrixhasyou = document.getElementById('matrixhasyounow');
var matrixid = document.getElementById('matrix_id');
var text = "Acorde, Neo...";
var n = 0;

// matrix



function typeLetter() {
  if (n < text.length) {
    matrixhasyou.innerHTML += text.charAt(n);
    n++;
    setTimeout(typeLetter, 250); // Ajuste o tempo para mais rápido ou mais devagar
  } else {
    setTimeout(typeoff, 8500); // Chama typeoff após 200 milissegundos
  }
}
function typehasyou(){
  
}
function typeoff() {
  matrixid.style.display = 'none'; // Esconde a div após o tempo definido
}

typeLetter();