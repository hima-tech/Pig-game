/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundscores, activePlayer, gameplay;

int();







document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if(gameplay) {
         // 1. random number
   
    var dice1 = Math.floor(Math.random() * 6) + 1;
    
    var dice2 = Math.floor(Math.random() * 6) + 1;   
    // 2. display result
    
document.getElementById('dice-1').style.display = 'block';    
        
document.getElementById('dice-2').style.display = 'block';     

document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';           
 
document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
    
  // html src written the same when called at javascript
    
  
    
    // 3. update the score if it's at 1 not updating
    
    // !==
    
    if (dice1 !== 1 && dice2 !== 1) {
        
    // add score

    roundscores += dice1 + dice2;
        
      
        
    document.querySelector('#current-' + activePlayer).textContent = roundscores;
    } else {
       
        
  nextPlayer();
        
    }
    
    }
    
});



 document.querySelector('.btn-hold').addEventListener('click', function() {
   if (gameplay) {
        // add score to global score 
     
   scores[activePlayer] += roundscores;
 
    // updat the UI
    
     document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
 
     var input = document.querySelector('.set-value').value;
     
     var newscore;
     if (input) {
        newscore = input; 
     } else {
         newscore = 100;
     }
       
     // CHECK if player won the game 
     
     if (scores[activePlayer] >= newscore) {
     
         document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
         document.getElementById('dice-1').style.display = 'none'; 
         document.getElementById('dice-2').style.display = 'none'; 
         document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
         gameplay = false;
     } else {
             
         // next player
            
         nextPlayer(); 
         
         
   }    
 }
 });


document.querySelector('.btn-new').addEventListener('click', int);





// dont repeat yourself method 


function nextPlayer(){
   
    
    // terany operator 
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
             
 // 3lashan yerg3 0 lma yeb2a door el tani
        
    
    roundscores = 0;
    
    // lma yeb2a door el tan
     
        document.querySelector('#current-0').textContent = '0';
        
        document.querySelector('#current-1').textContent = '0';
      
   
    
        document.querySelector('.player-0-panel').classList.toggle('active');
    
        document.querySelector('.player-1-panel').classList.toggle('active')   
    

    
    
     document.getElementById('dice-1').style.display = 'none'; 
     document.getElementById('dice-2').style.display = 'none'; 
 
};



nextPlayer();

function int() {
    
scores = [0,0];

roundscores = 0;

activePlayer = 0;

    
    
gameplay = true;    


document.querySelector('#name-0').textContent = 'Ibrahim';

document.querySelector('#name-1').textContent = 'My Friend';

document.querySelector('#score-0').textContent = '0';

document.querySelector('#score-1').textContent ='0';



document.querySelector('#current-0').textContent = '0';

document.querySelector('#current-1').textContent = '0';






 document.getElementById('dice-1').style.display = 'none'; 
 document.getElementById('dice-2').style.display = 'none'; 

}






