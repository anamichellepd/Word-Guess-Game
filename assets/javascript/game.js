// Array of animals to choose from
var words = ["cat", "penguin", "monkey", "dolphin"];

// Starting Variables for when you win, current word, guesses left, your guesses
var wins = 0;
var guessesLeft = 10;
var yourGuesses = [];
var computerGuess = myFunction();

// Variables to hold references to HTML places
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("current-word");
var leftText = document.getElementById("guessesLeft-text");
var yourGuessesText = document.getElementById("yourGuesses-Text");

//Pick a random word
function myFunction() {
  var word = words[Math.floor(Math.random() * words.length)];


//Set up the answer array
var answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";

var remainingLetters = word.length;

//THE GAME LOOP BEGINS HERE

//Listen for the user's input
debugger;
document.onkeyup = function(event){
    var userGuess = event.key;

while (remainingLetters > 0) {
}
  //Show the player their progress
  (answerArray.join(" "));

  //Get a guess from the player
  var guess = console.log(
    "Guess a letter or click cancel to stop playing."
  );
  if (guess === null) {

    // Exit the game loop
    //break;
//   } else if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//   } else {
    // Update the game state with the guess
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
  // The end of the game loop
}
}
//sow the answer and congratulate the player
}

winsText.textContent = "Wins:" + wins;
yourGuessesText.innerHTML = "yourGuesses-text" + yourGuesses;
currentWordText.innerHTML = "Current Word" + ;

//console.log(answerArray.join(" "));
//console.log("Good job! The answer was " + word);