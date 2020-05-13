let computerNum = Math.floor(Math.random() * 100) + 1;
let history = [];

console.log("this is what computer chose", computerNum);
function guess() {
    let userNum = document.getElementById("guessNumber").value;
    let resultMessage = '';

    if (computerNum > userNum) {
        resultMessage = "too low";
    }
    else if (computerNum < userNum) {
        resultMessage = "too high";
    }
    else if (computerNum === parseInt(userNum)) {
        resultMessage = "correct";
    }

    history.push(userNum);

    document.getElementById("resultArea").innerHTML = `${resultMessage}`;
    document.getElementById("historyArea").innerHTML = `History: ${history}`;
}