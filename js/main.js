var gameActive = 1;
var gameWords = commonWords.filter(function(word){
  return (word.length >= 3);
});

var randMult = gameWords.length;
var goalNum = (Math.floor(randMult*Math.random()));
var goal = gameWords[goalNum];
var goalCheck = goal.split('');
var letterCheck = [''];
var cc = 0;

var blanks = [''];
for (var i = 0; i < goal.length; i++) {
  blanks[i] = ' _ ';
}
var blanksDisplay = blanks.join('');
var deathTimer = 8;

document.querySelector(".deathbox").innerText = deathTimer;
document.querySelector(".guessbox").innerText = blanksDisplay;

window.addEventListener('keyup', function(e){
  var guess = e.key;
  var change = 0;

  if (gameActive === 1) {
    if (letterCheck.indexOf(e.key)===-1 && e.keyCode>=65 && e.keyCode<=90) {
      for (var i = 0; i < goal.length; i++) {
        if (goal[i] === guess) {
          blanks[i] = guess;
          blanksDisplay = blanks.join('');
          document.querySelector(".guessbox").innerText = blanksDisplay;
          change = 1;
        }
      }
      if (change === 0) {
        if (deathTimer<=1) {
          deathTimer = 'YOU LOSE';
          gameActive = 0;
          document.querySelector(".failures").innerText = 'YOU LOSE';
          document.querySelector(".guessbox").innerText = goal;
          document.querySelector(".tries").innerText = '';
        } else if (deathTimer>0) {
          deathTimer--;
          var classcounter = 'wrong' + deathTimer;
          document.body.classList.add(classcounter);
        }
        document.querySelector(".deathbox").innerText = deathTimer;
      }
      if (blanks.join('') === goalCheck.join('')) {
        document.querySelector(".deathbox").innerText = 'YOU WIN!!';
        document.querySelector(".failures").innerText = 'YOU WIN!!';
        document.querySelector(".tries").innerText = '';
        gameActive = 0;
      }
      letterCheck[cc] = e.key;
      cc++;
      document.querySelector('.triesbox').innerText = letterCheck.join('');
    }
    else {
      document.querySelector('.triesbox').innerText = 'try a different letter!';
    }
  }
});
