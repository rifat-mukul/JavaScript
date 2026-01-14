// document.getElementById("svn").innerHTML="hello form seventh";
// let div = document.querySelector("div");
// console.log(div.getAttribute("id"));

// let id = div.getAttribute("id");
// console.log(id);

// let para = document.querySelector("p");
// // console.log(para.getAttribute("class"));

// console.log(para.setAttribute("class", "newClass"));

let newBtn = document.createElement("button");
newBtn.innerText = "ClickMe";
console.log(newBtn);

let div = document.querySelector("div");
// div.append(newBtn); 
div.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>This is from js file</i>";
document.querySelector("body").prepend(newHeading);

newBtn.remove()