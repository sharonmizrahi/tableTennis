
let ply1 = document.querySelector('#player1');
let ply2 = document.querySelector('#player2');
let restart = document.querySelector('#restart');
let spanp1 = document.querySelector('#p1');
let spanp2 = document.querySelector('#p2');
let numOfGames = document.querySelector('#gamecounter');
let winscore = 0;
let isGameOver = false;
let p2score = 0;
let p1score = 0;



numOfGames.addEventListener('change',function(){
   winscore = this.value;
})



ply1.addEventListener('click',function(){
  if(!isGameOver){
      p1score += 1;
  }
  if(p1score == winscore){
      isGameOver = true;
      spanp1.classList.add('winner');
      spanp2.classList.add('loser');
  }
  spanp1.textContent = p1score;
})

ply2.addEventListener('click',function(){
   if(!isGameOver){
       p2score += 1;
   }
   if(p2score == winscore){
       isGameOver = true;
       spanp2.classList.add('winner');
       spanp1.classList.add('loser');
   }
   spanp2.textContent = p2score;
})

restart.addEventListener('click',function(){
   isGameOver = false;
   p2score = 0;
   p1score = 0;
   spanp1.textContent = 0;
   spanp2.textContent = 0;
   spanp2.classList.remove('winner','loser');
   spanp1.classList.remove('winner','loser');
})

