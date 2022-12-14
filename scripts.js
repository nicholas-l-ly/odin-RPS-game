// this is the code for our rock paper scissors game
// declare a function that will get computer choice for rock paper scissor
function getComputerChoice() {
    let max = 3; // this is the most amount of choices we can have 
    let choice;
    // use some sort of random number generator and depending on the number it will output a specified choice
    switch ( Math.floor(Math.random()*max)){ 
        case 0:
            choice = "rock";
            break;
        case 1: 
            choice = "paper";
            break;
        case 2: 
            choice = "scissor";
    }
    // this function will return either rock paper scissor
    return choice;
}

// delcare a function that will ask player to make a selection
function getplayerChoice() {
    // ask for user input 
    let choice = prompt("Please type in a choice: rock, paper, or scissor?");
       // correct the input to all lower case no spaces
    choice = choice.toLowerCase();
 
    return choice;
}
// declare a function playRound that takes a players choice and computer choice and outputs a winner
// inputs: player and computer selections
function playRound (playerSelection,computerSelection){
    // declare a variable to store the winner and loser
    let winner;
    let loser;
    // make a switch case depending on wha tthe player selection is
    // make a swithc case for rock
    // make a switch case for choosing paper
    // make a switch case for choosing scissor
    switch (playerSelection){
        case "rock":
            switch(computerSelection){
                case "rock":
                    winner = "Tie";
                    loser = "Tie";
                    break;
                case "paper":
                    winner ="Computer";
                    loser ="Player";
                    break;
                case "scissor":
                    winner = "Player";
                    loser = "Computer";
            }
            break;
        case "paper":
            switch(computerSelection){
                case "rock":
                    winner = "Player";
                    loser = "Computer";
                    break;
                case "paper":
                    winner ="Tie";
                    loser ="Tie";
                    break;
                case "scissor":
                    winner = "Computer";
                    loser = "Player";
            }
            break;
        case "scissor":
            switch(computerSelection){
                case "rock":
                    winner = "Computer";
                    loser = "Player";
                    break;
                case "paper":
                    winner ="Player";
                    loser ="Computer";
                    break;
                case "scissor":
                    winner = "Tie";
                    loser = "Tie";
            }
        }
    //create conditional to declare winner 
    // output: string with winner
    // if (winner === "Tie" && loser === "Tie") {
    //     return console.log("We have a tie!")
    // } else {
    //     return console.log("Winner is: " + winner + " Loser is: " +loser);
    // }

    //refactor the return to return the winner
    return winner
    
}


// declare a variable that stored the computer selection
// let computerSelection = getComputerChoice();
// console.log(computerSelection);
// declare a variable that stores players choice;
// let playerSelection= getplayerChoice();
// console.log(playerSelection);
// play a round
// playRound(playerSelection,computerSelection);

//declare a function game that will play round up the 5 rounds and keep score
function game (){
    // declare variables to store scores and ties
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;


    // create a for loop to iterate through the game 5 times 
    for (let i = 0; i <5; i++){ // increment scores based on winner or ties
        // get selection for computer and player
        let playerSelection = getplayerChoice();
        console.log("You chose: " + playerSelection)
        let computerSelection = getComputerChoice();
        console.log("Computer chose: " + computerSelection)
        const winner = playRound(playerSelection, computerSelection);
        console.log("The winner is: " + winner);
        if (winner === "Tie") {
            tieScore++;
        } else if (winner === "Player") {
            playerScore++;
        } else {
            computerScore++;
        }
    }
    // console log results
    console.log("Results: Player score: " + playerScore + " Computer score: " + computerScore + " Ties: " + tieScore);
}
game();



// can refactor later to make things cleaner and less reptitive 

