let User1Total = 0;
let User2Total = 0;

// if ((currentPlayer = 1)) {
// 	rollText2.textContent = "PLAYER ONE IS ROLLING";
// } else if ((currentPlayer = 2)) {
// 	rollText1.textContent = "PLAYER TWO IS ROLLING";
// }


const diceImage1 = document.getElementById("dice1")
const diceImage2 = document.getElementById("dice2")
const newPlayer1 = document.getElementById("newPlayer1")
const newPlayer2 = document.getElementById ("newPlayer2")


let roll1 = document.getElementById("roll1")
let roll2 = document.getElementById("roll2")

let currentPlayer = 1; 

// New game button
const newGame = document.getElementById("newgame")
newGame.addEventListener ("click", () => 
{ 
    window.location.reload();
});



// Switch Player Button 
newPlayer1.addEventListener("click", () => {
    if (currentPlayer == 1){ 
        currentPlayer = 2
        roll2.style.display = "block"
        roll1.style.display = "none" }})

newPlayer2.addEventListener("click", () =>{ 
    if (currentPlayer == 2){ 
        currentPlayer = 1 
        roll2.style.display = "none"
        roll1.style.display = "block"}
})

roll1.addEventListener("click", () => {  
    // Generate a number
    if (currentPlayer ==1)
    {
    let diceRolled = Math.floor(Math.random()*6)+1;
    // Generate dice image 
    const diceImage1 = 'images/' + diceRolled + '.png';
    // Insert dice image
    document.querySelectorAll('img')[0].setAttribute('src', diceImage1);

    let User1score = User1Total += diceRolled;
    document.getElementById("score").innerHTML = `Player 1 score: ${User1score}`
    
    // Create win/lose scenario 
    if (User1score >=20){
        document.getElementById("winLose").textContent = "Player 1 wins!"
        User1Total = 0;
        document.getElementById("score").textContent ="Player 1 scored more than 20"
        document.getElementById ("roll").style.display = "none"
      
    }
    else if (diceRolled ==1){ 
        document.getElementById("winLose").textContent = "Player 1 rolled 1! Player 1 loses!"
        document.getElementById("score").textContent = ""
        User1Total = 0;
        document.getElementById ("roll").style.display = "none"
    }
    } 
    
}
);



roll2.addEventListener("click", () => {  
    // Play a sound - slight delay - so maybe see if can cycle images /delay image or something
    // document.getElementById("sound").play()
    // check player
    // Generate a number
    if (currentPlayer ==2){
            let diceRolled = Math.floor(Math.random()*6)+1;
            // Generate dice image 
            const diceImage2 = 'images/' + diceRolled + '.png';
            // Insert dice image
            document.querySelectorAll('img')[1].setAttribute('src', diceImage2);
            let User2score = User2Total += diceRolled;
            document.getElementById("score2").innerHTML = `Player 2 score: ${User2score}`
            
            // Create win/lose scenario 
            if (User2score >=20){
                document.getElementById("winLose2").textContent = "Player 2 wins!"
                document.getElementById("score2").textContent ="Player 2 scored more than 20";
                document.getElementById ("roll2").style.display = "none"
                User2Total = 0;
              
            }
            else if (diceRolled ==1){ 
                document.getElementById("winLose2").textContent = "Player 2 rolled 1! Player 2 loses!"
                document.getElementById("score2").textContent = ""
                document.getElementById ("roll2").style.display = "none"
                User2Total = 0;
            } 
    }
})