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

function createParticularCell(number, difficulty) {
    for (let i = 1; i <= number; i++) {
        const cell = createCell(i);
        resultElement.appendChild(cell);
        cell.classList.add(difficulty);
        cell.addEventListener('click', function () {
            cell.classList.toggle('clicked');
        })
    }
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
            createParticularCell(100, 'd-one');
            break;
        case '2':
            createParticularCell(81, 'd-two');
            break;
        case '3':
            createParticularCell(49, 'd-three');
            break;
        default:
            alert('Devi scegliere una delle difficoltà!');
    }
})






