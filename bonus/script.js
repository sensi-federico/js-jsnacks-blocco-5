

// Bonus:
// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

const people = [
    {
        name: 'Federico',
        surname: 'Sensi',
        age: 16
    },
    {
        name: 'Kevin',
        surname: 'Mitnick',
        age: 59
    },
    {
        name: 'Julian',
        surname: 'Assange',
        age: 51
    },
    {
        name: 'Elliot',
        surname: 'Alderson',
        age: 15 
    },
    {
        name: 'Edward',
        surname: 'Snowden',
        age: 39 
    },

];

let theyCan = [];

people.forEach(element => {
    if (element.age >= 18){
        theyCan.push(` ${element.name} ${element.surname} può guidare `);
    } else {
        theyCan.push(` ${element.name} ${element.surname} NON può guidare `);
    }

});

console.log(theyCan);
const textEl = document.querySelector('h5');
textEl.innerHTML = theyCan;