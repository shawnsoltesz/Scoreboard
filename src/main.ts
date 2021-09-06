import './style.css'

let playerOneScore = 0
let playerTwoScore = 0

// // ScoreboardView

// // const thingClickedOn = event.target

//function handleClick() {
//  window.alert('You did it!')
//}

// const nameField = document.querySelector('input')

// nameField.addEventListener('click', handleClick)

const teamOneAddButton = document.querySelector('i.add')

function handleClickOnTeamOneAddButton() {
  console.log('I clicked on Team One Plus Button')
}

teamOneAddButton?.addEventListener('click', handleClickOnTeamOneAddButton)

const teamOneDeleteButton = document.querySelector('i.subtract')

function handleClickOnTeamOneDeleteButton() {
  console.log('I clicked on team one minus button')
}

teamOneDeleteButton?.addEventListener('click', handleClickOnTeamOneDeleteButton)

//const teamOneScore = document.querySelector('h3')
