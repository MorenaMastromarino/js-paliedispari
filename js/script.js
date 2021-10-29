//Esercizio palindroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma


const parolaUtente = prompt('Inserisci una parola');

const arrayParolaUtente = parolaUtente.split('');
console.log('Array Parola Utente', arrayParolaUtente);

const risultato = parolaPalindroma(arrayParolaUtente);
console.log(risultato);


function parolaPalindroma(arrayParola){
 
  for(let i = 0; i < Math.floor(arrayParola.length / 2); i++){

    if (arrayParola[i] !== arrayParola[(arrayParola.length - 1)- i]){

      console.log('prima lettera diversa', arrayParola[i]);
      console.log('seconda lettera diversa', arrayParola[(arrayParola.length - 1)- i]);

      return 'La parola NON è palindroma'

    }
    
  }
  
  return 'La parola è palindroma'
  
};
