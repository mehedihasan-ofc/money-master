function getInputValue(id) {
    const inputValue = document.getElementById(id).value;

    if (inputValue < 0 || inputValue == "") {
        alert("Inputs must be positive numbers");
        return;
    }

    return parseFloat(inputValue);
}

function setInnerText(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}

function getSaveAmount(percent, total) {
    const saveAmount = ((percent / 100) * total).toFixed(2);
    return parseFloat(saveAmount);
}