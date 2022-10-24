

// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)

function reverseString(string){
    string = string.split('').reverse().join('');
    return string;
}

reverse = reverseString('Hello World!');
console.log(reverse);