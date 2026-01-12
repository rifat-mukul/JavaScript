// DOM - Document Object Model
// alert("Hello"); 
let txt=`hello`;

document.getElementById("sx").innerHTML=txt;

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " From apna collage";
// console.dir(h2.innerText);

let divs = document.querySelectorAll(".box");
console.log(divs[0]);

// divs[0].innerText = "New unique Value 1";
// divs[1].innerText = "New unique Value 2";
// divs[2].innerText = "New unique Value 3";
let idx = 1;
for (div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}