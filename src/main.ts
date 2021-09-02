import './style.css'

let playerOneScore = 0
let playerTwoScore = 0

// // ScoreboardView

// // const thingClickedOn = event.target

// // constructor(playerOneName, playerTwoName, onScoreChange)

function handleScoreClick() {
  window.alert('You did it!')
}

// // inputElement.addEventListener('click', handleScoreClick)

// // nameField.addEventListener('click', handleScoreClick)

const addButton = document.querySelector('i.add')

addButton.addEventListener('click', handleScoreClick)

const deleteButton = document.querySelector('i.subtract')

deleteButton.addEventListener('click', handleScoreClick)
