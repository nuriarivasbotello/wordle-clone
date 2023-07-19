// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
// Realizar primero el CSS
// Crear un array con palabras de cinco letras
// Sacar una palabra aleatoria del array
// Si la palabra que escribo contiene menos 6 letras o mas de 6 que salte un aviso de que la palabra debe contener 6 letras
// Hacer que el texto que yo meta en el form se pinte en el grid (dando intro)
// Hacer que cada vez que yo pinte una palabra se añada a la línea de bajo de la anterior
// Verificar que la palabra que yo meta si las letras no están se pinten en gris (recorriendo)
// Si la letra está en la posición correcta que se pinte verde (recorriendo)
// Si la letra está pero no en la posición correcta que se pinte de amarillo (recorriendo)
// Crear animaciones
const containerElement = document.getElementById('container-letters');
const formElement = document.getElementById('form');
const fiveNames = ['sergio', 'carlos', 'daniel', 'aurora'];

// palabra aleatoria del array para iniciar el juego
const randomWord = () => {
  const aleatory = fiveNames[Math.floor(Math.random() * fiveNames.length)];
  return aleatory;
};
randomWord();
const inputLength = word => {
  if (word.length < 6) {
    const newMessage = document.createElement('p');
    newMessage.textContent = 'Palabra muy corta, usa 6';
    formElement.append(newMessage);
    console.log('Hola');
  } else if (word.length === 6) {
    const newMessage = document.createElement('p');
    newMessage.textContent = 'Perfecto';
    formElement.append(newMessage);
  } else {
    const newMessage = document.createElement('p');
    newMessage.textContent = 'Muchas letras en tu palabra, usa solo 6';
    formElement.append(newMessage);
  }
};

formElement.addEventListener('submit', event => {
  event.preventDefault();
  inputLength(event.target.word.value);
  event.target.word.value = '';
});
