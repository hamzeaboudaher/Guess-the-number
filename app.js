let secretNumber;
let attempts = 0;

function startGame() {
  secretNumber = Math.floor(Math.random() * 1000) + 1;
  attempts = 0;
}



// (attempts === 1) ? randomNumber > 500 : randomNumber < 500 ;

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
  } else if (guess > secretNumber) {
    document.getElementById("message").innerText = "Too high! Try again.";
  } else {
    document.getElementById(
      "message"
    ).innerText = `Congratulations! You guessed the number in ${attempts} attempts.`;
    // startGame(); // Start a new game after winning
    setTimeout(function () {
      guessInput.value = ""; // Clear the input field after 5 seconds
    }, 5000);
    setTimeout(function () {
      document.getElementById("message").innerText = " play again!!";
    }, 5000);
  }
}

startGame();
