// this is the code for our rock paper scissors game
// declare a function that will get computer choice for rock paper scissor
let playerScore = 0;
let computerScore = 0;


const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#comp-score");
computer.textContent = `Computer Score: ${computerScore}`;

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

// declare a function playRound that takes a players choice and computer choice and outputs a winner
// inputs: player and computer selections
const btn = document.querySelector('.selections');
btn.addEventListener('click', e => {
    let target = e.target;

    console.log('winner: '+ playRound(target.innerHTML))
});


function playRound (playerSelection){
    // generate player selection
    console.log("player: "+ playerSelection)

    // generate computer slection
    computerSelection = getComputerChoice();
    console.log("comp: " + computerSelection)
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

        if (winner === 'Player'){
            playerScore++;
            console.log('player wins! player score: ' + playerScore + ' comp score: ' +computerScore)
        }
        if (winner === 'Computer'){
            computerScore++;
            console.log('computer wins! computer score: ' + computerScore + ' player score: ' + playerScore)
            
        }

    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;  
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
// game();



// can refacto later to make things cleaner and less reptitive 
// Below will be code to practice DOM manipulation and events, to be transferred to a separate file later.
// Add the following elements to the container using ONLY JavaScript and the DOM methods shown above.



// const container = document.querySelector('#container');
// // a <p> with red text that says “Hey I’m red!”
// const paragraph = document.createElement('p');
// paragraph.textContent = "Hello World!";
// paragraph.style.color = 'red'
// container.appendChild(paragraph);

// // an <h3> with blue text that says “I’m a blue h3!”
// const header3 = document.createElement('h3');
// header3.style.color = 'blue';
// header3.textContent = "I'm a blue h3!"
// container.appendChild(header3);

// // a <div> with a black border and pink background color with the following elements inside of it:


// // another <h1> that says “I’m in a div”
// const header1 = document.createElement('h1');
// header1.textContent = " I'm in a div";
// div.appendChild(header1)
// // a <p> that says “ME TOO!”
// paragraphTwo = document.createElement('p');
// paragraphTwo.textContent = "ME TOO!";
// div.appendChild(paragraphTwo);

// // Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

// container.appendChild(div);


