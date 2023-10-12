

// - Chiedere all’utente di inserire una parola
//     - tramite prompt chiedere di inserire parola
let parola = prompt("inserisci parola"); 
let parolaInversa = invertiParola(parola);

// // controllare che parola sia uguale a parola inversa.
        // - se parola è uguale a parola inversa allora la parola è palindroma
        // - altrimenti la parola non è palindroma
if(parola == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
 
// // - Creare una funzione che divida la parola, la inverta e infine la riunisca
function invertiParola(str){
  let strInversa = str.split('').reverse().join('');  
  return strInversa;
}
