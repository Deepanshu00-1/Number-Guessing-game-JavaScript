"Use strict";

let correctNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

// document.querySelector(".secretNumber").textContent = correctNumber;

document.querySelector(".checkNumber").addEventListener("click", function () {
  const guess = document.querySelector(".selectNumber").value;
  Number[document.querySelector(".selectNumber").value];  
    // when player wins
  if(guess == correctNumber) {
    document.querySelector(".secretNumber").textContent = correctNumber;
    displayMessage('correct number!');
    // document.querySelector('.highscore').textContent = score;

    document.querySelector('body').style.backgroundColor = '#49d449';
    document.querySelector('.secretNumber').style.width = '200px';

    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when there is no input 
  else if (!guess) {
    displayMessage("No number!");
  }

  // when guess is wrong
  else if(guess !== correctNumber){
    if(score>1){
    document.querySelector('.message').textContent =
    guess > correctNumber ? 'too high':'too low';
    score--;
    document.querySelector('.score').textContent = score;
    }else{
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// resetting the game
// var correctNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.restart').addEventListener('click', function(){
  correctNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".selectNumber").value =  '';
  displayMessage('start guessing...');
  document.querySelector('.score').textContent = score;
  // document.querySelector('.highscore').textContent = 0;
  document.querySelector('body').style.backgroundColor = '#332f2a';
  document.querySelector(".secretNumber").textContent = '?';
  document.querySelector('.secretNumber').style.width = '150px';
});


// when guess is too low
  /*if (guess < correctNumber) {
    if(score > 1){
    document.querySelector(".message").textContent = "too low!";
    score--;
    document.querySelector('.score').textContent = score;
    }else{
        document.querySelector(".message").textContent = "you lost the game!";
        document.querySelector(".score").textContent = 0;
    }
    // when guess is too high
  } else if (guess > correctNumber) {
    if(score>1){
    document.querySelector(".message").textContent = "too high!";
    score--;
    document.querySelector('.score').textContent = score;
    }else{
        document.querySelector(".message").textContent = "you lost the game!";
        document.querySelector(".score").textContent =  0;
    }*/