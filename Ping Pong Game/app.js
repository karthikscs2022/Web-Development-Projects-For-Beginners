const selectElement = document.querySelector('select');
const player1 = document.querySelector('.btn-primary ');
const player2 = document.querySelector('.btn-secondary');
let player1Score = document.querySelector('#score1');
let player2Score = document.querySelector('#score2');
const reset = document.querySelector('.btn-success');
let winningNum = '7';

selectElement.addEventListener('change', function (evt) {
    winningNum = evt.target.value;
})

player1.addEventListener('click', () => {
    player1Score.innerText = parseInt(player1Score.innerText) + 1;
    if (player1Score.innerText === winningNum) {
        player1Score.style.color = 'green';
        player1.disabled = true;
        player2.disabled = true;
    }
})

player2.addEventListener('click', () => {
    player2Score.innerText = parseInt(player2Score.innerText) + 1;
    if (player2Score.innerText === winningNum) {
        player2Score.style.color = 'green';
        player1.disabled = true;
        player2.disabled = true;
    }
})

reset.addEventListener('click', function () {
    player1Score.innerText = '0';
    player2Score.innerText = '0';
    player1Score.style.color = 'black';
    player2Score.style.color = 'black';
    player1.disabled = false;
    player2.disabled = false;
})

