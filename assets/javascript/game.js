//GLOBAL VARIABLES

// Arrays and variables for holding data
var wordOptions = ["cat", "penguin", "monkey", "dolphin", "elephant", "sloth"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

//Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 0;

// FUNCTIONS

function startGame() {
  selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  lettersinWord = selectedWord.split("");
  numBlanks = lettersinWord.length;

  //Reset
  guessesLeft = 9;
  wrongLetters = [];
  blanksAndSuccesses = [];

  //Populate blanks and successes with right number of blanks
  for (let i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }

  //Change HTML to reflect round conditions
  document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(
    " "
  );
  document.getElementById("numGuesses").innerHTML = guessesLeft;
  document.getElementById("winCounter").innerHTML = winCount;
  document.getElementById("lossCounter").innerHTML = lossCount;
  //Testing/debugging
  console.log(selectedWord);
  console.log(lettersinWord);
  console.log(numBlanks);
  console.log(blanksAndSuccesses);
}
function checkLetters(letter) {
  //Check if letter exists in code at all

  var isLetterInWord = false;

  for (let i = 0; i < numBlanks; i++) {
    if (selectedWord[i] == letter) {
      isLetterInWord = true;
    }
  }

  //Check whre in the word the letter exists, then populate our blankAndSuccesses array
  if (isLetterInWord) {
    for (let i = 0; i < numBlanks; i++) {
      if (selectedWord[i] == letter) {
        blanksAndSuccesses[i] = letter;
      }
    }
  }
  //Letter wasn't found in the word
  else {
    wrongLetters.push(letter);
    guessesLeft--;
  }
  //Testing and debugging
  console.log(blanksAndSuccesses);
}

function roundComplete() {
  console.log(
    "Win Count: " +
      winCount +
      " | Loss Count: " +
      lossCount +
      " | Guesses Left: " +
      guessesLeft
  );

  //Update the HTML to reflect the most recent count stats
  document.getElementById("numGuesses").innerHTML = guessesLeft;
  document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(
    " "
  );
  document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

  //Check if user won
  if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
    winCount++;
    alert("You Won!");
    //updateHTML
    document.getElementById("winCounter").innerHTML = winCount;
    startGame();
  }
  //Check if user lost
  else if (guessesLeft == 0) {
    lossCount++;
    alert("You lost!");

    //Update HTML
    document.getElementById("lossCounter").innerHTML = lossCount;

    startGame();
  }
}

//MAIN PROCESS

//Initiate the code the first time
startGame();

//Regster keyclicks
document.onkeyup = function (event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();

  //Testing/Debugging
  console.log(letterGuessed);
};
