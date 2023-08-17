 // Initialize game variables
 let currentTurn = '0';  // 'X' or '0'
 let flag=false; // Indicates if the game is over
 let winsMessage = document.querySelector(".wins");
 let clickBtn = document.querySelectorAll('.click-btn');
// Add click event listeners to each box
 clickBtn.forEach(function(btn, index){
     btn.addEventListener("click", function(){
        // Toggle the turn between 'X' and '0'
         currentTurn == "0"?currentTurn = "X":currentTurn = "0";

         // If the game is over, return
         if(flag){
             return;
         }

        //  set the currentTurn in the boxes
         if(btn.innerHTML == ""){
            btn.innerHTML = currentTurn;
         }

         // Check for a winner
         if(checkWinner()){
             flag = true;
             winsMessage.innerHTML = currentTurn + " is Wins!";
             document.getElementById('winingImg').src = "images/wins.gif";
            //  btn.style.backgroundColor = "aquamarine";
         }else if(checkdraw()){
            winsMessage.innerHTML = "Match is Draw!";
         }

     });
 });



 // Function to check if there's a winner
 let divs = document.querySelector(".btn-wrapper").children;
 function checkWinner(){
        // Define winning combinations
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

     // Function to check for a draw
     function checkdraw(){
        for (let i = 0; i < divs.length; i++) {
          if(divs[i].innerHTML === ""){
            return false; // At least one box is empty, not a draw
          }
            
        }
        return true; // All boxes are filled, it's a draw
     }


// Add click event listener to the reset button
 let resetBtn = document.getElementById("resetBtn");

 resetBtn.addEventListener("click", function(){
     location.reload();
 });
 
