const formInput = document.getElementById("user-form");
const kmInput = document.getElementById("km");
const ageInput = document.getElementById("age");
const pricePerKm = 0.21;
const discount18 = 20;
const discountOver65 = 40;
// console.log(formInput, kmInput, ageInput)

formInput.addEventListener("submit", function(event) {
    event.preventDefault()
    const userAge = parseInt(ageInput.value.trim());
    const userKm = parseInt(kmInput.value.trim());
    const finalPrice = ticketPrice(userAge, userKm, pricePerKm, discount18, discountOver65);
    // console.log(finalPrice);
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
    if(age < 18) {
        const discountCalc18 = ticketPrice / 100 * discount18;
        ticketPrice = discountCalc18;
    } else if (age > 65) {
        const discountCalc65 = ticketPrice / 100 * discount65;
        ticketPrice = discountCalc65;
    }
   return ticketPrice.toFixed(2);
}
