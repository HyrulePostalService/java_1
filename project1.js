



getHumanChoice();



function getComputerChoice() {
    let x = Math.floor((Math.random() * 3) + 1);

    if (x == 1) {
        x = 'Rock!';
    }

    else if (x == 2) {
        x = 'Paper!'
    }

    else if (x == 3){
        x = 'Scissors!'
    }
        
    console.log(x);
}

getComputerChoice();

function getHumanChoice() {
    let input = prompt('What is your choice?');

    console.log(input);

}

function playRound(getHumanChoice, getComputerChoice){
    if (getHumanChoice == 'rock' && getComputerChoice == 'Paper!'){
        console.log('You lose this round!');
    }

    else if (getHumanChoice == 'paper' && getComputerChoice == 'Scissors!'){
        console.log('You lose this round!');
    }

    else if (getHumanChoice == 'scissors' && getComputerChoice == 'Rock!'){
        console.log('You lose this round!');
    }

}

playRound(getComputerChoice, getComputerChoice);