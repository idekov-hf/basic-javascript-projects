'use strict';

const colorArr = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

function ColorObject(colors) {
  colors.reduce((obj, color, idx) => {
    obj[idx] = color;
    return obj;
  }, this);

  Object.defineProperty(this, 'previousNum', {
    value: 0,
    writable: true,
  });
}

ColorObject.prototype.randomColor = function () {
  const numColors = Object.keys(this).length;
  let num = getRandomNum(numColors);
  while (num === this.previousNum) {
    num = getRandomNum(numColors);
  }
  this.previousNum = num;
  return this[num];
};

function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

const colors = new ColorObject(colorArr);

const colorTxt = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', changeBackground);

function changeBackground() {
  const randomColor = colors.randomColor();
  document.body.style.backgroundColor = randomColor;
  colorTxt.textContent = randomColor;
}
