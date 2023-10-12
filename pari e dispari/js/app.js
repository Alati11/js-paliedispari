// - L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const sceltaUtente = prompt("scegli pari o dispari?")
let numeroUtente

// - Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
let numeroPc = Math.round(Math.random() * (4 - 1) + 1);
console.log(numeroPc +  "  numero PC");

// controllo scelta utente
if( sceltaUtente == "pari" || sceltaUtente == "dispari"){
    let numeroUtente = parseInt(prompt("scegli un numero da 1 a 5 "));
} else {
    alert("scelta errata");
    prompt("scegli pari o dispari?");
}
// - Sommiamo i due numeri 
let somma = numeroUtente + numeroPc;

// - Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// - Dichiariamo chi ha vinto.
if (IsEven(somma) == true)
{
    alert("Vince dispari!!!");
}
else
{
    alert("Vince pari!!!");
}
console.log(somma)


// creiamo una funzione per stabilire se un numero è pari o dispari
function IsEven(numeroUtente)
{
    if (isNaN(numeroUtente) == false)
    {
        return (numeroUtente %2 == 1 ?  true : false);
    }
    else
    {
        return null;
    }
}
