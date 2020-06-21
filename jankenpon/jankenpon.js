  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
  return userInput;
} else {
  console.log('Error!'); }
}

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It is a tie!';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won!'
    } else {
      return 'You won!'
    }
  }

   if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won!'
    } else {
      return 'You won!'
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won!'
    } else {
      return 'You won!'
    }
  }
}

const playGame = () => {
  let userChoice = getUserChoice('paper');
  let computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame()
