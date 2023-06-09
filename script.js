'use strict'

import { emoticonArray, getRandomEmoticon } from './js/emoticons.js';


// DOM Elements
const inputData = document.querySelector('.input');
const form = document.querySelector('form');
const arrayBlock = document.querySelector('.array');
const setBlock = document.querySelector('.set');

let array = [];
let set = new Set();

window.onload = () => {
  inputData.value = getRandomEmoticon(0, 6, emoticonArray);
};

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let inputContent = event.target.children[0].value;

  array.push(inputContent);
  set.add(inputContent);

  arrayBlock.textContent = `Типовий Array: [ ${array} ]`;
  let setContent = [];

  for (let item of set) {
    setContent.push(item);
  }
  setBlock.textContent = `Типовий Set: [ ${setContent} ]`;

  inputData.value = getRandomEmoticon(0, 6, emoticonArray);

})




