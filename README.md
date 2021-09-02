README.md
function handleClickSquare(event: MouseEvent) {
// After this handler, stop the bubbling. End it here...
event.stopPropagation()

// Don't do your NATURAL behavior, I'm overriding
event.preventDefault()

const thingClickedOn = event.target

// If the thing clicked on is an LI Element
// - This does several things:
// - 1. Checks that the target isn't null
// - 2. Let's TypeScript know that _inside_ this if statement
// the thingClickedOn is an LI element, and thus we can
// change its textContent
if (thingClickedOn instanceof HTMLLIElement) {
// If the element ALREADY has `taken` we shouldn't
// let them click again! We do this by ENDING (returning)
// from the function RIGHT AWAY
if (thingClickedOn.classList.contains('taken')) {
console.log('NOPES')
return
}

    thingClickedOn.textContent = currentPlayer

    // Adds the taken class so that we SHOW the user
    // they can't select this item!
    thingClickedOn.classList.add('taken')

    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }

    // Increment the move counter!
    moveCounter++

    const header = document.querySelector('h1')
    if (header instanceof HTMLHeadingElement) {
      header.textContent = `Move ${moveCounter} of Tic Tac Toe`
    }

}
}

// const allSquares = document.querySelectorAll('li')
// allSquares.forEach((square) =>
// square.addEventListener('click', handleClickSquare)
// )

const gameBoard = document.querySelector('ul')

if (gameBoard instanceof HTMLUListElement) {
gameBoard.addEventListener('click', handleClickSquare)
}\*/

let scoreCounterT1 = 0

function handleAddClick(event: MouseEvent) {
window.alert('You did it!')
console.log(event.target)

const addButton = document.querySelector('i.add')

addButton.addEventListener('click', handleAddClick)

//const thingClickedOn = event.target

// const inputElement = document.querySelector('input')

// inputElement.addEventListener('click', handleScoreClick)

// const nameField = document.querySelector('input')

// nameField.addEventListener('click', handleScoreClick)

const deleteButton = document.querySelector('i.subtract')

deleteButton.addEventListener('click', handleClick)

//const h3 = document.querySelector('h3')

//const scoreCounterT1 = document.querySelector('click', scoreCounter++)
/\*

}
