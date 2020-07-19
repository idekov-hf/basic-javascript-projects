const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const colorTxt = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', changeBackground);

function changeBackground() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  colorTxt.textContent = randomColor;
}

function getRandomColor() {
  return `#${Array.from({ length: 6 }, (_) => hex[getRandomNumber()]).join('')}`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
