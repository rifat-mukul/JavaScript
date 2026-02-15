const base_url =
  "https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn  = document.querySelector("button");

// const now = new Date();

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "BDT") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}


const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let ammount = document.querySelector(".ammount input");
    let amtVal = ammount.value;
    // console.log(amtVal);
    if (amtVal === "" || amtVal <= 0) {
        // alert("Please enter a valid ammount");
        amtVal = 1;
        // return;
        ammount.value = "1";
    }
    const fromCurrency = document.querySelector(".from select").value.toLowerCase();
    const toCurrency = document.querySelector(".to select").value.toLowerCase();
    const today = new Date().toISOString().split("T")[0];
    // console.log(amtVal);
    // const fromCurrency = document.querySelector(".from select").value.toLowerCase();
    const url = `https://${today}.currency-api.pages.dev/v1/currencies/${fromCurrency}.json`;
    console.log(url);

    // console.log(`the rate from ${fromCurrency} to ${toCurrency} is: `);
    try {

        let response = await fetch(url);
        let data = await response.json();
        let rete = data[fromCurrency][toCurrency];
        let total = (amtVal * rete).toFixed(2);
        // console.log(total);
        let msg = document.querySelector(".msg p");
        msg.innerText = `${amtVal} ${fromCurrency.toUpperCase()} = ${total} ${toCurrency.toUpperCase()}`;
    } catch (error) {
        console.log("Error fetching exchange rate:", error);
        document.querySelector(".result").innerText = "Error fetching exchange rate. Please try again later.";
    }
});