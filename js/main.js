var gameWords = commonWords.filter(function(word){
  return (word.length >= 3);
});

var randMult = gameWords.length;
var goalNum = (Math.floor(randMult*Math.random()));
var goal = gameWords[goalNum];

console.log(goal);

var blanks = [''];
for (var i = 0; i < goal.length; i++) {
  blanks[i] = '_ ';
}
var blanksDisplay = blanks.join('');

var deathTimer = 8;
document.querySelector(".deathbox").innerText = deathTimer;
document.querySelector(".guessbox").innerText = blanksDisplay;

window.addEventListener('keyup', function(e){
  var guess = e.key;
  var change = 0;
  for (var i = 0; i < goal.length; i++) {
    if (goal[i] === e.key) {
      console.log(e.key);
      blanks[i] = e.key;
      blanksDisplay = blanks.join('');
      document.querySelector(".guessbox").innerText = blanksDisplay;
      change = 1;
    }
  }
  if (change === 0) {
    if (deathTimer<=0) {
      deathTimer = 'YOU LOSE';
    } else if (deathTimer>0) {
      deathTimer--;
    }
    document.querySelector(".deathbox").innerText = deathTimer;
  }

});
