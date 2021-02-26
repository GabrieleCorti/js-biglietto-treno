//quanti km vuole fare
var km = parseInt(prompt("quanti Km devi percorrere?"));
//console.log(km);
//quanti anni ha
var anni = parseInt(prompt("quanti anni hai?"));
//calcolo prezzo
var prezzo = (km * 0.21);
//sconto del 40% per over 65 e del 20% per under 18
if ( anni > 65 ) {

  prezzo = (prezzo * 0.6);
  alert("il tuo biglietto ha un prezzo di " + prezzo.toFixed(2) +"£");

} else if ( anni < 18) {

  prezzo = (prezzo * 0.8)
  alert("il tuo biglietto ha un prezzo di " + prezzo.toFixed(2) +"£");

} else {

  alert("il tuo biglietto ha un prezzo di " + prezzo.toFixed(2) +"£");

};
