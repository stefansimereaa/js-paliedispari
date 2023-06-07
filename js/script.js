// Recupero elementi del DOM
const button = document.getElementById('generates');
const userChoiceInput = document.getElementById('even-or-odd');
const userNumberInput = document.getElementById('number');
const resultHTML = document.getElementById('results');
const outcomeHTML = document.getElementById('outcome');

//Click al pulsante
button.addEventListener('click', oddOrEven);

// Funzione per il calcolo di pari o dispari
function oddOrEven() {

  // Recupero i valori inseriti dall'utente
  const userChoice = userChoiceInput.value;
  const userNumber = parseInt(userNumberInput.value);

  // Verifica che il numero inserito sia compreso tra 1 e 5
  if (userNumber < 1 || userNumber > 5) {
    alert('Inserisci un numero da 1 a 5!');
    return;
  }

  // Genera un numero casuale per il computer
  const cpuNumber = Math.floor(Math.random() * 5) + 1;

  // Somma i due numeri
  const sum = userNumber + cpuNumber;

  // Controlla se la somma è pari o dispari
  const result = sum % 2 === 0 ? 'pari' : 'dispari';

  // Stampa il risultato
  resultHTML.innerHTML = "Numero Cpu: " + cpuNumber + "<br>" + "Somma: " + sum + "<br>" + "Risultato: " + result;

  // Controlla il risultato con la scelta dell'utente
  if (result.toLowerCase() === userChoice.toLowerCase()) {
    outcomeHTML.innerHTML = 'Hai vinto!';
  } else {
    outcomeHTML.innerHTML = 'Hai perso!';
  }
}
