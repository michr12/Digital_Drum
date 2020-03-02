  document.addEventListener('click', function (event) {

    if(event.target.matches('kbd')) {
      var letter = event.target.innerText;
      console.log(letter);
      playMusic(letter);
      
    }

  }, false);



function playMusic(letter) {
  var time = 0;
  var audio = document.querySelector(`audio[data-key="${letter}"`);
  audio.currentTime = 0;
  audio.play();
}
