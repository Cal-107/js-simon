// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 1 - Stamapare in pagina 5 numeri casuali e far partire un timer di 30 secondi

// ref
const display = document.querySelector('.display');
const startBtn = document.querySelector('.start-game');
let seconds = 3;
const numbersArray = []

// Al click genero 5 numeri casuali con la funzione che dovranno sparire dopo 30 secondi
startBtn.addEventListener('click', () => {

    display.innerText = '';

    for (let i = 0; i < 5; i++) {
        numbersArray.push( randNum() );
    };

    numbersArray.forEach( element => display.innerHTML += `${element} `);

    const timer = setInterval (() => {
        if (seconds === 0) {
            display.innerText = '';
            clearInterval(timer);

        } else {
            seconds--
        }
    }, 1000);
});



/*
* functions
*/

function randNum() {
    return Math.floor(Math.random() * 100) + 1;
}