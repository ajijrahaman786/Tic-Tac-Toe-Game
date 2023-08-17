 // set default turn
 let currentTurn = '0';
 // set flag for when wins X or 0 after then others boxes disable
 let flag=false;
 // wins message for winner
 let winsMessage = document.querySelector(".wins");
  // get in in the boxes and adding the event
 let clickBtn = document.querySelectorAll('.click-btn');
 // run loop for each boxes
 clickBtn.forEach(function(btn, index){
     btn.addEventListener("click", function(){
         currentTurn == "0"?currentTurn = "X":currentTurn = "0";

         if(flag){
             return;
         }

         if(btn.innerHTML == ""){
             btn.innerHTML = currentTurn;
         }

         // check winner
         if(checkWinner()){
             // alert("YAYA");
             flag=true;
             winsMessage.innerHTML = "Wins! "+ currentTurn;
             document.getElementById('winingImg').src = "images/wins.gif";
         }

     });
 });



 // checking X or 0 are same line
 let divs = document.querySelector(".btn-wrapper").children;
 function checkWinner(){
         const winningCombos = [
         [0,3,6],[1,4,7],[2,5,8],
         [0,1,2],[3,4,5],[6,7,8],
         [0,4,8],[2,4,6]
         ]

         for(let i = 0; i<winningCombos.length; i++){

             let [a,b,c] = winningCombos[i];

             if((divs[a].innerHTML && divs[b].innerHTML && divs[c].innerHTML) && (divs[a].innerHTML==divs[b].innerHTML && divs[a].innerHTML == divs[c].innerHTML)){

                return true;
             }
         }
         return false;

     }



 // reset button

 let resetBtn = document.getElementById("resetBtn");

 resetBtn.addEventListener("click", function(){
     location.reload();
 });
 
