// my variables
const player1 = 'X'
const player2 = 'O'

// keep track of my moves
let currentTurn = 1
let movesMade = 0

const dragonBall = $('.square')
const winnerResult = $('.winner')
const drawResult = $('.draw')
const reset = $('.reset')
const endGame = function () {
  dragonBall.off()
}

// my click event
dragonBall.on('click', function (e) {
  // to make squares unclickable after its been clicked
  if (event.target.innerHTML === player1) {
    return false
  } else if (event.target.innerHTML === player2) {
    return false
  }
  // the click event will increment the movesMade up by one
  movesMade++
  // if currentTurn is 1, the value im passing is player 1 which equals X
  // my currentTurn moves up to 2
  if (currentTurn === 1) {
    event.target.innerHTML = player1
    event.target.style.color = 'green'
    currentTurn++
  // else if currentTurn doesnt equal 2, the value im passing is player 2
  // player2 is equal to O
  // my currentTurn moves back down to 1
  } else {
    event.target.innerHTML = player2
    event.target.style.color = 'blue'
    currentTurn--
  }

  const checkDraw = function () {
    if (movesMade === 9) {
      declareDraw()
      endGame()
    }
  }

  if (checkWinner()) {
    const theWinner = currentTurn === 1 ? player1 : player2
    declareWinner(theWinner)
    endGame()
  } else (checkDraw())

  // when winner is declared, squares are no longer clickable
  if (event.target.innerHTML === player1 || player2) {
    event.preventDefault()
  }
})

// reset button
reset.on('click', function (e) {
  const moves = Array.prototype.slice.call($('.square'))
  moves.map((m) => {
    m.innerHTML = ''
  })
  winnerResult.html('')
  winnerResult.css('display', 'none')
  currentTurn = 1
  movesMade = 0

  // my click event
  dragonBall.on('click', function (e) {
    // to make squares unclickable after its been clicked
    if (event.target.innerHTML === player1) {
      return false
    } else if (event.target.innerHTML === player2) {
      return false
    }
    movesMade++
    // if currentTurn is 1, the value im passing is player 1
    // which equals X
    if (currentTurn === 1) {
      event.target.innerHTML = player1
      event.target.style.color = 'green'
      // my currentTurn moves up to 2
      currentTurn++
    // else if currentTurn doesnt equal 2,
    // the value im passing is player 2
    // my currentTurn moves back down to 1
    } else {
      // player2 is equal to O
      event.target.innerHTML = player2
      event.target.style.color = 'blue'
      // my currentTurn moves back down to 1
      currentTurn--
    }
    // if movesMade is 9, then its a draw
    const checkDraw = function () {
      // movesMade cant be more than 9 because
      // theres only 9 squares
      if (movesMade === 9) {
        // declareDraw function gets called if statment is true
        declareDraw()
        // endGame function gets called if statment is true.
        endGame()
      }
    }
    // if statment for when checkWinner function is called
    if (checkWinner()) {
      // the winner will be the oppisite
      const theWinner = currentTurn === 1 ? player1 : player2
      // declareWinner function gets called
      declareWinner(theWinner)
      // endGame function gets called
      endGame()
    } else {
      // checkDraw function gets called
      checkDraw()
    }

    // when winner is declared, squares are no longer clickable
    // this targets my divs to see if value matches player1 or player2
    if (event.target.innerHTML === player1 || player2) {
      // ends the click event if the condition is true
      event.preventDefault()
    }
  })
})

// check winner
function checkWinner () {
  if (movesMade > 4) {
    // puts each click in an array
    const moves = Array.prototype.slice.call($('.square'))
    // goes thru array and returns innerHTML
    const results = moves.map((square) => {
      // returns the value of each square class
      return square.innerHTML
    })

    // ways to win
    const winningCombo = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8]
    ]
    // how to find winner function
    return winningCombo.find(function (combo) {
      // if statement, creating condition each value that gets pushed into empty array
      if (results[combo[0]] !== '' && results[combo[1]] !== '' && results[combo[2]] !== '' &&
    results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]) {
        return true
      } else {
        return false
      }
    })
  }
}

// to let user know who won
function declareWinner (winner) {
  // will display winner where my winner class is
  winnerResult.css('display', 'block')
  // will display my reset button above my grid
  reset.css('display', 'block')
  // defines who the winner is between player1 and player2
  winner = winner === player1 ? 'player2' : 'player1'
  // returns the value in my winner class
  winnerResult.html(winner + ' ' + 'WINS!')
}

// to let user know its a draw
function declareDraw (draw) {
  // will display draw
  drawResult.css('display', 'block')
  // the reset button
  reset.css('display', 'block')
  // returns the value in the draw class
  drawResult.html('DRAW!')
}
