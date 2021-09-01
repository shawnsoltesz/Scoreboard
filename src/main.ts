import './style.css'

function handleClick() {
  window.alert('You did it!')
}

const nameField = document.querySelector('input')

nameField.addEventListener('click', handleClick)

const addButton = document.querySelector('i.add')

addButton.addEventListener('click', handleClick)

const deleteButton = document.querySelector('i.subtract')

deleteButton.addEventListener('click', handleClick)
