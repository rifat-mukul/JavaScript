let data = "secreate data";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("Website data = ", data);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        data = "Some new data";
    }
}

let student1 = new User("Asik", "asik@gmail.com");
let student2 = new User("aman", "aman@gmail.com");
// let student3 = new User();

let admin1 = new Admin("admin", "admin@gmail.com");