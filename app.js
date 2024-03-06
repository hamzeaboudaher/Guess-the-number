let secretNumber;
let attempts = 0;

function startGame() {
  secretNumber = Math.floor(Math.random() * 1000) + 1;
  attempts = 0;
}




function guessNumber() {
  let guessInput = document.getElementById("guessInput");
  let guess = parseInt(document.getElementById("guessInput").value);

  if (isNaN(guess) || guess < 1 || guess > 1000) {
    document.getElementById("message").innerText =
      "Please enter a valid number between 1 and 1000.";
    return;
  }

  attempts++;

  if (guess < secretNumber) {
    document.getElementById("message").innerText = "Too low! Try again.";
    playFailSound(); // Play fail sound
  } else if (guess > secretNumber) {
    document.getElementById("message").innerText = "Too high! Try again.";
    playFailSound(); // Play fail sound
  } else {
    document.getElementById(
      "message"
    ).innerText = `Congratulations! You guessed the number in ${attempts} attempts.`;
    playSuccessSound(); // Play success sound
    setTimeout(function () {
      document.getElementById("message").innerText = "play again!!";
    }, 10000); // 10000 milliseconds = 10 seconds
    startGame(); // Start a new game after winning
    setTimeout(function () {
      guessInput.value = ""; // Clear the input field after 5 seconds
    }, 5000); // 5000 milliseconds = 5 seconds
  }
}

function playFailSound() {
  let failSound = new Audio("fail.mp3");
  failSound.play();
}

function playSuccessSound() {
  let successSound = new Audio("win.mp3");
  successSound.play();
}


let backgroundSound = document.getElementById("backgroundSound");

function toggleBackgroundSound() {
  if (backgroundSound.paused) {
    backgroundSound.play();
    document.getElementById("soundButton").innerText = "Turn Sound Off";
  } else {
    backgroundSound.pause();
    document.getElementById("soundButton").innerText = "Turn Sound On";
  }
}


startGame();
