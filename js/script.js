const formElem = document.getElementById("user-form");
const kmInput = document.getElementById("km");
const ageInput = document.getElementById("age");
const usernameInput = document.getElementById("username")
const pricePerKm = 0.21;
const discount18 = 20;
const discountOver65 = 40;
// console.log(formInput, kmInput, ageInput)

// Elementi della card
const userElem = document.getElementById("username-card");
const offerElem = document.getElementById("offer-card");
const carriageElem = document.getElementById("carriage-card");
const codeElem = document.getElementById("code-card");
const ticketPriceElem = document.getElementById("ticket-price-card");
const cardElem = document.getElementById("card-ticket");


formElem.addEventListener("submit", function(event){
    event.preventDefault()
    const userAge = parseInt(ageInput.value.trim());
    const userKm = parseInt(kmInput.value.trim());
    const usernameUser = usernameInput.value.trim();
    const finalPrice = ticketPrice(userAge, userKm, pricePerKm, discount18, discountOver65);
    userElem.innerHTML = (`Nome e Cognome: ${usernameUser}`);
    carriageElem.innerHTML = (`Carrozza: ${randomNum(1, 10)}`);
    codeElem.innerHTML = (`Codice CP: ${randomNum (1000, 2000)}`) ;
    ticketPriceElem.innerHTML = `Il costo del biglietto è di ${finalPrice} €`
    offerElem.innerHTML = typeOfOffer(userAge);
    formElem.reset();
    cardElem.classList.remove("d-none")
})

/**
 * Calcolo il prezzo totale del biglietto di viaggio
 * @param {number} age
 * @param {number} km
 * @param {number} costKm
 * @param {number} discount18
 * @param {number} discount65
 * @returns {number}
 */
function ticketPrice(age, km, costKm, discount18, discount65) {
    let ticketPrice = km * costKm;
    if (age < 18) {
        const discountCalc18 = ticketPrice / 100 * discount18;
        ticketPrice = discountCalc18;
    } else if (age > 65) {
        const discountCalc65 = ticketPrice / 100 * discount65;
        ticketPrice = discountCalc65;
    }
    return ticketPrice.toFixed(2);
}

/**
 * Calcolo il tipo di offerta
 * @param {number} age
 * @returns {string}
 */
function typeOfOffer(age) {
    let offerType = "Biglietto standard"
    if (age < 18) {
        offerType = "Sconto Giovani"
    } else if(age > 65) {
        offerType = "Sconto Anziani"
    }
    return offerType;
}

// Funzione per generare i numeri random
function randomNum(min, max) {
    return (Math.floor(Math.random() *(max - min) + min))
}