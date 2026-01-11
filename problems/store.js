const product = {
    name : "Ball pen",
    rating : 4,
    offer : 5,
    price : 270
}

const profile = {
    name : "Rifat",
    post : 156,
    like : 123245,
    follower : 345
};

let prodductInfo = `
    <p> Name : ${product.name} </p>
`;

let profileInfo = `
    <p>Name : ${profile.name}</p>
`;
document.getElementById("prod").innerHTML=profileInfo;