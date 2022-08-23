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

    if (playerExpense > 0) {
        return playerExpenseElement.innerText = playerExpense;
    }
    else {
        alert('You can not give negative value');
    }
});
