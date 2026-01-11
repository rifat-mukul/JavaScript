// let text= "connect the fifth day";

// document.getElementById("ftf").innerHTML=text;

// functions 

// function myFunction(txt) {  //here txt is parameter
//     document.getElementById("ftf").innerHTML=txt;
// }

// let txt="Print from inside the function";
// myFunction(txt); //here txt is argument

// calculate sum

// function sum(x,y) {
//     s = x+y;
//     return s;
// }
 

// let val = sum(10,49);
// document.getElementById("ftf").innerHTML=`the sum is ${val}`;

// arrow function 
// const arrowSum = (a,b) => {
//     console.log(a+b);
// };

// task 1

// function countVoule(str) {
//     let count= 0;
//     for (let index = 0; index < str.length; index++) {
//         if (str[index]=='a' || str[index]=='e' || str[index]=='i' || str[index]=='o' || str[index]=='u') {
//             count++;
//         }
        
//     }
//     return count;
// }

// let str= prompt("Give a string from count voule : ");
// let count = countVoule(str.toLocaleLowerCase());
// document.getElementById("ftf").innerHTML=`the total number of voule in ${str} is ${count}`;

// foreach loop

// let arr = ["Dhaka", "CTG","Bogora"];

// arr.forEach((val, idx) => {
//     console.log(val, idx);
// });

// task2

// let arr= [2,3,4,5,6];

// arr.forEach(element => {
//     console.log(element * element);
// });

// let arr= [2,3,4,5,6];

// let newArr = arr.map((val) => {
//     return val*val;
// });

// console.log(newArr);

// let newArr2 = arr.filter(val=> {
//     return val%2===0;
// });

// console.log(newArr2);

// task 3;
let num = prompt("ENter the number : ");

let arr = [];
for (let index = 1; index <= num; index++) {
    arr[index-1] = index;
    
}
console.log(arr);

let sum = arr.reduce((rst, curr) => {
    return rst+curr;
});

console.log(sum);

let mult = arr.reduce((rst, curr) => {
    return rst*curr;
});

console.log(mult);