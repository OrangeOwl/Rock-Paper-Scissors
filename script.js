// grabbing all the DOM elements I'm going to manipulate
// Scores and results text
const scoreElement = document.getElementById("score-id")
const resultsElement = document.getElementById("results-id")
const resultsElement2 = document.getElementById("results-id2")
const selectionPlayerElement = document.getElementById("choices_player")
const selectionComElement = document.getElementById("choices_com")

// buttons
const rockbtn = document.getElementById("rock")
const paperbtn = document.getElementById("paper")
const scissorsbtn = document.getElementById("scissors")

let score = 0;

// Random function for Computer Play
function random(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function startRound() {
  // Adding event listeners to each button, executing their function and removing the listener
  rockbtn.addEventListener("click", function() {
    playRound("rock", computerPlay());
    rockbtn.removeEventListener("click", function(){})
  });
  paperbtn.addEventListener("click", function() {
    playRound("paper", computerPlay());
    rockbtn.removeEventListener("click", function(){})
  });
  scissorsbtn.addEventListener("click", function() {
    playRound("scissors", computerPlay());
    rockbtn.removeEventListener("click", function(){})
  });
}

// Computer play: decision is randomized
function computerPlay() {
  const items = ['rock', 'paper', 'scissors'];
  selection = random(items);
  return selection
}

function playRound(playerSelection, computerSelection) {
  selectionPlayerElement.textContent = "You chose: " + playerSelection;
  selectionComElement.textContent = "Computer chose: " + computerSelection;
  // If statement checks all win conditions, if they aren't met you lose
  if (playerSelection == "rock" && computerSelection == "scissors") {
    resultsElement.textContent = "You Win! Plus one point";
    score++;
    score_checker();
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    resultsElement.textContent = "You Win! Plus one point";
    score++;
    score_checker();
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    resultsElement.textContent = "You Win! Plus one point";
    score++;
    score_checker();
  } else if (playerSelection == computerSelection) {
    resultsElement.textContent = "TIE!";
    score_checker();
  } else {
    resultsElement.textContent = "You Lose! Minus one point";
    score--;
    score_checker();
  }
}

function score_checker() {
  // display the score
  scoreElement.textContent = score;
  // checking the scores value and displaying a message based on it
  if (score > 5) {
    resultsElement2.textContent = "You got over 5 points! Congrats!";
  } else if (score < 0) {
    resultsElement2.textContent = "Oh no you have Negative Points!";
  } else {
    resultsElement2.textContent = "";
    return
  }
}

// Starting the game
startRound()
