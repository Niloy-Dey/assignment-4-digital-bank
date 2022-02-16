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
    



