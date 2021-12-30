
function validateForm() {

    const message = document.getElementById('info');

    const movieNameInput = document.getElementById('movieName');
    const premiereInput = document.getElementById('premiere');
    const typeInput = document.getElementById('type');
    const priceInput = document.getElementById('price');
        
    const errorMovieName = document.getElementById('errorMovieName');
    const errorPremiere = document.getElementById('errorPremiere');
    const errorType = document.getElementById('errorType');
    const errorPrice = document.getElementById('errorPrice');
    const errorsSummary = document.getElementById('errorsSummary');
    
    let valid = true;
    resetErrors([movieNameInput, premiereInput, typeInput, priceInput], [errorMovieName, errorPremiere, errorType, errorPrice], errorsSummary);

    if (!checkRequired(movieNameInput.value)) {
        valid = false;
        movieNameInput.classList.add("error-input");
        errorMovieName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(movieNameInput.value, 2, 60)) {
        valid = false;
        movieNameInput.classList.add("error-input");
        errorMovieName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    if (!checkYearBetween(premiereInput.value)) {
        valid = false;
        premiereInput.classList.add("error-input");
        errorPremiere.innerText = "Pole powinno być liczbą w zakresie od 1888 do 2021";
    }

    if (!checkRequired(typeInput.value)) {
        valid = false;
        typeInput.classList.add("error-input");
        errorType.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(typeInput.value, 2, 30)) {
        valid = false;
        typeInput.classList.add("error-input");
        errorType.innerText = "Pole Gatunek powinno zawierać od 2 do 30 znaków";
    }

    if (!checkPriceRange(priceInput.value)) {
        valid = false;
        priceInput.classList.add("error-input");
        errorPrice.innerText = "Cena musi być liczbą w przedziale 1.00 - 49.99";
    }
    
    if(valid){
        message.classList.remove('d-none');
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }
    
    return false;     
       
    
}

