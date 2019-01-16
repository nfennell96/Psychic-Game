// Array for the random psychic letters chosen 
const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array to catch wrong letters that the player guesses
let wrongLetterArray = [];

// Variables
let wins = 0;
let losses = 0;
let guessLeft = 10;
let guessSoFar = 0;

//capture the player's selected letter they press on their keyboard
document.addEventListener('keypress', (event) => {
    let playerKeyCode = event.keyCode;
    let playerKeyCodeConverted = String.fromCharCode(playerKeyCode);

    //This variable generates a random number which is used for the psychic's letter
    let randomNumber = Math.floor(Math.random() * alphabetArray.length);
  
    //This assigns a random array letter to the psychicLetter variable
    let psychicLetter = alphabetArray[randomNumber];

    if(playerKeyCodeConverted == psychicLetter) {
        alert("You Win!");
        wins++;
        guessLeft = 10;
        wrongLetterArray = [];
    } else {
        // add the incorrect letter to the wrongLetterArray and decrease the amount of guesses left
        wrongLetterArray.push(playerKeyCodeConverted);
        guessLeft--;
        guessSoFar++;
    }
    
    // if there are 10 consecutive incorrect guesses the player loses
    if(guessLeft === 0) {
        alert("You Lose! Try again.");
        guessSoFar = 0;
        guessLeft = 10;
        losses++;
        wrongLetterArray = [];
    }
    
    // code to manipulate the Document Object Model (DOM)
    document.getElementById("guessesLeft").innerHTML = (guessLeft);
    document.getElementById("wins").innerHTML = (wins);
    document.getElementById("Losses").innerHTML = (losses);
    document.getElementById("GuessSoFar").innerHTML = (wrongLetterArray);
});