function calculateIncomeExpenses(){
        const inputIncome =  parseFloat(document.getElementById('income').value);
        const inputFood =  parseFloat(document.getElementById('food').value);
        const inputRent = parseFloat(document.getElementById('rent').value);
        const inputClothes = parseFloat(document.getElementById('clothes').value );

        var totalExpenses = (inputFood + inputRent + inputClothes);
        const displayTotalExpenses = document.getElementById('total-expenses');
        displayTotalExpenses.innerText = totalExpenses;

        var balance = inputIncome - totalExpenses;
        const displayBalance = document.getElementById('after-expenses-balance');
        displayBalance.innerText = balance;
    }
    

function savingMoney(){
        var inputPercentage = parseFloat(document.getElementById('save').value);
        var expensesAfterBalance = parseFloat(document.getElementById('after-expenses-balance').innerText);
        var saving =    (expensesAfterBalance * inputPercentage) / 100;

        var savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = saving;

        var remaining = expensesAfterBalance - saving;
        var remainingAmount = document.getElementById('remaining-balance');
        remainingAmount.innerText = remaining;     
}

