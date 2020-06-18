function warOnOff(e) {
    let wAE = document.querySelector("div[name='wrongAmountError']");
    if (e) wAE.style.display = "block"; else wAE.style.display = "none";
}

function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amount = parseInt(amountInput.value) * price;
    let showAmount = document.querySelector("span.show-amount");

    let amountNumber = parseInt(amountInput.value);

    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    if (amountNumber < 1 || amountNumber > 10) {
        warOnOff(1);
    } else {
        warOnOff(0);
        showAmount.innerHTML = amount;
    }
}