const inserir = document.getElementById("inserir");
const testar = document.getElementById("testar");
const responder = document.getElementById("responder");

let letter = "";
let word = "";
let response = "";
let listLetters = [];
let wordProgress = [];
let gameOver = "Game Over";
let countChance = 0;
let bodyParts = 0;
let resultGame = false;
let oldLetters = [];

// Separa a palavra em um array contendo cada letra
function splitWord() {
  word = document.getElementById("palavra").value;
  listLetters = word.split("");
  hideWord();
}

// Cria um array com o total de letras da palavra e substitui por _
function hideWord() {
  for (let count = 0; count < listLetters.length; count++) {
    wordProgress[count] = "_";
  }
  console.log(wordProgress);
}

// Verifica se a letra já foi utilizada - Se sim, informa que já foi e tenta outra, Se não, adiciona na lista de letras utilizadas e valida se existe na palavra
function validateLetter() {
  letter = document.getElementById("letra").value;
  let valid = false;

  for (let count = 0; count < 26; count++) {
    if (letter == oldLetters[count]) {
      valid = true;
    } else {
      // Continua
    }
  }

  if (valid == true) {
    console.log("Letra já utlizada, tente outra! " + oldLetters);
  } else {
    oldLetters.push(letter);
    validateNewLetter(letter);
  }
}

// Valida se a letra existe em alguma posição do array
function validateNewLetter(letter) {
  let result = false;

  for (let count = 0; count < listLetters.length; count++) {
    if (letter == listLetters[count]) {
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

  // Verifica se as letras escolhidas completam a palavra. (Valido apenas para palavras com até 6 caracteres)
  if (word == wordProgress.toString()) {
    console.log("Acertou! As letras escolhidas completaram a palavra " + word);
  } else {
    // Continua
  }

  // Indica o contador total de chances e atualiza e subtrai a cada tentativa falha
  console.log(wordProgress);
  countChance--;
  console.log("Total de tentativas 6 | Restantes: " + countChance);
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
  switch (bodyParts) {
    case 1:
      console.log("Na forca: cabeça");
      break;
    case 2:
      console.log("Na forca: cabeça e tronco");
      break;
    case 3:
      console.log("Na forca: cabeça, tronco e braço direito");
      break;
    case 4:
      console.log("Na forca: cabeça, tronco e dois braços");
      break;
    case 5:
      console.log("Na forca: cabeça, tronco, dois braços e perna direita");
      break;
    case 6:
      console.log("Um corpo completo na forca!");
      break;
  }
  if (bodyParts == 6) {
    gameOver = true;
    console.log("Game Over");
  } else {
    validateChances();
  }
}

inserir.addEventListener("click", splitWord);
testar.addEventListener("click", validateLetter);
responder.addEventListener("click", validadeWord);
