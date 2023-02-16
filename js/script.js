document.getElementById("btn-calculate").addEventListener("click", function () {
    const income = getInputValue("income");

    const foodExpense = getInputValue("food");
    const rentExpense = getInputValue("rent");
    const clothesExpense = getInputValue("clothes");
    const totalExpense = foodExpense + rentExpense + clothesExpense;
    setInnerText("total-expense", totalExpense);

    const balance = income - totalExpense;

    //   validate income
    if (totalExpense > income) {
        alert("Expenses cannot be more than income");
    } else {
        setInnerText("balance", balance);
    }

});

document.getElementById("btn-save").addEventListener("click", function () {
    const income = getInputValue("income");
    const save = getInputValue("save");
    const saveAmount = getSaveAmount(save, income);
    setInnerText("saving-amount", saveAmount);

    const balance = document.getElementById("balance").innerText;
    const balanceAmount = parseFloat(balance);


    //   validate saving amount
    if (saveAmount > balance) {
        alert("SavingAmount is greater than balance");
    } else {
        const remainingBalance = balanceAmount - saveAmount;
        setInnerText("remaining-balance", remainingBalance);
    }
})