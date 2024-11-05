function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const change= document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

change.addEventListener('click', ()=>{
  const backround= getRandomHexColor();
  body.style.backgroundColor = backround;
  colorSpan.textContent = backround;
});