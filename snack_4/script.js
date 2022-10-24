

// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const numbers = [1, 2, 3, 4, 5];
const strings = ['a', 'b', 'c', 'd', 'e'];
let strAndNum = connect(numbers, strings);
console.log(strAndNum);

function connect(arrayOne, arrayTwo){
    let strAndNum = [];
    arrayOne.forEach(element => {
        strAndNum.push(arrayOne[element - 1]);
        strAndNum.push(arrayTwo[element - 1]);
    });
    return strAndNum;
}