function playerChoice() {
    input = prompt('what is your decision?');
    console.log(input);
    
}



const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    
    const random = Math.floor(Math.random() * choices.length);
    console.log(choices[random]);
}


function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log('Its a tie');
        
    }

    else if (humanChoice === 'rock' && computerChoice === 'paper')

    {
            console.log('you lose');
    }

    else if (humanChoice === 'paper' && computerChoice === 'scissors'){
        console.log('you lose');
    }

    else if (humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log('you lose');
    }

    else {
        console.log('you win');
    }
}

const humanChoice = playerChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);