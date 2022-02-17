// calulate button calculation start here 
function calculateIncomeExpenses(){
        const inputIncome =  parseFloat(document.getElementById('income').value);
        const inputFood =  parseFloat(document.getElementById('food').value);
        const inputRent = parseFloat(document.getElementById('rent').value);
        const inputClothes = parseFloat(document.getElementById('clothes').value );

        if(inputIncome>=0 && inputFood>=0 && inputRent>=0 && inputClothes>=0 ){
        var totalExpenses = (inputFood + inputRent + inputClothes);
                if(totalExpenses > inputIncome){
                        alert('your Expenses amount is greather than income amount is not possible!!');
                }
                else{
                        const displayTotalExpenses = document.getElementById('total-expenses');
                        displayTotalExpenses.innerText = totalExpenses;

                }
        var balance = inputIncome - totalExpenses;
        const displayBalance = document.getElementById('after-expenses-balance');
        displayBalance.innerText = balance;
        }
        else{
                alert('Enter the positive number');
        }
    }
    

    // saving button calculation start here 
function savingMoney(){
        var inputPercentage = document.getElementById('save');
        const inputPercentageAmount =parseFloat(inputPercentage.value);
        const inputIncome =  parseFloat(document.getElementById('income').value);
        var expensesAfterBalance = parseFloat(document.getElementById('after-expenses-balance').innerText);
        var saving =    (inputIncome * inputPercentageAmount) / 100;

        
        const displayBalance = parseFloat(document.getElementById('after-expenses-balance').innerText);
        if(saving > displayBalance) {
                alert('your current balance is very low . so try again!!!')
                inputPercentage.value = '';
        }
        else{
                var savingAmount = document.getElementById('saving-amount');
                savingAmount.innerText = saving;
                var remaining = expensesAfterBalance - saving;
                var remainingAmount = document.getElementById('remaining-balance');
                remainingAmount.innerText = remaining; 
        }            
}

