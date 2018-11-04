const player1 = 'X'
const player2 = 'O'

let currentTurn = 1
let movesMade = 0

const dragonBall = $('.square')
const winnerResult = $('.winner')
const reset = $('.reset')

dragonBall.on('click', function (e) {
  movesMade++

  if (currentTurn === 1) {
    event.target.innerHTML = player1
    event.target.style.color = 'orange'
    currentTurn++
  } else {
    event.target.innerHTML = player2
    event.target.style.color = 'blue'
    currentTurn--
  }
  if (checkWinner()) {
    const theWinner = currentTurn === 1 ? player1 : player2
    declareWinner(theWinner)
  }
})

reset.on('click', function (e) {
  const moves = Array.prototype.slice.call($('.square'))
  moves.map((m) => {
    m.innerHTML = ''
  })
  winnerResult.html('')
  winnerResult.css('display', 'none')
  currentTurn = 1
  movesMade = 0
})

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
