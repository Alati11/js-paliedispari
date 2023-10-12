// - L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

// let numeroUtente = prompt( "scegli pari o dispari?")
// let sceltaUtente = parseInt(prompt( "scegli un numero da 1 a 5 "))
// console.log(numeroUtente, sceltaUtente);
// let pari = sceltaPari ( sceltaUtente % =)


// - Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// - Sommiamo i due numeri 
// - Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// - Dichiariamo chi ha vinto.
const sceltaUtente = prompt("scegli pari o dispari?")
let numeroUtente = parseFloat(prompt("scegli un numero da 1 a 5 "));

if( sceltaUtente === "pari"){
    numeroUtente
}

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


let x = 25;

if (IsEven(x) == true)
{
    alert("Numero dispari");
}
else
{
    alert("Numero pari");
}
