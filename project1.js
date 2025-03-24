function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];

    let output = choices[Math.floor(Math.random() * choices.length)];

    return output;
}

function getHumanChoice() {
    let decision = prompt('What is your decision?');
    return decision;
}

function playRound(humanSelect, computerSelect){
    if (humanSelect === computerSelect) {
        return ("It's a tie!");
    }

    else if (humanSelect == 'rock' && computerSelect == 'scissors'){
        return ("You win! Rock beats Scissors");
    }

    else if (humanSelect == 'paper' && computerSelect == 'rock'){
        return ("You win! paper beats rock");
    }

    else if (humanSelect == 'scissors' && computerSelect == 'paper'){
        return ("You win! scissors beats paper");
    }

    else {
        return ("You lose, " + computerSelect + " beats " + humanSelect);
    }

}

const humanSelect = getHumanChoice();
const computerSelect = getComputerChoice();


console.log(playRound(humanSelect,computerSelect));

