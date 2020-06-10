function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amount = parseInt(amountInput.value) * price;
    let showAmount = document.querySelector("span.show-amount");

    let amountNumber = parseInt(amountInput.value);

    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
    if (amountNumber > 10) {
        alert("You cannot order more than 10 Meowrgers!");
    }
    else if (amountNumber < 1) {
        alert("You have to buy at least 1 Meowrger");
    } else {
        showAmount.innerHTML = amount;
    }

}
