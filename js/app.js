'use strict';

let arrRGB = [];

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateRandomRGB = () => {
  for (let i = 0; i < 9; i++) {
    let r = randomNumber(0, 255);
    let g = randomNumber(0, 255);
    let b = randomNumber(0, 255);
    let rgbBG = `rgba(${r}, ${g}, ${b}, 1)`;
    arrRGB.push(rgbBG);
  }
}

generateRandomRGB();

function setDivColors() {
  var box = $('.box');
  for (let i = 0; i < box.length; i++) {
    let divEl = document.getElementById(box[i].id);
    for (let j = 0; j < arrRGB.length; j++) {
      $(divEl).css('background-color', arrRGB[i]);
    }
  }
}

setDivColors();
