window.addEventListener('keydown',playS)
  
  document.addEventListener('click', function (event) {

    if(event.target.matches('kbd')) {
      var audio = document.querySelector(`audio[data-key="${audio}"]`);
      console.log(audio)
    }

    console.log(event.target);
  }, false);

 

function playS(e) {
  var audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
  var key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  
  key.classList.add("playing")
  audio.play();
  console.log(key)
}

function playMusic(audio) {
  var time = 0;
  audio.play();
}