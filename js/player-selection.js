document.getElementById('btn-messi-select').addEventListener('click', function () {
    const choosePlayer1 = document.getElementById('messi');
    const selectPlayer1 = choosePlayer1.innerText;
    const addPlayer1 = document.getElementById('first-selection');
    addPlayer1.append(selectPlayer1);
    const desiableButton = document.getElementById('btn-messi-select').disabled = true;

    if (desiableButton) {
        document.getElementById('btn-messi-select').style.backgroundColor = 'grey';
    }
});

document.getElementById('btn-neymar-select').addEventListener('click', function () {
    const choosePlayer2 = document.getElementById('neymar');
    const selectPlayer2 = choosePlayer2.innerText;
    const addPlayer2 = document.getElementById('second-selection');
    addPlayer2.append(selectPlayer2);
    const desiableButton = document.getElementById('btn-neymar-select').disabled = true;

    if (desiableButton) {
        document.getElementById('btn-neymar-select').style.backgroundColor = 'grey';
    }
});

document.getElementById('btn-mbappe-select').addEventListener('click', function () {
    const choosePlayer3 = document.getElementById('mbappe');
    const selectPlayer3 = choosePlayer3.innerText;
    const addPlayer3 = document.getElementById('third-selection');
    addPlayer3.append(selectPlayer3);
    const desiableButton = document.getElementById('btn-mbappe-select').disabled = true;

    if (desiableButton) {
        document.getElementById('btn-mbappe-select').style.backgroundColor = 'grey';
    }
});

document.getElementById('btn-machado-select').addEventListener('click', function () {
    const choosePlayer4 = document.getElementById('machado');
    const selectPlayer4 = choosePlayer4.innerText;
    const addPlayer4 = document.getElementById('fourth-selection');
    addPlayer4.append(selectPlayer4);
    const desiableButton = document.getElementById('btn-machado-select').disabled = true;

    if (desiableButton) {
        document.getElementById('btn-machado-select').style.backgroundColor = 'grey';
    }
});

document.getElementById('btn-ramos-select').addEventListener('click', function () {
    const choosePlayer5 = document.getElementById('ramos');
    const selectPlayer5 = choosePlayer5.innerText;
    const addPlayer5 = document.getElementById('fifth-selection');
    addPlayer5.append(selectPlayer5);
    const desiableButton = document.getElementById('btn-ramos-select').disabled = true;

    if (desiableButton) {
        document.getElementById('btn-ramos-select').style.backgroundColor = 'grey';
    }
});

document.getElementById('btn-renato-select').addEventListener('click', function () {
    const choosePlayer6 = document.getElementById('renato');
    const selectPlayer6 = choosePlayer6.innerText;
    alert('Can not add ' + selectPlayer6 + ',' + ' ' + 'beacuse you have already taken your best five players.');
});

