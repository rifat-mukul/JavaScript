let boxs = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");

let turnO = true;

let array = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
];

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if(box.innerText === "") {
            box.innerText = turnO ? "O" : "X";
            turnO = !turnO;
            checkWin();
        }
    });
});

resetButton.addEventListener("click", () => {
    boxs.forEach(box => {
        box.innerText = "";
    });
    turnO = true;
});

function checkWin() {
    array.forEach(condition => {
        let a = boxs[condition[0]-1].innerText; 
        let b = boxs[condition[1]-1].innerText;
        let c = boxs[condition[2]-1].innerText;
        console.log(a, b, c);
        if(a !== "" && a === b && b === c) {
            alert(`${a} wins!`);
            boxs.forEach(box => {
                box.innerText = "";
            });
            turnO = true;
        }
    });
}           