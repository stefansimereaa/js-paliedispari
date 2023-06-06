console.log('js ok')

// Chiedere all'utente di inserire una parola
const word = prompt("Inserisci una parola:");

// Controlla se la parola è palindroma
if (isPalindrome(word)) {
    const resultWord = document.getElementById("resultsWord");
    resultWord.innerHTML = "La parola è palindroma.";
} else {
    const resultWord = document.getElementById("resultsWord");
    resultWord.innerHTML = "La parola non è palindroma.";
}

// Funzione per verificare se una parola è palindroma
function isPalindrome(word) {
  // Converte la parola in minuscolo
  word = word.toLowerCase();

  // Confronta la parola originale con la sua versione invertita
  return word === word.split("").reverse().join("");
}
