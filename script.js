// Function/eventlistner should detect which picture 
let playerChoice;
let computerChoice;
let playerWins = 0;
let computerWins = 0;
let resetButton;
function computerCardChoice () {
        number = Math.floor(Math.random() * 3) + 1;
        console.log(`${number}`);
       if (number === 1) {
            computerChoice = "Shark"
            if (document.contains(document.querySelector(".compSharkChoice"))) {
                document.querySelector(".compSharkChoice").remove();
            }   else if (document.contains(document.querySelector(".compTurtleChoice"))){
                document.querySelector(".compTurtleChoice").remove();
            } else if (document.contains(document.querySelector(".compKelpChoice"))) {
                document.querySelector(".compKelpChoice").remove();
            }
            let computerCard = document.createElement('img');
            computerCard.setAttribute("src", "./images/shark-2317422_640.png");
            computerCard.setAttribute("class", "compSharkChoice");
            document.querySelector('.computerCard').appendChild(computerCard);
        } else if (number === 2) {
            computerChoice = "Turtle"
            if (document.contains(document.querySelector(".compSharkChoice"))) {
                document.querySelector(".compSharkChoice").remove();
            }   else if (document.contains(document.querySelector(".compTurtleChoice"))){
                document.querySelector(".compTurtleChoice").remove();
            } else if (document.contains(document.querySelector(".compKelpChoice"))) {
                document.querySelector(".compKelpChoice").remove();
            }
            let computerCard = document.createElement('img');
            computerCard.setAttribute("src", "./images/amphibian-1297728_640.png");
            computerCard.setAttribute("class", "compTurtleChoice");
            document.querySelector('.computerCard').appendChild(computerCard);
        } else if (number === 3) {
            computerChoice = "Kelp"
            if (document.contains(document.querySelector(".compSharkChoice"))) {
                document.querySelector(".compSharkChoice").remove();
            }   else if (document.contains(document.querySelector(".compTurtleChoice"))){
                document.querySelector(".compTurtleChoice").remove();
            } else if (document.contains(document.querySelector(".compKelpChoice"))) {
                document.querySelector(".compKelpChoice").remove();
            }
            let computerCard = document.createElement('img');
            computerCard.setAttribute("src", "./images/seaweed-32720_1280.png");
            computerCard.setAttribute("class", "compKelpChoice");
            document.querySelector('.computerCard').appendChild(computerCard);
        }
        return computerChoice;
}

function sharkCardChoice() {
    if (document.contains(document.querySelector(".sharkImgChoice"))) {
        document.querySelector(".sharkImgChoice").remove();
    }   else if (document.contains(document.querySelector(".turtleImgChoice"))){
        document.querySelector(".turtleImgChoice").remove();
    } else if (document.contains(document.querySelector(".kelpImgChoice"))) {
        document.querySelector(".kelpImgChoice").remove();
    }
    
    let playerCard = document.createElement("img");
    playerCard.setAttribute("src", "./images/shark-2317422_640.png");
    playerCard.setAttribute("class", "sharkImgChoice");
    document.querySelector('.playerCard').appendChild(playerCard);
    playerChoice = "Shark";
    return playerChoice;

}

function turtleCardChoice() {
    if (document.contains(document.querySelector(".sharkImgChoice"))) {
        document.querySelector(".sharkImgChoice").remove();
    }   else if (document.contains(document.querySelector(".turtleImgChoice"))){
        document.querySelector(".turtleImgChoice").remove();
    } else if (document.contains(document.querySelector(".kelpImgChoice"))) {
        document.querySelector(".kelpImgChoice").remove();
    }
    let playerCard = document.createElement("img");
    playerCard.setAttribute("src", "./images/amphibian-1297728_640.png");
    playerCard.setAttribute("class", "turtleImgChoice");
    document.querySelector('.playerCard').appendChild(playerCard);
    playerChoice = "Turtle";
    return playerChoice;
 }

 function kelpCardChoice() {
    if (document.contains(document.querySelector(".sharkImgChoice"))) {
        document.querySelector(".sharkImgChoice").remove();
    }   else if (document.contains(document.querySelector(".turtleImgChoice"))){
        document.querySelector(".turtleImgChoice").remove();
    }  else if (document.contains(document.querySelector(".kelpImgChoice"))) {
        document.querySelector(".kelpImgChoice").remove();
    }
    let playerCard = document.createElement("img");
    playerCard.setAttribute("src", "./images/seaweed-32720_1280.png");
    playerCard.setAttribute("class", "kelpImgChoice");
    document.querySelector('.playerCard').appendChild(playerCard);
    playerChoice = "Kelp";
    return playerChoice;
 }


 function playRound (playerChoice, computerChoice) {
    if ( computerChoice === playerChoice) {
        if (document.contains(document.querySelector(".resultTie"))) {
            document.querySelector(".resultTie").remove();
        } else if (document.contains(document.querySelector('.resultLose'))) {
            document.querySelector(".resultLose").remove();
        } else if (document.contains(document.querySelector('.resultWin'))) {
            document.querySelector(".resultWin").remove();
        } 
            result = document.createElement("p");
            text = document.createTextNode("It's a tie!");
            result.appendChild(text);
            result.setAttribute("class", "resultTie");
            document.querySelector('.result').appendChild(result);
        } else if (computerChoice === 'Shark' && playerChoice === 'Turtle') {
            if (document.contains(document.querySelector(".resultTie"))) {
                document.querySelector(".resultTie").remove();
            } else if (document.contains(document.querySelector('.resultLose'))) {
                document.querySelector(".resultLose").remove();
            } else if (document.contains(document.querySelector('.resultWin'))) {
                document.querySelector(".resultWin").remove();
            } 
                ++computerWins;
                result = document.createElement("p");
                text = document.createTextNode("Sorry, you lose!")
                result.appendChild(text);
                result.setAttribute("class", "resultLose");
                document.querySelector('.result').appendChild(result);
                if (document.contains(document.querySelector('.computerWinCount'))){
                    document.querySelector('.computerWinCount').remove();
                }
                computerWinCount = document.createElement("p");
                computerWinCountText = document.createTextNode(`${computerWins}`);
                computerWinCount.appendChild(computerWinCountText);
                computerWinCount.setAttribute("class", "computerWinCount");
                document.querySelector('.computerCounter').appendChild(computerWinCount);
                return computerWins;

        } else if (computerChoice === 'Turtle' && playerChoice === 'Kelp') {
            if (document.contains(document.querySelector(".resultTie"))) {
                document.querySelector(".resultTie").remove();
            } else if (document.contains(document.querySelector('.resultLose'))) {
                document.querySelector(".resultLose").remove();
            } else if (document.contains(document.querySelector('.resultWin'))) {
                document.querySelector(".resultWin").remove();
            } 
                ++computerWins;
                result = document.createElement("p");
                text = document.createTextNode("Sorry, you lose!")
                result.appendChild(text);
                result.setAttribute("class", "resultLose")
                document.querySelector('.result').appendChild(result);
                if (document.contains(document.querySelector('.computerWinCount'))){
                    document.querySelector('.computerWinCount').remove();
                }
                computerWinCount = document.createElement("p");
                computerWinCountText = document.createTextNode(`${computerWins}`);
                computerWinCount.appendChild(computerWinCountText);
                computerWinCount.setAttribute("class", "computerWinCount");
                document.querySelector('.computerCounter').appendChild(computerWinCount);
                return computerWins;
        
        } else if (computerChoice === 'Kelp' && playerChoice === 'Shark') {
            if (document.contains(document.querySelector(".resultTie"))) {
                document.querySelector(".resultTie").remove();
            } else if (document.contains(document.querySelector('.resultLose'))) {
                document.querySelector(".resultLose").remove();
            } else if (document.contains(document.querySelector('.resultWin'))) {
                document.querySelector(".resultWin").remove();
            } 
                ++computerWins;
                result = document.createElement("p");
                text = document.createTextNode("Sorry, you lose!")
                result.appendChild(text);
                result.setAttribute("class", "resultLose")
                document.querySelector('.result').appendChild(result);
                if (document.contains(document.querySelector('.computerWinCount'))){
                    document.querySelector('.computerWinCount').remove();
                }
                computerWinCount = document.createElement("p");
                computerWinCountText = document.createTextNode(`${computerWins}`);
                computerWinCount.appendChild(computerWinCountText);
                computerWinCount.setAttribute("class", "computerWinCount");
                document.querySelector('.computerCounter').appendChild(computerWinCount);
                return computerWins;
            
        } else if (computerChoice === 'Shark' && playerChoice === 'Kelp') {
            if (document.contains(document.querySelector(".resultTie"))) {
                document.querySelector(".resultTie").remove();
            } else if (document.contains(document.querySelector('.resultLose'))) {
                document.querySelector(".resultLose").remove();
            } else if (document.contains(document.querySelector('.resultWin'))) {
                document.querySelector(".resultWin").remove();
            } 
                ++playerWins;
                result = document.createElement("p");
                text = document.createTextNode("Fantastic, you win!")
                result.appendChild(text);
                result.setAttribute("class", "resultWin")
                document.querySelector('.result').appendChild(result);
                if (document.contains(document.querySelector('.playerWinCount'))){
                    document.querySelector('.playerWinCount').remove();
                }
                playerWinCount = document.createElement("p");
                playerWinCountText = document.createTextNode(`${playerWins}`);
                playerWinCount.appendChild(playerWinCountText);
                playerWinCount.setAttribute("class", "playerWinCount");
                document.querySelector('.playerCounter').appendChild(playerWinCount);
                return playerWins;
            
        } else if (computerChoice === 'Turtle' && playerChoice === 'Shark') {
            if (document.contains(document.querySelector(".resultTie"))) {
                document.querySelector(".resultTie").remove();
            } else if (document.contains(document.querySelector('.resultLose'))) {
                document.querySelector(".resultLose").remove();
            } else if (document.contains(document.querySelector('.resultWin'))) {
                document.querySelector(".resultWin").remove();
            } 
                ++playerWins;
                result = document.createElement("p");
                text = document.createTextNode("Fantastic, you win!")
                result.appendChild(text);
                result.setAttribute("class", "resultWin")
                document.querySelector('.result').appendChild(result);
                if (document.contains(document.querySelector('.playerWinCount'))){
                    document.querySelector('.playerWinCount').remove();
                }
                playerWinCount = document.createElement("p");
                playerWinCountText = document.createTextNode(`${playerWins}`);
                playerWinCount.appendChild(playerWinCountText);
                playerWinCount.setAttribute("class", "playerWinCount");
                document.querySelector('.playerCounter').appendChild(playerWinCount);
                return playerWins;
                
        } else if (computerChoice === 'Kelp' && playerChoice === 'Turtle') {
            if (document.contains(document.querySelector(".resultTie"))) {
                document.querySelector(".resultTie").remove();
            } else if (document.contains(document.querySelector('.resultLose'))) {
                document.querySelector(".resultLose").remove();
            } else if (document.contains(document.querySelector('.resultWin'))) {
                document.querySelector(".resultWin").remove();
            } 
                ++playerWins;
                result = document.createElement("p");
                text = document.createTextNode("Fantastic, you win!")
                result.appendChild(text);
                result.setAttribute("class", "resultWin")
                document.querySelector('.result').appendChild(result);
                if (document.contains(document.querySelector('.playerWinCount'))){
                    document.querySelector('.playerWinCount').remove();
                }
                playerWinCount = document.createElement("p");
                playerWinCountText = document.createTextNode(`${playerWins}`);
                playerWinCount.appendChild(playerWinCountText);
                playerWinCount.setAttribute("class", "playerWinCount");
                document.querySelector('.playerCounter').appendChild(playerWinCount);
                return playerWins;
            
        }
     
    }

    function gameOver (playerWins, computerWins) {
        if (playerWins === 5) {
            if (document.contains(document.querySelector(".resultTie"))) {
            document.querySelector(".resultTie").remove();
            } else if (document.contains(document.querySelector('.resultLose'))) {
                document.querySelector(".resultLose").remove();
            } else if (document.contains(document.querySelector('.resultWin'))) {
                document.querySelector(".resultWin").remove();
            } 
                result = document.createElement("p");
                text = document.createTextNode("Congratulations! You win!");
                result.appendChild(text);
                result.setAttribute("class", "grandWin");
                document.querySelector('.result').appendChild(result);
                resetButton = document.createElement("button");
                buttonText = document.createTextNode("Reset Game");
                resetButton.appendChild(buttonText)
                resetButton.setAttribute("class", "resetButton");
                document.querySelector('.result').appendChild(resetButton);
                const reset = document.querySelector('.resetButton');
                reset.addEventListener('click', resetGame);  
                return resetButton; 

        } else if (computerWins === 5 ) {
            if (document.contains(document.querySelector(".resultTie"))) {
                document.querySelector(".resultTie").remove();
                } else if (document.contains(document.querySelector('.resultLose'))) {
                    document.querySelector(".resultLose").remove();
                } else if (document.contains(document.querySelector('.resultWin'))) {
                    document.querySelector(".resultWin").remove();
                } 
                    result = document.createElement("p");
                    text = document.createTextNode("Too bad! You Lose!");
                    result.appendChild(text);
                    result.setAttribute("class", "grandLose");
                    document.querySelector('.result').appendChild(result);    
                    resetButton = document.createElement("button");
                    buttonText = document.createTextNode("Reset Game");
                    resetButton.appendChild(buttonText)
                    resetButton.setAttribute("class", "resetButton");
                    document.querySelector('.result').appendChild(resetButton); 
                    const reset = document.querySelector('.resetButton');
                    reset.addEventListener('click', resetGame);  
                    return resetButton;
        }
    }

    function resetGame() {
        playerWins = 0;
        computerWins = 0;
        if (document.contains(document.querySelector('.playerWinCount'))){
            document.querySelector('.playerWinCount').remove();
        }
        playerWinCount = document.createElement("p");
        playerWinCountText = document.createTextNode(`${playerWins}`);
        playerWinCount.appendChild(playerWinCountText);
        playerWinCount.setAttribute("class", "playerWinCount");
        document.querySelector('.playerCounter').appendChild(playerWinCount);

        if (document.contains(document.querySelector('.computerWinCount'))){
            document.querySelector('.computerWinCount').remove();
        }
        computerWinCount = document.createElement("p");
        computerWinCountText = document.createTextNode(`${computerWins}`);
        computerWinCount.appendChild(computerWinCountText);
        computerWinCount.setAttribute("class", "computerWinCount");
        document.querySelector('.computerCounter').appendChild(computerWinCount);
        return playerWins, computerWins;
    }
    function sharkGame () {
        sharkCardChoice();
        computerCardChoice();
        playRound(playerChoice, computerChoice);
        gameOver(playerWins, computerWins);
    }

    function turtleGame () {
        turtleCardChoice();
        computerCardChoice();
        playRound(playerChoice, computerChoice);
        gameOver(playerWins, computerWins);
    }

    function kelpGame () {
        kelpCardChoice();
        computerCardChoice();
        playRound(playerChoice, computerChoice);
        gameOver(playerWins, computerWins);
    }


const choiceShark = document.querySelector(".sharkLink");
const choiceTurtle = document.querySelector(".turtleLink");
const choiceKelp = document.querySelector('.kelpLink');


choiceShark.addEventListener('click', sharkGame);
choiceTurtle.addEventListener('click', turtleGame);
choiceKelp.addEventListener('click', kelpGame);



