let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");
const comp = document.querySelector("#comp-score");
const usr = document.querySelector("#user-score");
let reset_btn = document.querySelector("#reset-btn"); 

const geComputerChoice = () =>{
    const options = ["rock", "paper","scissors"];
    const randindx = Math.floor(Math.random()*3);
    return options[randindx];
}
const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game was Draw, Play Again";
    msg.style.backgroundColor = "brown";

}
const board = (userScore,compScore) => {
    comp.innerText = compScore;
    usr.innerText = userScore;
}
const showWinner = (userwin) => {
    
    if(userwin){
        console.log("You win");
        msg.innerText = "You Won";
        msg.style.backgroundColor = "green";
        userScore++;
    }  else {
        console.log("You lose");
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
        compScore++;
    } 
    board(userScore,compScore);
}
const choices = document.querySelectorAll(".choice");
const playGame = (userChoice)=>{
    //add class to show users choice
    console.log("user choice = ",userChoice);
    const compChoice = geComputerChoice();
    console.log("Comp choice = ",compChoice);
    if(userChoice === compChoice){
        // draw game 
        drawGame();
    }else{
        let userwin = true;
        if(userChoice === "rock"){
           userwin =  compChoice === "paper"?false:true;

        }else if(userChoice === "paper"){
            userwin = compChoice==="scissors"? false : true ;
        }else{
            userwin = compChoice==="rock" ? false : true ;
        }
        showWinner(userwin);
    }
    
}


choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        
        const userChoice = choice.getAttribute("id");
        console.log("clicked ",userChoice);
        playGame(userChoice);
    });
});



const reset_func = () => {
    compScore = 0;
    userScore = 0;
    usr.innerText = 0;
    comp.innerText = 0;
}

reset_btn.addEventListener("click", reset_func);