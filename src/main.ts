import './style.css'

let teamOneScore = 0
let teamTwoScore = 0

//Team 1 H3 Score

const teamOneScoreDisplay = document.querySelector('.team1 h3')

//Team One Add Button
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

//Team One Delete Button

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

//Team One Name Input/Display

const teamOneNameDisplay = document.querySelector('.team1 h2')

const teamOneNameInput = document.querySelector('.team1 input')

function teamOneNameInputChanged(event: any) {
  const inputThatWasChanged = event.target

  if (inputThatWasChanged instanceof HTMLInputElement) {
    const textThatWasInput = inputThatWasChanged.value

    if (teamOneNameDisplay) {
      teamOneNameDisplay.textContent = textThatWasInput
    }
  }
}

teamOneNameInput?.addEventListener('input', teamOneNameInputChanged)

//Team Two Add Button

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

//Team Two Delete Button

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

//Team Two Name Input/Display

const teamTwoNameDisplay = document.querySelector('.team2 h2')

const teamTwoNameInput = document.querySelector('.team2 input')

function teamTwoNameInputChanged(event: any) {
  const inputThatWasChanged = event.target

  if (inputThatWasChanged instanceof HTMLInputElement) {
    const textThatWasInput = inputThatWasChanged.value

    if (teamTwoNameDisplay) {
      teamTwoNameDisplay.textContent = textThatWasInput
    }
  }
}
teamTwoNameInput?.addEventListener('input', teamTwoNameInputChanged)

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

  if (teamOneNameDisplay) {
    teamOneNameDisplay.textContent = 'Team 1'
  }

  if (teamTwoNameDisplay) {
    teamTwoNameDisplay.textContent = 'Team 2'
  }
  if (teamOneNameInput) {
    teamOneNameInput.textContent = 'Name'
  }

  if (teamTwoNameInput) {
    teamTwoNameInput.textContent = 'Name'
  }
}
resetButton?.addEventListener('click', handleClickOnResetButton)
