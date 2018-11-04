const player1 = [{
  name: 'Goku',
  image: 'goku.jpg'
}]
const player2 = [{
  name: 'Vegeta',
  image: 'vegeta.jpg'
}]

let currentTurn = 1
let movesMade = 0

const dragonBall = $('square')

dragonBall.on(click.function(event))
movesMade++
if (currentTurn === 1) {
  event.target.image.innerHTML = player1
  currentTurn++
} else {
  event.target.image.innerHTML = player2
  currentTurn--
}
