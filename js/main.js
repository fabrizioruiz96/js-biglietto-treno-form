const kmTrip = document.querySelector("#input-km");
const agePassenger = document.querySelector("#input-age");
const submitButton = document.querySelector("#submit-button");
const resultArea = document.querySelector("#result-area");

submitButton.addEventListener(`click`, function(e){
    e.preventDefault()

    let km = parseInt(kmTrip.value);
    let age = parseInt(agePassenger.value);

    if (isNaN(km) || isNaN(age)){
        alert("Inserisci dei numeri validi per favore e riprova!");
    } else {
        const pricePerKm = 0.21;
        let priceTrip = km * pricePerKm;
        let discount = 0;

        if (age < 18){
            discount = 0.2;
        } else if (age > 65){
            discount = 0.4;
        }

        priceTrip *= (1 - discount);
        const priceInEuro = `€${priceTrip.toFixed(2).replace("." , ",")}`;

        if (discount > 0){
            resultArea.innerHTML = `Il tuo viaggio per ${km} km costerà ${priceInEuro} con uno sconto applicato del ${discount * 100}%!`;
        } else {
            resultArea.innerHTML = `Il tuo viaggio per ${km} km costerà ${priceInEuro}!`;
        }
    }
})