// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
// Realizar primero el CSS
// Crear un array con palabras de cinco letras
// Sacar una palabra aleatoria del array
// Si la palabra que escribo contiene menos 6 letras o mas de 6 que salte un aviso de que la palabra debe contener 6 letras
// Hacer que el texto que yo meta en el form se pinte en el grid (dando intro)
// Hacer que cada vez que yo pinte una palabra se añada a la línea de bajo de la anterior
const containerElement = document.getElementById('container-letters');
const formElement = document.getElementById('form');
const inputElement = document.getElementById('input-form');
const footerElement = document.getElementById('footer');
const informationPElement = document.getElementById('information');
const mainElement = document.getElementById('main');
const fiveNames = ['sergio', 'carlos', 'daniel', 'aurora', 'angela'];
const tries = 5;
const numberLetters = 6;
let aleatoryWord;
let round = 0;
let row = 0;
// palabra aleatoria del array para iniciar el juego
const randomWord = () => {
  const aleatory = fiveNames[Math.floor(Math.random() * fiveNames.length)];
  return aleatory;
};
aleatoryWord = randomWord();
console.log(aleatoryWord);
const inputLength = word => {
  informationPElement.textContent = '';
  if (word.length < 6) {
    informationPElement.textContent = 'Palabra muy corta, usa una con 6 letras';
    return;
  } else if (word.length === 6) {
    informationPElement.textContent = 'Perfecto';
  }

  paintedWord(word);
};
const createRow = () => {
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= tries; i++) {
    const newRow = document.createElement('div');
    newRow.classList.add('container-letters');
    fragment.append(newRow);
    for (let i = 1; i <= numberLetters; i++) {
      const letter = document.createElement('span');
      letter.classList.add('letter');
      newRow.append(letter);
    }
  }
  mainElement.append(fragment);
};
createRow();
const paintedWord = word => {
  for (let i = 0; i <= word.length - 1; i++) {
    mainElement.children[round].children[i].textContent = word[i];
  }
  comparationWord(word);
  round++;
};
// Primero la letra está en la posición correcta - verde (recorriendo)
// Después la letra está pero no en la posición correcta - amarillo (recorriendo)
// Verificar que la palabra que yo meta si las letras no están se pinten en gris (recorriendo)
// Crear animaciones
const comparationWord = word => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === aleatoryWord[i]) {
      mainElement.children[round].children[i].classList.add('letter--green');
    }
    for (let i = 0; i < word.length; i++) {
      if (!aleatoryWord.includes(word[i])) {
        mainElement.children[round].children[i].classList.add('letter--gray');
      }
    }
  }
};

formElement.addEventListener('submit', event => {
  event.preventDefault();

  inputLength(event.target.word.value);
  event.target.word.value = '';
});
