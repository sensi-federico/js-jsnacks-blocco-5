

// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const firstNum = 2;
const secondNum = 7;

function calcArray(array, first, second){
    let result = array.filter(element => {
        if (element > first && element < second){
            return true;
        }
        return false;
    })
    return result;
}

const result = calcArray(numbers, firstNum, secondNum);
console.log('numeri compresi tra ' + firstNum + ' e ' + secondNum + ' : ' + result);