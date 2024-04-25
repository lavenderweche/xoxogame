// Create the vaiables to get the player heading text, the start again/restart button and the player entry boxes

let gameHeading = document.getElementById('gameHeading')
let restartBtn = document.getElementById('restartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')


const O_TEXT = "O"
const X_TEXT = "X"

/* Start the game off with the X text and keep track of which block was clicked, there is a validation here 
to check which box the user clicked so that they don't click on it again*/
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)

// Start the game and loop over the boxes and once the box is clicked run the function bocClicked
const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) {
    const id = e.target.id

    // Check that the spaces array does not contain the id, check if it hasn't been filled by an id then continue
    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(playerHasWon() !==false){
            gameHeading.innerHTML = `${currentPlayer} has won!`
            let winning_blocks = playerHasWon()

            winning_blocks.map( box => boxes[box].style.backgroundColor=winnerIndicator)
            return
        }

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }
}

// How to determine that the player has won
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
        }
    }
    return false
}

/* Give the user the ability to restart the game by clicking on the restart button, 
the function will clear everything in the boxes and in the array. Also restart the current player to the default player*/

restartBtn.addEventListener('click', restart)

function restart() {
    spaces.fill(null)

    boxes.forEach( box => {
        box.innerText = ''
        box.style.backgroundColor=''
    })

    gameHeading.innerHTML = 'X and O'

    currentPlayer = X_TEXT
}

startGame()