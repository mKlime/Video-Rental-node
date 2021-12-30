function resetErrors(inputs, errorTexts, errorInfo) {
    for(let i=0; i<inputs.length; i++) {
        inputs[i].classList.remove("error-input");
    }
    for(let i=0; i<errorTexts.length; i++) {
        errorTexts[i].innerText = "";
    }
    errorInfo.innerText = "";
}

function checkRequired(value) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    if (value === "") {
        return false;
    }
    return true;
}

function checkTextLengthRange(value, min, max) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    const length = value.length;
    if (max && length > max) {
        return false;
    }
    if (min && length < min) {
        return false;
    }
    return true;
}
function checkEmail(value) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(value);
}

function checkPhoneNumber(value){
    if(!value){
        return false;
    }
    value = value.toString().trim();
    const regx = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{3}/;
    return regx.test(value);
}

function checkPassword(value){
    if(!value){
        return false;
    }
    value = value.toString().trim();
    const passRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
    return passRegx.test(value);
}


function checkYearBetween(value){
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    const regx = /^\s*(188[8-9]|18[2-9]\d|19\d\d|200\d|201[0-9]|202[0-1])\s*$/;
    return regx.test(value);

}

function checkPriceRange(value) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    const regx = /^\s*(([1-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9])+\.\d{1,2})\s*$/;
    return regx.test(value);
}

function checkDate(value) {
    if (!value) {
        return false;
    }
    const pattern = /(\d{4})-(\d{2})-(\d{2})/;
    return pattern.test(value);
}

function checkDateIfAfter(value, compareTo) {
    if (!value) {
        return false;
    }
    if (!compareTo) {
        return false;
    }
    const pattern = /(\d{4})-(\d{2})-(\d{2})/;
    if (!pattern.test(value)) {
        return false;
    }
    if (!pattern.test(compareTo)) {
        return false;
    }
    const valueDate = new Date(value);
    const compareToDate = new Date(compareTo);
    if ((valueDate.getTime()-1) < compareToDate.getTime()) {
        return false;
    }
    return true;
}

