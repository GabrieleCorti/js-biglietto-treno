//quanti km vuole fare
var km = parseInt(prompt("quanti Km devi percorrere?"));

if (isNaN(km)) {

  km = parseInt(prompt("Hai sbagliato, inserisci un NUMERO di Km"));

};
//console.log(km);
//quanti anni ha
var anni = parseInt(prompt("quanti anni hai?"));

if (isNaN(anni)) {

  km = parseInt(prompt("Hai sbagliato, inserisci un NUMERO per idnicare la tua età"));

};
//calcolo prezzo
var prezzo = (km * 0.21);
//sconto del 40% per over 65 e del 20% per under 18
if ( anni > 65 ) {

  prezzo = (prezzo * 0.6);
  alert("il tuo biglietto ha un prezzo di " + prezzo.toFixed(2) +"£");

} else if (isNaN(km) || isNaN(anni)) {

  alert("Le attività su questo profilo sono sospette, ricarica la pagina per ricominciare");

} else if ( anni < 18) {

  prezzo = (prezzo * 0.8)
  alert("il tuo biglietto ha un prezzo di " + prezzo.toFixed(2) +"£");

} else {

  alert("il tuo biglietto ha un prezzo di " + prezzo.toFixed(2) +"£");

};
