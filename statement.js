
// deposit calculation
document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousTotal = getElementValueById('deposit-total');

    const newDepositTotal = previousTotal + newDepositAmount;

    setElementValueById('deposit-total', newDepositTotal);

    const previousBalanceAmount = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceAmount + newDepositAmount;

    setElementValueById('balance-total', newBalanceTotal);
});

// withdraw calculation

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousTotal = getElementValueById('withdraw-total');

    const newWithdrawTotal = previousTotal + newWithdrawAmount;

    setElementValueById('withdraw-total', newWithdrawTotal);

    const previousBalanceAmount = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;

    setElementValueById('balance-total', newBalanceTotal);
});