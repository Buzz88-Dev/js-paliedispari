// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let sceltaUser = prompt("Scegli pari o dispari!!!");
console.log("Ho scelto ", sceltaUser);

let numUser = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("Scelgo: ", numUser);

let numPc = numeroComputer();

function numeroComputer(){

    number = Math.floor(Math.random() * 5) + 1;

    return number;
}

console.log("Il computer ha scelto: ", numPc);

let somma = numUser + numPc;

function risultato(){

    if (somma % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

console.log("La somma dei 2 numeri è ", somma, ", che è ", risultato());

if (sceltaUser === risultato()){
    
    console.log("Hai vinto");
} else {

    console.log("Hai perso");

}