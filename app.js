let   rollbutton=document.querySelector("#rollbutton");
let   resetbutton=document.querySelector("#resetbutton");
let   dicebluespan=document.querySelector("#dicebluespan");
let   diceredspan =document.querySelector("#diceredspan");
let   playeronedicenumberstrong=document.querySelector("#playeronedicenumberstrong");
let   playertwodicenumberstrong=document.querySelector("#playertwodicenumberstrong");
let   playeronescoreboxh3=document.querySelector("#playeronescoreboxh3");
let   playertwoscoreboxh3=document.querySelector("#playertwoscoreboxh3");
let   gamestatush2=document.querySelector("#gamestatush2");
let   gamestatusp=document.querySelector("#gamestatusp");
let   historysection=document.querySelector("#historysection");
      let player1score=0;
      let player2score=0;

     
rollbutton.addEventListener("click",function(){
    let player1dice=Math.floor(Math.random() * 6 + 1);
    let player2dice=Math.floor(Math.random() * 6 + 1);
    dicebluespan.textContent=player1dice;
    diceredspan.textContent=player2dice;
    playeronedicenumberstrong.textContent=player1dice;
    playertwodicenumberstrong.textContent=player2dice;
    if(player1dice>player2dice){
        player1score++;
        playeronescoreboxh3.textContent=player1score;
        gamestatush2.textContent="Player 1 Wins!";
        gamestatusp.textContent="Player 1 rolled a higher number than Player 2.";
    } else if(player2dice>player1dice){
        player2score++;
        playertwoscoreboxh3.textContent=player2score;
        gamestatush2.textContent="Player 2 Wins!";
        gamestatusp.textContent="Player 2 rolled a higher number than Player 1.";
    } else {
        gamestatush2.textContent="It's a Draw!";
        gamestatusp.textContent="Both players rolled the same number.";
    }
})
resetbutton.addEventListener("click",function(){
    dicebluespan.textContent="0";
    diceredspan.textContent="0";
    playeronedicenumberstrong.textContent="";
    playertwodicenumberstrong.textContent="";
    playeronescoreboxh3.textContent="0";
    playertwoscoreboxh3.textContent="0";
    gamestatush2.textContent="Ready to Play?";
    gamestatusp.textContent="Roll the dice and test your luck!";
});
