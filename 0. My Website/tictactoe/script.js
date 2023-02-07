// Initialize the default values

let cellValues = ['', '', '', '', '', '', '', '', '']
let gameOver = false

const cellID = ['1','2','3','4','5','6','7','8','9']
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const winDecorationPatter = ['h', 'h', 'h', 'v', 'v', 'v', 'ls', 'rs']


// Initialize the DOM references

function getCellRef(cellID) {
    
    let cellRef = []
    cellRef = cellID.map(
        (ID) => document.getElementById(ID)
    )

    return cellRef
}

const cellRef = getCellRef(cellID)
const boardRef = document.getElementById('board')
const restartBtnRef = document.getElementById('restart-btn')

// Function definition

function updateBoard(cellRef, cellValues) {
    
    // Update the Cell Values
    cellRef.forEach(
        (element, i) => {
        
        // Need Optimization!!! Remove the childs in the div
        while (element.firstChild) {
            element.removeChild(element.lastChild);
            }
        
        // Create new child and update the values
        childText = document.createTextNode(cellValues[i])
        element.appendChild(childText)
    });

    // Update the Cell Transition
    cellRef.forEach(
        (element, i) => {
            if (cellValues[i] === '' && !gameOver) {
                cellRef[i].classList.add('emptyCell')
                cellRef[i].classList.remove('winnerCell')
                cellRef[i].classList.remove('xCell')
                cellRef[i].classList.remove('oCell')
            }
            else if (cellValues[i] === 'X') {
                cellRef[i].classList.remove('emptyCell')
                cellRef[i].classList.add('xCell')
            }

            else if (cellValues[i] === 'O') {
                cellRef[i].classList.remove('emptyCell')
                cellRef[i].classList.add('oCell')
                
            }

            else {
                cellRef[i].classList.remove('emptyCell')
                console.log("Invalid Cell Value")
            }
        }
    )

}

function updateWinnerBoard() {
    result = winPatterSatisfied()
    if (result[0]) {
        // Game ended by winning
        i = winPattern.findIndex(
            (element) => element === result[2]
        )

        for (i of result[2]) {
            cellRef[i].classList.add('winnerCell')
        }
    }
}

function availableComputerMove() {
    let emptyCellsIndex = []
    cellValues.forEach(
        (element, i) => {
            if (element === '') {
                emptyCellsIndex.push(i)
            }
        }
    )

    return emptyCellsIndex
}

function bestComputerMove() {
    moveOptions = availableComputerMove()
    let i = Math.random()*moveOptions.length
    i = Math.round(i)
    i = (i >= moveOptions.length) ? 0 : i
    
    return moveOptions[i]
}

function winPatterSatisfied() {
    for (pattern of winPattern) {
        if (
            cellValues[pattern[0]] === cellValues[pattern[1]] &&
            cellValues[pattern[0]] === cellValues[pattern[2]] &&
            cellValues[pattern[0]] !== '') {
                return [true, cellValues[pattern[0]], pattern]
            }
    
            
    }

    return [false, '']
}

function boardClick(event) {
    clickedID = event.target.id
    cellNumber = cellID.indexOf(clickedID)

    if (cellNumber >= 0 && !gameOver)
    {
        if (cellValues[cellNumber] === ''){
            
            // Play the move & update the board
            cellValues[cellNumber] = 'X'
            updateBoard(cellRef, cellValues)
            
            // Is Game Complete by Board fill
            if (availableComputerMove().length === 0)
            {
                console.log('Game Complete by Board fill')
                gameOver = true
            }

            else if (winPatterSatisfied()[0]) {
                console.log('Game Complete by Winner')
                gameOver = true
            }

            else {
                
                cellNumber = bestComputerMove()
                cellValues[cellNumber] = 'O'
                updateBoard(cellRef, cellValues)

                // Is Game Complete by Board fill
                if (availableComputerMove().length === 0)
                {
                    console.log('Game Complete by Board fill')
                    gameOver = true
                }

                else if (winPatterSatisfied()[0]) {
                    console.log('Game Complete by Winner')
                    gameOver = true
                }

            }
        
        updateBoard(cellRef, cellValues)
        updateWinnerBoard()

        } 
        else {
            console.log("Clicked cell is already played")
        }
    }
    else
    {
        console.log('Not clicked on the cells OR game is over')
    }

}

function resetGame() {
    cellValues = ['', '', '', '', '', '', '', '', '']
    gameOver = false

    updateBoard(cellRef, cellValues)
    console.log('Game is RESET')
}

// Initialize the HTML Page
resetGame()

// Subscribe the UI element callbacks
boardRef.addEventListener('click', boardClick)

restartBtnRef.addEventListener('click', resetGame)
