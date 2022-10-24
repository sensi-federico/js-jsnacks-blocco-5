

// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


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

let under15 = [];
let over15 = [];


zucchine.forEach(element => {
    if (element.lunghezza >= 15){
        over15.push(element);
    } else {
        under15.push(element);
    }
})

console.log(under15, over15);


function sum (array){
    let sumPeso = 0;
    array.forEach(element => {sumPeso += element.peso});
    console.log(sumPeso.toFixed(2) + 'kg');
    return sumPeso.toFixed(2);
}

const under = sum(under15);
const over = sum(over15);

const titleEl = document.querySelector('h2.first');
const subTitleEl = document.querySelector('h2.second');

titleEl.innerText = 'Il peso totale delle under 15 è: ' + under + 'kg';
subTitleEl.innerText = 'Il peso totale delle over 15 è: ' + over + 'kg';