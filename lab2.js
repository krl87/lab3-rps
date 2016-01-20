

// User choice
var userChoice = prompt("Choose your weapon: Rock, Paper, Scissors");

//Computer choice
var computerChoice = Math.random();

if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

//compare user choice vs computer choice
var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        return "The result is a tie!";
    }
    else if(choice1 === "rock") {
        if(choice2 === "scissors") {
            //rock wins
            return "rock wins";   
        }
        else {
            //paper wins
            return "paper wins";
        }
    }
    else if(choice1 === "paper") {
        if(choice2 === "rock") {
            //paper wins
            return "paper wins";
        }
        else {
            //scissors wins
            return "scissors win";
        }
    }
    else if(choice1 === "scissors") {
        if(choice2 === "rock") {
            //rock wins
            return "rock wins";
        }
        else {
            //scissors wins
            return "scissors win";
        }
    }
}
//run the compare function
compare(userChoice, computerChoice)