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
// console.log(getComputerChoice());

// delcare a function that will ask player to make a selection
function playerChoice() {
    // ask for user input 
    let choice = prompt("Please type in a choice: rock, paper, or scissor?");
       // correct the input to all lower case no spaces
    choice = choice.toLowerCase();
 
    return choice;
}
// console.log(playerChoice());

