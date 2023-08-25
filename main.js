// const spnText = document.querySelector('.text');
// const txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur rerum ad? Eum quos reprehenderit minima! Fugit, omnis! Eveniet repellendus et iure deserunt iusto quas in est odit, labore optio? KONIEC'

// // Parametry
// let indexText = 0;
// const time = 40;

// // Implementacja
// const addLetter = () => {
//  spnText.textContent += txt[indexText];
//  indexText++;
//  if (indexText === txt.length) clearInterval(indexTyping);
// }
// const indexTyping = setInterval(addLetter, time);

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor')
const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

let number = 0;
const time = 40;

function addLetter() {

  spnText.textContent += text[number];
  number++;
  if (number === text.length) clearInterval(index);
}

const cursorAnimation = () => {
  spnCursor.classList.toggle('active');
}

const index = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);
