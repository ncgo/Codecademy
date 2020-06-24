let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Generate new secret target
const generateTarget = () => Math.floor(Math.random()*10);

//Validate Human Input
const checkHumanGuess = (guess) => {
    if(guess < 0 || theGuess > 9){
        window.alert("Please enter a number between 0 and 9 (inclusive)");
    }
};

//Get Absolute distance between guess and target
const getAbsoluteDistance = (guess, target) => Math.abs(target - guess);

//Determine who wins according to whose guess is the closest to the target number
//Returns true if human wins or if there's a tie, flase if computer wins
function compareGuesses (humanGuess, computerGuess, secretTarget){
    return getAbsoluteDistance(humanGuess, secretTarget) <= getAbsoluteDistance(computerGuess, secretTarget);
}

//Increase the winner's score after each round
function updateScore (winner) {
    if (winner === 'human' ){
        humanScore++;
    } else if ( winner === 'computer' ){
        computerScore++;
    }
}

//Update the round number after each round.
const advanceRound = () => currentRoundNumber++;

