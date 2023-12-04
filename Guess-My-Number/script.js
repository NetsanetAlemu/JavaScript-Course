'use strict';

let score = 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;


document.querySelector('.check').addEventListener('click', function(){
   const guess = Number(document.querySelector('.guess').value);
   
   if (!guess){
        document.querySelector('.message').textContent = '⛔ No number!';
   } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem';

   } else if (guess > secretNumber) {
    if (score > 1) {
        document.querySelector('.message').textContent = '📈 Too High!';
        score -= 1;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = '💥 You lost the game!'
    }
        
        
   } else if (guess < secretNumber) {
    if (score > 1) {
        document.querySelector('.message').textContent = '📉 Too Low!';
        score -= 1;
        document.querySelector('.score').textContent = score;

    }  else {
        document.querySelector('.message').textContent = '💥 You lost the game!'
    }
    
   }
});

ocument.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.messagee').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});