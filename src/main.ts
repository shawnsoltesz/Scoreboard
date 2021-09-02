import './style.css'

let playerOneScore = 0
let playerTwoScore = 0

// // ScoreboardView

// // const thingClickedOn = event.target

// // constructor(playerOneName, playerTwoName, onScoreChange)

function handleClick() {
  window.alert('You did it!')
}

// const nameField = document.querySelector('input')

// nameField.addEventListener('click', handleClick)

const addButton = document.querySelector('i.add')

addButton.addEventListener('click', handleClick)

const deleteButton = document.querySelector('i.subtract')

deleteButton.addEventListener('click', handleClick)

//Notes

// I can't drill into the Team 2 buttons -
// tried to add an s to the "add" and "subtract" prefix to class
// and create new plural const.

// I can't update the 0 in the <h3> as a value - i could initialize
// <h3> and set to a value other than 0. But it remained as 0
// in the Console properties when console.log.

// When adding code to eliminate null on const variables, the
// window.alert stops working.
