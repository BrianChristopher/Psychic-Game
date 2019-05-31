//GLOBAL VARIABLES
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var guesses = [];
var lettersToGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerRandomLetter = "";

//FUNCTIONS
// Computer makes random choice from the options array. This is the Computer's guess.
function getRandom() {
    computerRandomLetter =
        lettersToGuess[Math.floor(Math.random() * lettersToGuess.length)];
    console.log(computerRandomLetter);
}

//Update the scores
function updateScore() {
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guessesRemaining").innerHTML = guessesRemaining;
    document.querySelector("#guesses").innerHTML = guesses;
}

//New game score reset
function scoreReset() {
    guessesRemaining = 9;
    guesses = [];
}


//GAME PLAY BEGINS HERE
//Computer makes random choice.
getRandom();
updateScore();


//User chooses a letter
document.onkeyup = function (event) {
    //Deduct a guess.
    guessesRemaining--;

    //Take the key and set as a variable.
    var userGuess = event.key.toLowerCase();

    //Ass the user guess to array.
    guesses.push(userGuess);

    
    updateScore();

    if (userGuess === computerRandomLetter) {
        wins++;
        updateScore();
        scoreReset();
        getRandom();
    }

    if (guessesRemaining === 0) {
        losses++;
        updateScore();
        scoreReset();
        getRandom();
    }
}