let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random()*10);

function compareGuesses (humanGuess, computerGuess, secretTarget){
    const humDiff = Math.abs(secretTarget - humanGuess);
    const compDiff = Math.abs(secretTarget - computerGuess);
    return humDiff <= compDiff;
}

function updateScore (winner) {
    if (winner === 'human' ){
        humanScore++;
    } else if ( winner === 'computer' ){
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;

