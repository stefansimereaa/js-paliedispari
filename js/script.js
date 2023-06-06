// Buttons 
const button = document.getElementById(`generates`)

//Click Button
button.addEventListener('click', oddOrEven);

//Funziona calcolo pari o dispari
function oddOrEven() {

    // Recupero elementi dal DOM
    const userChoice = document.getElementById("even-or-odd").value;
    const userNumber = parseInt(document.getElementById("number").value);

    // Verifica che il numero inserito sia compreso tra 1 e 5
    if (userNumber < 1 || userNumber > 5){
        alert("Inserisci un numero da 1 a 5!");
        return;
    }
    
    // Genera un numero casuale per il computer
    const cpuNumber = Math.floor(Math.random() * 5) + 1;
    
    // Somma i due numeri
    const sum = userNumber + cpuNumber;
  
    // Controlla se la somma è pari o dispari
    const result = (sum % 2 === 0) ? 'pari' : 'dispari';
  
    //Stampa il risultato
    const resultHTML = document.getElementById("results");
    resultHTML.innerHTML = "Numero Cpu: " + cpuNumber + "<br>" + "Somma: " + sum + "<br>" + "Risultato: " + result;

    // Controlla il risultato con la scelta dell'utente
    const outcomeHTML = document.getElementById("outcome");
    if (result.toLowerCase() === userChoice.toLowerCase()) {
    outcomeHTML.innerHTML = "Hai vinto!";
    } else {
    outcomeHTML.innerHTML = "Hai perso!";
    }
}