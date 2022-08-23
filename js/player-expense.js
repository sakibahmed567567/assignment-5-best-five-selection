// player expense calculatting
document.getElementById('btn-player-calculation').addEventListener('click', function () {

    const getPlayerPrice = document.getElementById('player-price');
    const newPlayerPriceString = getPlayerPrice.value;
    const newPlayerPrice = parseInt(newPlayerPriceString);
    const playerPriceTotal = 5 * newPlayerPrice;
    getPlayerPrice.value = '';

    const playerExpenseElement = document.getElementById('player-expense');
    const playerExpenseElementString = playerExpenseElement.innerText;
    let playerExpense = parseInt(playerExpenseElementString);
    playerExpense = playerPriceTotal;
    playerExpenseElement.innerText = playerExpense;
});

// Total expense calculatting

document.getElementById('btn-total-calculation').addEventListener('click', function () {
    const getManagerExpense = document.getElementById('manager-expense');
    const newManagerExpenseString = getManagerExpense.value;
    const newManagerExpense = parseInt(newManagerExpenseString);
    getManagerExpense.value = '';

    const getCoachExpense = document.getElementById('coach-expense');
    const newCoachExpenseString = getCoachExpense.value;
    const newCoachExpense = parseInt(newCoachExpenseString);
    getCoachExpense.value = '';

    const playerExpenseElement = document.getElementById('player-expense');
    const playerExpenseElementString = playerExpenseElement.innerText;
    let playerExpense = parseInt(playerExpenseElementString);

    const totalExpense = newManagerExpense + newCoachExpense + playerExpense;

    const totalExpenseElement = document.getElementById('total-expense');
    const totalExpenseElementString = totalExpenseElement.innerText;
    let newTotalExpense = parseInt(totalExpenseElementString);
    newTotalExpense = totalExpense;
    totalExpenseElement.innerText = newTotalExpense;
});