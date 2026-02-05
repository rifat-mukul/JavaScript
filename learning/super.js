class Human {
    constructor(name) {
        console.log("Enter parent constructor");
        this.specis = "homo sapiens";
        this.name = name;
        console.log(`this guy is ${name}`);
    }
    eat() {
        console.log("Eat");
    }
    sleep() {
        console.log("Sleep");
    }

}

class Eng extends Human {
    constructor(branch) {
        console.log("Enter child Cnstractor");
        super(); //to invoke parent class constactor
        this.branch = branch;
        console.log("Exit child constor");
    }
    work() {
        super.eat();
        console.log("Solve problem");
    }
}

let asik = new Eng("CSE");
// let arin = new Eng("CE"); 