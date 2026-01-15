let body = document.querySelector("body");
let currModeA = "normal";

let angMode = document.querySelector("#angry");

angMode.onmouseover = (evt) => {
    if (currModeA==="normal") {
        currModeA = "angry";
        console.log("Changing to angry mode");
        body.classList.add("angry");
        body.classList.remove("normal");
    } else {
        currModeA = "normal";
        console.log("Changing to normal mode");
        body.classList.add("normal");
        body.classList.remove("angry");
    }
    // console.log("angry");
};

// ===============================

let sdMode = document.querySelector("#sad");
let currModes = "normal";

sdMode.onmouseover = (evts) => {
    if (currModes==="normal") {
        currModes = "sad";
        console.log("Changing to sad mode");
        body.classList.add("sad");
        body.classList.remove("normal");
    } else {
        currModes = "normal";
        console.log("Changing to normal mode");
        body.classList.add("normal");
        body.classList.remove("sad");
    }
};