// console.log("one");
// console.log("tow");

// function Greet() {
//     console.log("Hello");
// }

// setTimeout(Greet, 4000) //2000 mili secod = 2 sccode

// setTimeout(() => {
//     console.log("hello from timeout");
// }, 2000);

// console.log("Three");

// function getData(dataId, getNextData) {
//     // console.log(`data ${dataId}`);
//     setTimeout(() => {
//         console.log("Hello",dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1, () => {
//     getData(2, ()=> {
//         getData(3);
//     })
// });

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     reject("some error");
// })

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am promise");
//         // reject("some error occuraed");
//         resolve("success");
//     });
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("Promise fulfil");
// });

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 2000);
//     });
// }

// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 1");
//             resolve("success");
//         }, 3000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 2");
//             resolve("success");
//         }, 3000);
//     });
// }

// // promise chain
// let p1

// call back hell
// console.log("Fetching data 1");
// asyncFunc().then((res)=> {
//     console.log(res);
//     console.log("Fetching data 2");
//     asyncFunc2().then((res) => {
//         console.log(res);
//     });
// });

// console.log("Fetching data 2");
// let p2 = asyncFunc2();
// p2.then((res)=> {
//     console.log(res);
// });

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//     });
// });

// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   });

// async await 
async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}