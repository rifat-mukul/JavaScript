// class Parent {
//     greet() {
//         console.log("Hello from the parents");
//     }
// }

// class Child extends Parent {}

// const dr = new Child();


class Person {
    constructor() {
        this.specis = "homo sapiens";
    }
    eat() {
        console.log("Eat");
    }
    sleep() {
        console.log("Sleep");
    }

}

class Engineer extends Person {
    work() {
        console.log("Solve problem");
    }
}

let rafi = new Engineer();