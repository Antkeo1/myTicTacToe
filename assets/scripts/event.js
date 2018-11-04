require('./app.js')
const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// my variables
const player1 = 'X'
const player2 = 'O'

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
  movesMade++
  // if currentTurn is 1, the value im passing is player 1 which equals X
  // my currentTurn moves up to 2
  if (currentTurn === 1) {
    event.target.innerHTML = player1
    event.target.style.color = 'orange'
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
  if ( event.target.innerHTML === player1 || player2) {
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
    // if currentTurn is 1, the value im passing is player 1 which equals X
    // my currentTurn moves up to 2
    if (currentTurn === 1) {
      event.target.innerHTML = player1
      event.target.style.color = 'orange'
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
        console.log('DRAW!')
      }
    }

    if (checkWinner()) {
      const theWinner = currentTurn === 1 ? player1 : player2
      declareWinner(theWinner)
      endGame()
    } else {
      checkDraw()
    }

    // when winner is declared, squares are no longer clickable
    if (event.target.innerHTML === player1 || player2) {
      event.preventDefault()
    }
  })
})

// check winner
function checkWinner () {
  if (movesMade > 4) {
    const moves = Array.prototype.slice.call($('.square'))
    const results = moves.map((square) => {
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
  winnerResult.css('display', 'block')
  reset.css('display', 'block')
  winner = winner === player1 ? 'player2' : 'player1'
  winnerResult.html(winner + ' ' + 'WINS!')
}

// to let user know its a draw
function declareDraw (draw) {
  drawResult.css('display', 'block')
  reset.css('display', 'block')
  //winner = winner === player1 ? 'player2' : 'player1'
  drawResult.html('DRAW!')
}
