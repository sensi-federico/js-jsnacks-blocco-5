

// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const zucchine = [
    {
        varietà: 'gialle',
        peso: 1,
        lunghezza: 20
    },
    {
        varietà: 'verdi',
        peso: 0.4,
        lunghezza: 12
    },
    {
        varietà: 'rosse',
        peso: 0.2,
        lunghezza: 9
    },
    {
        varietà: 'blu',
        peso: 0.7,
        lunghezza: 16
    },
    {
        varietà: 'viola',
        peso: 1.2,
        lunghezza: 22
    },
    {
        varietà: 'romane',
        peso: 0.5,
        lunghezza: 16
    },
    {
        varietà: 'fiorentine',
        peso: 0.3,
        lunghezza: 13
    },
    {
        varietà: 'perugine',
        peso: 0.9,
        lunghezza: 12
    },
    {
        varietà: 'pugliesi',
        peso: 1.2,
        lunghezza: 21
    },
    {
        varietà: 'siciliane',
        peso: 0.5,
        lunghezza: 18
    },
]

let sum = 0;
zucchine.forEach(element => {sum += element.peso});

console.log( 'La somma del peso di tutte le zucchine è: ' + sum + 'kg');
const titleEl = document.querySelector('h2');
titleEl.innerText = 'La somma del peso di tutte le zucchine è: ' + sum + 'kg';