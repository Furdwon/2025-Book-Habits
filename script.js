document.getElementById('playButton').addEventListener('click', function() {
  var audio = document.getElementById('backgroundMusic');
  audio.play();

  audio.onended = function() {
    document.getElementById('playButton').style.display = 'none'; // Hide the button after the audio ends
  };

  // Hide the button after the audio starts playing
  audio.onplay = function() {
    document.getElementById('playButton').style.display = 'none';
  };
});
