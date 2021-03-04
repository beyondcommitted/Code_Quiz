var timeEl = document.querySelector('#timer')
var startButton = document.querySelector('#start')

var timeLeft = 120;

function startTime() {
  // Sets interval in variable
  var timer = setInterval(function() {
    timeLeft--;
    timeEl.textContent = timeLeft + " Until Next Question ";

    if(timeLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timer);
      // Calls function to create and append image
    }

  }, 1000);
}
startButton.addEventListener('click', startTime);
