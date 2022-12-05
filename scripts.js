// this is the code for our rock paper scissors game


// declare a function that will get computer choice for rock paper scissor
function getComputerChoice{
    let max = 3; // this is the most amount of choices we can have 
    let choice;
    // use some sort of random number generator and depending on the number it will output a specified choice
    switch ( Math.floor(Math.random()*max)){ 
        case 0:
            choice = "Rock";
            break;
        case 1: 
            choice = "Paper";
            break;
        case 2: 
            choice = "Scissor";
    }
    // this function will return either rock paper scissor
    return console.log(choice);
}

