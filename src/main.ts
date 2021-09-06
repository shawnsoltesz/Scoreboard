import './style.css'

let teamOneScore = 0
let teamTwoScore = 0

//Team One + Button
const teamOneAddButton = document.querySelector('i.add')

function handleClickOnTeamOneAddButton() {
  teamOneScore++

  if (teamOneScoreDisplay) {
    teamOneScoreDisplay.textContent = `${teamOneScore}`
  }
}

teamOneAddButton?.addEventListener('click', handleClickOnTeamOneAddButton)

//Team One - Button

const teamOneDeleteButton = document.querySelector('i.subtract')

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

//H3 Score

const teamOneScoreDisplay = document.querySelector('h3')
