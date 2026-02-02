let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");
const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#com-score");

const getComputerChoice = () => {
    const computerChoices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return computerChoices[randomIndex];
};

const resultShow = (msgText, pnt) => { 
    msg.innerText = msgText;
    if (pnt === 1) {
        msg.style.backgroundColor = 'green';
    } else if (pnt === -1) {
        msg.style.backgroundColor = 'red';
    } else {
        msg.style.backgroundColor = 'gray';
    }
    userScore_span.innerText = userScore;
    computerScore_span.innerText = computerScore;
};

const drawGame = () => {
    resultShow("It's a Draw!", 0);
};

const showWInner = (userWins, userChoice, computerChoice) => {
    if (userWins) {
        userScore++;
        resultShow(`You Win! ${userChoice} beats ${computerChoice}`, 1, userChoice, computerChoice);
        // msg.computedStyleMap.backgroundColor = 'green';

    } else {
        computerScore++;
        resultShow(`Computer Wins! ${computerChoice} defete ${userChoice}`, -1);
        // msg.computedStyleMap.backgroundColor = 'red';
    }
};

const playGame = (userChoice) => { 
    // console.log("User choice:", userChoice);
    const computerChoice = getComputerChoice();
    // console.log("Computer choice:", computerChoice);

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWins = true;

        if (userChoice=== "rock") {
            userWins = computerChoice === 'paper' ? false : true;
        } else if (userChoice === "paper") {
            userWins = computerChoice === 'scissors' ? false : true;
        } else if (userChoice === "scissors") {
            userWins = computerChoice === 'rock' ? false : true;
        }

        showWInner(userWins, userChoice, computerChoice );
    }
    

};
choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        // console.log(userChoice, " clicked");
        playGame(userChoice);
    });
});