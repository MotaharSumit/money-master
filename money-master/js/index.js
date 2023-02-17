document.getElementById('cal-btn').addEventListener('click', function(){
    const incomeAmmountString = document.getElementById('income-input').value;
    const incomeAmmount = parseFloat(incomeAmmountString);
    
    const foodAmmountString = document.getElementById('food-input').value;
    const foodAmmount = parseFloat(foodAmmountString);

    const rentAmmountString = document.getElementById('rent-input').value;
    const rentAmmount = parseFloat(rentAmmountString);

    const clothAmmountString = document.getElementById('cloth-input').value;
    const clothAmmount = parseFloat(clothAmmountString);

    document.getElementById('total-expense').innerText = foodAmmount + rentAmmount + clothAmmount;
    document.getElementById('balance-total').innerText = incomeAmmount - (foodAmmount + rentAmmount + clothAmmount);
})