let computerNum = 0;
let guesses = [];
let previousGuessNum = 0;

function generateRandomNumber() { computerNum = Math.floor(Math.random() * 50 + 1); console.log(computerNum); }
function updatePreviousGuessNum() { previousGuessNum = guesses[guesses.length - 1]; }
generateRandomNumber();

submitButton.addEventListener("click", () => {
    let userNum = document.getElementById("guessNumber").value;
    let resultMessage = '';

    if (computerNum > userNum) {
        resultMessage = "Too Low!";
    }
    else if (computerNum < userNum) {
        resultMessage = "Too High!";
    }
    else if (computerNum === parseInt(userNum)) {
        resultMessage = "Correct!";
    }

    guesses.push(userNum);
    updatePreviousGuessNum();
    numberGuessesUpdate();

    let repeat = false;
    for (let i = 0; i < guesses.length - 1; i++) {
        if (guesses[i] === guesses[guesses.length - 1]) {
            repeat = true;
        }
    }

    let num = parseInt(previousGuessNum);

    document.getElementById("resultArea").innerHTML = `${resultMessage}`;
    document.getElementById("previousGuesses").innerHTML = `Previous Guesses: ${guesses}`;
})

function numberGuessesUpdate () {
    var guessNum = guesses.length;
    document.getElementById("remainingGuesses").innerHTML = `${5 - guessNum}`;
    if (guessNum === 5) {
        alert("Game Over! The correct answer was " + computerNum);
        resetGame();
    }
};

function resetGame() {
    guesses = [];
    generateRandomNumber();
    $('#previousGuesses').empty();
    document.getElementById("resultArea").innerHTML = ``;
    $('#remainingGuesses').text(5);
};