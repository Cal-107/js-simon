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
const userArray = []

// Al click genero 5 numeri casuali con la funzione che dovranno sparire dopo 30 secondi
startBtn.addEventListener('click', () => {

    display.innerText = '';

    for (let i = 0; i < 5; i++) {
        let number;
        do {
            number = randNum()
        } while (numbersArray.includes(number))
            numbersArray.push(number);    
    };
    numbersArray.forEach( element => display.innerHTML += `${element} `);

    const timer = setInterval ( () => {

        if (seconds === 0) {

            display.innerText = '';

            clearInterval(timer);

            for (let i = 0; i < 5; i++) {
                userArray.push( parseInt(prompt('Ricordi tutti i numeri?Inseriscili')));

            };

            const numWin = numbersArray.filter( element => userArray.includes(element) );

            if (numWin.length == numbersArray.length) {
                display.innerText = `Grande! Hai vinto ed indovinato ${numWin.length} numeri su ${numWin.length} e sono ${numWin}.`

            } else if (numWin.length == 1) {
                display.innerText = `Mi dispiace, hai perso. Hai indovinato un solo numero ${numWin.length}, ed è ${numWin}.`
                
            } else if (numWin.length == 0) {
                display.innerText = `Mi dispiace, hai perso e non hai indovinato neanche un  numero.`

            } else {
                display.innerText = `Hai perso ed hai indovinato ${numWin.length} numeri.`

            }
            
        } else {
            seconds--;

        };

    }, 1000);
});



/*
* functions
*/

function randNum() {
    return Math.floor(Math.random() * 100) + 1;
}