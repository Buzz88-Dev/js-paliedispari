// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


let parolaUser = prompt("Inserisci una parola!!!");
console.log(parolaUser);

let parola = parolaPalindroma(parolaUser);

function parolaPalindroma(check){

    let parolaDivisa = parolaUser.split('');  // trasformo la parola in un array dove ogni singola lettera è un elemento che compone l array
    console.log(parolaDivisa);

    let invertoArray = parolaDivisa.reverse();  // inverto l'ordine dell'array
    console.log(invertoArray);

    let parolaInvertita = invertoArray.join('');  // unisco le stringhe dell'array invertito
    console.log(parolaInvertita);

    if (check === parolaInvertita) {

        return "palindroma";

        } else {

        return "non palindroma";
        
    }
}

console.log("La parola è: ", parola);