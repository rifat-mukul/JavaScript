// let mesg= "hello from the third day <br>";
// for (let index = 0; index < 5; index++) {
//     document.getElementById("trd").innerHTML+=mesg;
    
// }
// document.getElementById("trd").innerHTML=mesg;

// let num = prompt("Enter a number : ");
// let sum=0;
// for (let index = 1; index <= num; index++) {
//     sum+=index;
    
// }

// document.getElementById("trd").innerHTML=sum;

// for of loop

// let str="MyNameIsRifat";

// for (const i of str) {
//     console.log("i = ", i); 
//     document.getElementById("trd").innerHTML+=i;
// }

// for in loop

// let student = {
//     name : "Rahul",
//     age : 29,
//     cgpa : 3.3,
//     isPass : true
// };

// for (const key in student) {
    
//     // document.getElementById("trd").innerHTML+=key;
//     console.log("key : ", key , " value : ", student[key]);
    
// }

// print even number
// for (let index = 1; index < 101; index++) {
//     if (index%2===0) {
//         console.log(index);
//     }
    
// }

// gusse the game number 

// let gameNumber=25;
// let num = prompt("Guess the game number : ");
// // console.log(num);

// while (num!=gameNumber) {
//     num = prompt("worng number  : ");
// }

// console.log("You enter the rigbnt number")


// string 
// let obj = {
//     item : `pen`,
//     prince : 90
// }

// let output = `the cost of ${obj.item} \t is ${obj.prince} taka`;
// console.log(output);

// let str="name";

// console.log(str.toUpperCase())

let uName = prompt("Enter your name : ");

let usrNaame= `name : ${uName} \n Username :  @${uName.toLowerCase()}${uName.length}`

document.getElementById("trd").innerHTML=usrNaame;