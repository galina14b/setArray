'use strict'

import { getRandomEmoticon } from './js/emoticons.js';


// DOM Elements
const inputData = document.querySelector('.input');
const form = document.querySelector('form');
const arrayBlock = document.querySelector('.array');
const setBlock = document.querySelector('.set');

let array = [];
let set = new Set();

inputData.value = getRandomEmoticon(0, 6);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  array.push(inputData.value);
  set.add(inputData.value);

  arrayBlock.textContent = `Типовий Array: [ ${array} ]`;
  let setContent = [...set];

  setBlock.textContent = `Типовий Set: [ ${setContent} ]`;

  inputData.value = getRandomEmoticon(0, 6);

})




