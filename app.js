import { answers, getRandomIndx } from './answers.js';
// import functions and grab DOM elements
const button = document.getElementById('btn');
const answerSpan = document.getElementById('answer');
const resetButton = document.getElementById('reset');
const inputBox = document.getElementById('input-box');

// initialize global state

// set event listeners 
button.addEventListener('click', ()=> { 
    const randomIndx = getRandomIndx(answers.length);
    answerSpan.textContent = answers[randomIndx];
});

resetButton.addEventListener('click', ()=> {
    answerSpan.textContent = 'Answer';
    inputBox.value = '';

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
