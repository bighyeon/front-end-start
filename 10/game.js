var square = document.querySelector('.square');
var game = document. querySelector('.game');
var score = document.querySelector('.score');
var life = document.querySelector('.life');
var gamewidith = 600;
var squarewidth = 30;

var scores = 0;
var lifes = 4;
function move() {
  
  var x = getRandomInt(gamewidith - squarewidth);
  var y = getRandomInt(gamewidith - squarewidth);

  square.style.left = x + 'px';
  square.style.top = y + 'px';
}


function getRandomInt(max) {
     return Math.floor(Math.random() *max) ;
}


game.addEventListener('click',function(){

    lifedown();

})
square.addEventListener('click',function(){
    move();
    scoreup();
    event.stopPropagation(); 
    
})

function scoreup() {
    scores++;
    score.innerHTML = '점수:'+ scores;
    
}
function lifedown() {
    lifes--;
    life.innerHTML = '생명:'+lifes;
    
}

scoreup();
lifedown();