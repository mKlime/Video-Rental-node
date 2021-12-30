function validateForm(){

    const message = document.getElementById('info');

    const userInput = document.getElementById('user_id');
    const movieNameInput = document.getElementById('movi_id');
    const premiereInput = document.getElementById('premiere');
    const dateFromInput = document.getElementById('dateFrom');
    const dateToInput = document.getElementById('dateTo');

    const errorUser = document.getElementById('errorUser');
    const errorMovieName = document.getElementById('errorMovieName');
    const errorPremiere = document.getElementById('errorPremiere');
    const errorDateFrom = document.getElementById('errorDateFrom');
    const errorDateTo = document.getElementById('errorDateTo');
    const errorsSummary = document.getElementById('errorsSummary');

    let valid = true;
    resetErrors([userInput,movieNameInput, premiereInput, dateFromInput, dateToInput], [errorUser,errorMovieName, errorPremiere, errorDateFrom, errorDateTo], errorsSummary);

    if (!checkRequired(userInput.value)) {
        valid = false;
        userInput.classList.add("error-input");
        errorUser.innerText = "Pole jest wymagane";
    }

    if (!checkRequired(movieNameInput.value)) {
        valid = false;
        movieNameInput.classList.add("error-input");
        
        errorMovieName.innerText = "Pole jest wymagane";
    }
    
    if (!checkYearBetween(premiereInput.value)) {
        valid = false;
        premiereInput.classList.add("error-input");
        errorPremiere.innerText = "Pole powinno być liczbą w zakresie od 1888 do 2021";
    }

    let nowDate = new Date(),
    month = '' + (nowDate.getMonth() + 1),
    day = '' + nowDate.getDate(),
    year = nowDate.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    const nowString = [year, month, day].join('-');

    if (!checkRequired(dateFromInput.value)) {
        valid = false;
        dateFromInput.classList.add("error-input");
        errorDateFrom.innerText = "Pole jest wymagane";
    } else if (!checkDate(dateFromInput.value)) {
        valid = false;
        dateFromInput.classList.add("error-input");
        errorDateFrom.innerText = "Pole powinno zawierać datę w formacie yyyy-MM-dd (np. 2000-01-01)";
    } else if (checkDateIfAfter(dateFromInput.value, nowString)) {
        valid = false;
        dateFromInput.classList.add("error-input");
        errorDateFrom.innerText = "Data nie może być dalsza niż dzisiaj";
    } else if (checkRequired(dateToInput.value) && checkDate(dateToInput.value)
        && !checkDateIfAfter(dateToInput.value, dateFromInput.value)) {
        valid = false;
        dateToInput.classList.add("error-input");
        errorDateTo.innerText = "Data zwrotu powinna być późniejsza niż data wypożyczenia";
    }
    if(valid){
        message.classList.remove('d-none');
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }
    
return false;        
    
}


