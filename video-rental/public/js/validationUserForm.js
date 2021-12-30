function validateForm(){

    const message = document.getElementById('info');

    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const numberInput = document.getElementById('number');
    const emailInput = document.getElementById('e-mail');
    const passwordlInput = document.getElementById('password');

    const errorFirstName = document.getElementById('errorFirstName');
    const errorLastName = document.getElementById('errorLastName');
    const errorNumber = document.getElementById('errorNumber');
    const errorEmail = document.getElementById('errorEmail');
    const errorPassword = document.getElementById('errorPass');

    let valid = true;
    resetErrors([firstNameInput, lastNameInput, numberInput, emailInput, passwordlInput], [errorFirstName, errorLastName, errorNumber, errorEmail, errorPassword], errorsSummary);

    if (!checkRequired(firstNameInput.value)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Pole Imię jest wymagane";
    } else if (!checkTextLengthRange(firstNameInput.value, 2, 60)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }
    if (!checkRequired(lastNameInput.value)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole Nazwisko jest wymagane";
    } else if (!checkTextLengthRange(lastNameInput.value, 2, 60)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }
    if (!checkRequired(numberInput.value)) {
        valid = false;
        numberInput.classList.add("error-input");
        errorNumber.innerText = "Pole Numer telefonu jest wymagane";
    }else if(!checkTextLengthRange(numberInput.value,9,11)){
       valid = false;
       numberInput.classList.add("error-input");
       errorNumber.innerText = "Pole Numer telefonu powinno zawierać 9-11 znaków";
   }else if(!checkPhoneNumber(numberInput.value)){
       valid = false;
       numberInput.classList.add("error-input");
       errorNumber.innerText = "Wprowadź poprawny numer: 521-521-521"
    }

    if (!checkRequired(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole E-mail jest wymagane";
    } else if (!checkTextLengthRange(emailInput.value, 5, 60)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole E-mail powinno zawierać od 5 do 60 znaków";
    } else if (!checkEmail(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Wprowadź poprawny E-mail, np. adam@gmail.com";
    }
    
    if(!checkRequired(passwordlInput.value)){
    valid = false;
    passwordlInput.classList.add("error-input");
    errorPassword.innerText = "Pole Hasło jest wymagane";
    }else if (!checkTextLengthRange(passwordlInput.value, 6, 30)) {
    valid = false;
    passwordlInput.classList.add("error-input");
    errorPassword.innerText = "Pole Hasło powinno zawierać od 6 do 30 znaków";
    }else if(!checkPassword(passwordlInput.value)){
        valid = false;
        passwordlInput.classList.add("error-input");
        errorPassword.innerText = "Pole Hasło powinno zawierać conajmniej jedną wielką, małą literę, cyfrę oraz znak specjalny";
        
    }

    if(valid){
        message.classList.remove('d-none');
    }
    
    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }
    
return false;        
    
}

