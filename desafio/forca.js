const inserir = document.getElementById("inserir");
const testar = document.getElementById("testar");
const responder = document.getElementById("responder");

let wordExpect = "";
let word = "";
let response = "";
let listLetters = [];
let wordProgress = [];
let gameOver = "Game Over";
let countChance = 0;
let bodyParts = 0;
let resultGame = false;

// Separa a palavra em um array contendo cada letra
function splitWord() {
  word = document.getElementById("palavra").value;
  console.log(word);
  listLetters = word.split("");
  console.log(listLetters);
  hideWord();
}

// Cria um array com o total de letras da palavra e substitui por _
function hideWord() {
  for (let count = 0; count < listLetters.length; count++) {
    wordProgress[count] = "_";
  }
  console.log(wordProgress);
}

// Valida se a letra existe em alguma posição do array
function validateNewLetter() {
  wordExpect = document.getElementById("letra").value;
  let result = false;

  for (let count = 0; count < listLetters.length; count++) {
    if (wordExpect == listLetters[count]) {
      wordProgress[count] = listLetters[count];
      result = true;
    } else {
    }
  }
  if (result == false) {
    bodyParts++;
    validateBody();
    console.log("Essa letra não compõe a palavra!");
  }

  console.log(wordProgress);
  countChance++;

  validateChances();
}

// Valida a palavra se tentar responder
function validadeWord(response) {
  response = document.getElementById("resposta").value;
  if (word == response) {
    console.log("Acertou! A resposta correta é: " + word);
  } else {
    console.log("Não é essa palavra, tente outra vez!");
  }
}

// Conta o total de chances
function validateChances() {
  if (countChance == 6) {
    gameOver = true;
    console.log("Game Over");
  } else {
    // New letter
  }
}

// Verifica o corpo na forca
function validateBody() {
  if (bodyParts == 6) {
    gameOver = true;
    console.log("Game Over");
  } else {
    // Continue Game
  }
}

inserir.addEventListener("click", splitWord);
testar.addEventListener("click", validateNewLetter);
responder.addEventListener("click", validadeWord);
