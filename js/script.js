console.log('JS OK');

/*
Consegna
L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Consigli del giorno: 
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/

//! Suddivisione steb-by-step
//! Creazione funzioni utili

// Funzione per creare le celle
function createCell(num) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.id = num;
    cell.innerText = num;
    return cell;
}




//! ------------------------------------------------------
//! EFFETTIVO SVOLGIMENTO DEL PROGRAMMA
//! ------------------------------------------------------


// generazioni costanti
const difficulty = document.getElementById('difficulty');
const resultElement = document.getElementById('result');
const button = document.getElementById('button');



button.addEventListener('click', function () {
    switch (difficulty.value) {
        case '1':
            for (let i = 1; i <= 100; i++) {
                const cell = createCell(i);
                resultElement.appendChild(cell);
                cell.classList.add('d-one');
                cell.addEventListener('click', function () {
                    cell.classList.toggle('clicked');
                })
            }
            break;
        case '2':
            for (let i = 1; i <= 81; i++) {
                const cell = createCell(i);
                resultElement.appendChild(cell);
                cell.classList.add('d-two');
                cell.addEventListener('click', function () {
                    cell.classList.toggle('clicked');
                })
            }
            break;
        case '3':
            for (let i = 1; i <= 49; i++) {
                const cell = createCell(i);
                resultElement.appendChild(cell);
                cell.classList.add('d-three');
                cell.addEventListener('click', function () {
                    cell.classList.toggle('clicked');
                })
            }
            break;
    }
})






