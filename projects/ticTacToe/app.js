const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const newGameBtn = document.querySelector("#new-game-btn");
const overlay = document.querySelector("#winner-overlay");
const winnerText = document.querySelector("#winner-text");
const playerDisplay = document.querySelector("#player-turn");

let turnO = true; 
let gameActive = true;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const resetGame = () => {
    turnO = true;
    gameActive = true;
    overlay.classList.add("hide");
    playerDisplay.innerText = "O";
    playerDisplay.style.color = "var(--accent-o)";
    
    boxes.forEach(box => {
        box.innerText = "";
        box.classList.remove("o-style", "x-style");
        box.disabled = false;
    });
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (gameActive && box.innerText === "") {
            if (turnO) {
                box.innerText = "O";
                box.classList.add("o-style");
                playerDisplay.innerText = "X";
                playerDisplay.style.color = "var(--accent-x)";
            } else {
                box.innerText = "X";
                box.classList.add("x-style");
                playerDisplay.innerText = "O";
                playerDisplay.style.color = "var(--accent-o)";
            }
            
            checkWinner();
            turnO = !turnO;
        }
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        let pos1 = boxes[a].innerText;
        let pos2 = boxes[b].innerText;
        let pos3 = boxes[c].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);
            return;
        }
    }

    // Check for Draw
    if ([...boxes].every(box => box.innerText !== "")) {
        winnerText.innerText = "Draw!";
        winnerText.style.color = "white";
        overlay.classList.remove("hide");
        gameActive = false;
    }
};

const showWinner = (winner) => {
    winnerText.innerText = `${winner} Wins!`;
    winnerText.className = winner === "O" ? "o-style" : "x-style";
    overlay.classList.remove("hide");
    gameActive = false;
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);