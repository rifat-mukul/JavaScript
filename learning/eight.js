// let txt = `this is from class eigth events`;

// document.getElementById("e8t").innerHTML=txt;

let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log("Btn 1 is clicked");
//     let a=25;
//     a++;
//     console.log(a);
// }

// btn1.addEventListener("click", () => {
//     console.log("btn1 was clicked");
// });

// btn1.addEventListener("click", (evt) => {
//     console.log("btn1 was clicked handeler 2");
//     console.log(evt);
//     console.log(evt.type);
// });

btn1.addEventListener("click", (evt) => {
    console.log("btn1 was clicked handeler 1");

});

btn1.addEventListener("click", (evt) => {
    console.log("btn1 was clicked handeler 2");
});

const handler3 = () => {
    console.log("btn1 was clicked handeler 3");
}
btn1.addEventListener("click", handler3);

btn1.addEventListener("click", (evt) => {
    console.log("btn1 was clicked handeler 4");
});

btn1.removeEventListener("click", handler3);

// let div = document.querySelector("div");
// div.onmouseover = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log("You are inside div");
// }