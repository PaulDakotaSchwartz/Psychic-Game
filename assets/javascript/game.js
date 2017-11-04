//Array created with full alphabet available.
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Initializing variables, tracking wins and losses.
var wins = 0;
var losses = 0;
var guessesStart = 9;
var guessesRemain = 9;
var guessedLetters = [];
var letterToGuess = "";



//Lets the computer select a random letter from the available choices.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Allows the user 9 guesses
// guesses = guesses || 9
var updateGuessesRemain = function() {
  // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesRemain;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
  // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Function will be called when we reset everything
var reset = function() {
  totalGuesses = 9;
  guessesRemain = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesRemain();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesRemain();


//When key is released it becomes the users guess
document.onkeyup = function(event) {
    guessesRemain--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesRemain();
  updateGuessesSoFar();

        if (guessesRemain > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Yes, you are psychic!");
                reset();
            }
        }else if(guessesRemain == 0){
            // update losses.
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, you're not psychic,want to try again?");
            // Initiate reset.
            reset();
        }
};