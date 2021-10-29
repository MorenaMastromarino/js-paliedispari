//Esercizio palindroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma


const parolaUtente = prompt('Inserisci una parola');

const arrayParolaUtente = parolaUtente.split('');
console.log('Array Parola Utente', arrayParolaUtente);

const risultato = parolaPalindroma(arrayParolaUtente);
const outputPalindroma = document.getElementById('output-palindroma');

outputPalindroma.innerHTML = 
`
  <h3>Palindroma</h3>
  <p>
    La parola ${parolaUtente} ${risultato}
  </p>
`;


//funzione per vedere se la parola è palindroma
function parolaPalindroma(arrayParola){
 
  for(let i = 0; i < Math.floor(arrayParola.length / 2); i++){

    if (arrayParola[i] !== arrayParola[(arrayParola.length - 1)- i]){

      console.log('prima lettera diversa', arrayParola[i]);
      console.log('seconda lettera diversa', arrayParola[(arrayParola.length - 1)- i]);

      return 'NON è palindroma';

    }
    
  }
  
  return 'è palindroma';
  
};



//**Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const sceltaUtente = prompt('pari o dispari?');
// console.log('scelta Utente', sceltaUtente);

let datiValidi = true;
let errorMsg = '';

if (sceltaUtente !== 'pari' && sceltaUtente !== 'dispari'){
  datiValidi = false;
  errorMsg = 'inserire correttamente pari o dispari';
};

const numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'));
// console.log('numero utente', numeroUtente);

if(isNaN(numeroUtente)){
  datiValidi = false;
  errorMsg = 'inserire un numero';
}else if (numeroUtente < 1 || numeroUtente > 5){
  datiValidi = false;
  errorMsg = 'inserire un numero compreso tra 1 e 5';
};

const numeroComputer = numeroRandom(1, 5);
// console.log('numero computer', numeroComputer);

const sommaNumeri = numeroUtente + numeroComputer;
// console.log('somma numeri', sommaNumeri);

const sommaPariODispari = pariODispari(sommaNumeri);

let risultatoGioco = '';

if (sommaPariODispari === sceltaUtente){
  risultatoGioco = 'Hai vinto!';
}else{
  risultatoGioco = 'Hai perso!';
}

//output
const outputPariODispari = document.getElementById('output-pari-o-dispari');
if(datiValidi === false){
  outputPariODispari.innerHTML = errorMsg;
} else{
  outputPariODispari.innerHTML = 
  `
    <h3>Pari o Dispari</h3>
    <p>
      <strong>${errorMsg}</strong>
        Hai scelto ${sceltaUtente}.<br>
        Il tuo numero è ${numeroUtente}.<br>
        Il numero del computer è ${numeroComputer}.<br>
        La somma dei numeri è ${sommaNumeri} che è ${sommaPariODispari} quindi:<br>
        <strong>${risultatoGioco}</strong>
    </p>
  `;

};



// funzione numero random
function numeroRandom (min, max){

  return Math.floor(Math.random() * (max - min + 1) ) + min;

};


// funzione pari o dispari
function pariODispari(numero){
  if(numero % 2 === 0){
    return 'pari';
  }
  return 'dispari';
}
