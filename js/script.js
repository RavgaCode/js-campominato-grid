// Chiedo all'utente il grado di difficoltà tramite prompt
const gameDifficulty = parseInt(
  prompt("Scegli un grado di difficoltà da 1 a 3")
);
// Determino il range di numeri in base alla difficoltà scelta
const minRange = 1;
let maxRange;

if (gameDifficulty === 1) {
  maxRange = 10;
} else if (gameDifficulty === 2) {
  maxRange = 81;
} else if (gameDifficulty === 3) {
  maxRange = 49;
}
const bombNumber = 8;
// Imposto una funzione che crei un array di numeri bomba, in base al numero di bombe e range di numeri
const bombGenerator = function (bombNumber, minRange, maxRange) {
  let bombArray = [];
  //   Creo un ciclo while che pushi dei numeri unici dentro l'array bomb, fino al massimo di bombNumber
  while (bombArray.length < bombNumber) {
    let randomNumber =
      Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

    if (!bombArray.includes(randomNumber)) {
      bombArray.push(randomNumber);
    }
  }
  return bombArray;
};
// Invoco la funzione di creazione delle bombe e inserisco il risultato in una variabile
bombGenerator(bombNumber, minRange, maxRange);
let bombArray = bombGenerator(bombNumber, minRange, maxRange);
console.log(bombArray);

// Creo un array dove inserire i numeri inseriti dall'utente, se rispettano le condizioni, e interrompo il gioco qualora trovasse un numero bomba
let gameContinues = true;
let userArray = [];
const winningScore = maxRange - minRange - bombNumber + 1;
while ((gameContinues = true)) {
  if (userArray.length === winningScore) {
    alert("Congratulazioni!! Hai vinto!!");
    gameContinues = false;
    break;
  }
  // Chiedo all'utente un numero
  let userNumber = parseInt(
    prompt(`Scegli un numero compreso tra ${minRange} e ${maxRange}`)
  );

  if (bombArray.includes(userNumber)) {
    alert(`BOOOOM!!! Hai Perso!! Il tuo punteggio è: ${userArray.length}`);
    gameContinues = false;
    break;
  } else if (!userArray.includes(userNumber)) {
    userArray.push(userNumber);
    console.log(userArray);
  }
}
