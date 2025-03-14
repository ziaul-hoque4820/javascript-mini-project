const rockButton = () => {
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'Paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }
    console.log(computerMove);
    let result = '';
    if(computerMove === 'Rock'){
        result = 'tie';
    } else if (computerMove === 'Paper') {
        result = 'You Lose';
    } else if (computerMove === 'Scissors') {
        result = 'You Win';
    }
    alert(`you picked rock. Computer picked ${computerMove}. ${result}.`)
}
const paperButton = () => {
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'Paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }
    console.log(computerMove);
    let result = '';
    if(computerMove === 'Rock'){
        result = 'You Win';
    } else if (computerMove === 'Paper') {
        result = 'tie';
    } else if (computerMove === 'Scissors') {
        result = 'You Lose';
    }
    alert(`you picked Paper. Computer picked ${computerMove}. ${result}.`)
}
const scissorsButton = () => {
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'Paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }
    console.log(computerMove);
    let result = '';
    if(computerMove === 'Rock'){
        result = 'You Lose';
    } else if (computerMove === 'Paper') {
        result = 'You Win';
    } else if (computerMove === 'Scissors') {
        result = 'tie';
    }
    alert(`you picked Scissors. Computer picked ${computerMove}. ${result}.`)
}

