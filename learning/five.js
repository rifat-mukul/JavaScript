const url = "  https://dog.ceo/api/breed/hound/list";

const factPera = document.querySelector("#fact");

const btn1 = document.querySelector("#btn");



const getFacts = async () => {
    // console.log("Getting data from the api : ");
    let response = await fetch(url);
    // console.log(response);
    let data = await response.json();
    // console.log(data.message[0]);
    // factPera.innerText = data.message;

    for (const breed of data.message) {
        console.log(breed);
        factPera.innerText += breed + "\n";
    }
}
btn1.addEventListener("click", getFacts);
// getFacts();