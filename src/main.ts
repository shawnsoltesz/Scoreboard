import './style.css'

let teamOneScore = 0
let teamTwoScore = 0

//Team One + Button
const teamOneAddButton = document.querySelector('.team1 i.add')

function handleClickOnTeamOneAddButton() {
  if (teamOneScore >= 21) {
    return
  }

  teamOneScore++

  if (teamOneScoreDisplay) {
    teamOneScoreDisplay.textContent = `${teamOneScore}`
  }

  if (teamOneScore >= 21) {
    window.alert('Team 1 Won!!')
  }
}

teamOneAddButton?.addEventListener('click', handleClickOnTeamOneAddButton)

//Team One - Button

const teamOneDeleteButton = document.querySelector('.team1 i.subtract')

function handleClickOnTeamOneDeleteButton() {
  if (teamOneScore <= 0) {
    return
  }
  teamOneScore--

  if (teamOneScoreDisplay) {
    teamOneScoreDisplay.textContent = `${teamOneScore}`
  }
}

teamOneDeleteButton?.addEventListener('click', handleClickOnTeamOneDeleteButton)

//Team 2 H3 Score

const teamOneScoreDisplay = document.querySelector('.team1 h3')

//Team Two + Button

const teamTwoAddButton = document.querySelector('.team2 i.add')

function handleClickOnTeamTwoAddButton() {
  if (teamTwoScore >= 21) {
    return
  }

  teamTwoScore++

  if (teamTwoScoreDisplay) {
    teamTwoScoreDisplay.textContent = `${teamTwoScore}`
  }

  if (teamTwoScore >= 21) {
    window.alert('Team 2 Won!!')
  }
}

//Team Two - Button

const teamTwoDeleteButton = document.querySelector('.team2 i.subtract')

function handleClickOnTeamTwoDeleteButton() {
  if (teamTwoScore <= 0) {
    return
  }
  teamTwoScore--

  if (teamTwoScoreDisplay) {
    teamTwoScoreDisplay.textContent = `${teamTwoScore}`
  }
}

teamTwoDeleteButton?.addEventListener('click', handleClickOnTeamTwoDeleteButton)

//Team 2 H3 Score

const teamTwoScoreDisplay = document.querySelector('.team2 h3')

teamTwoAddButton?.addEventListener('click', handleClickOnTeamTwoAddButton)

//Reset button

const resetButton = document.querySelector('aside h3')

function handleClickOnResetButton() {
  teamTwoScore = 0
  teamOneScore = 0
  if (teamOneScoreDisplay) {
    teamOneScoreDisplay.textContent = `${teamOneScore}`
  }

  if (teamTwoScoreDisplay) {
    teamTwoScoreDisplay.textContent = `${teamTwoScore}`
  }
}

resetButton?.addEventListener('click', handleClickOnResetButton)
