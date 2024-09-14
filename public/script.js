// IN THIS SCRIPT I CREATE THE ELEMENTS THAT I USE FOR MY COUNTER

const body = document.querySelector('body')
const final = document.querySelector('#finalClose')

// Creation of a div for the counter element 
const counter = document.createElement('div')
counter.classList.add('counter')
body.insertBefore(counter, final)

// Creation of a div for display the result of the counter
const display = document.createElement('div')
display.classList.add('display')
counter.appendChild(display)

// Result div full width
const result = document.createElement('div')
result.classList.add('result')
result.innerHTML = '0'
const restart = document.createElement('div')
restart.classList.add('restart')
restart.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/></svg>'
display.appendChild(result)
display.appendChild(restart)

// Result div width divide
const resultSmallOne = document.createElement('div')
const restartSmallOne = document.createElement('div')
const resultSmallTwo = document.createElement('div')
const restartSmallTwo = document.createElement('div')
resultSmallOne.classList.add('resultSmall')
restartSmallOne.classList.add('restartSmall')
restartSmallOne.style.marginRight = 'auto'
restartSmallOne.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/></svg>'
resultSmallTwo.classList.add('resultSmall')
restartSmallTwo.classList.add('restartSmall')
restartSmallTwo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/></svg>'
resultSmallOne.innerHTML = '0'
resultSmallTwo.innerHTML = '0'
resultSmallOne.classList.add('hidden')
restartSmallOne.classList.add('hidden')
resultSmallTwo.classList.add('hidden')
restartSmallTwo.classList.add('hidden')
display.appendChild(resultSmallOne)
display.appendChild(restartSmallOne)
display.appendChild(resultSmallTwo)
display.appendChild(restartSmallTwo)

// Creation of a div for display button PLUS
const plusButtons = document.createElement('div')
plusButtons.classList.add('plusButtons')
counter.appendChild(plusButtons)

// Plus button full width
const plus = document.createElement('div')
plus.classList.add('plus')
plus.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="white" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/></svg>'
plusButtons.appendChild(plus)

// Plus button width divide
const plusSmallOne = document.createElement('div')
const plusSmallTwo = document.createElement('div')
plusSmallOne.classList.add('plusSmall')
plusSmallOne.classList.add('hidden')
plusSmallTwo.classList.add('plusSmall')
plusSmallTwo.classList.add('hidden')
plusSmallOne.style.marginRight = 'auto'
plusSmallOne.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="white" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/></svg>'
plusSmallTwo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="white" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/></svg>'
plusButtons.appendChild(plusSmallOne)
plusButtons.appendChild(plusSmallTwo)

// Creation of a div for display button MINUS
const minusButtons = document.createElement('div')
minusButtons.classList.add('minusButtons')
counter.appendChild(minusButtons)

// Minus button full width
const minus = document.createElement('div')
minus.classList.add('minus')
minus.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" class="bi bi-dash-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/></svg>'
minusButtons.appendChild(minus)

// Minus button width divide
const minusSmallOne = document.createElement('div')
const minusSmallTwo = document.createElement('div')
minusSmallOne.classList.add('minusSmall')
minusSmallOne.classList.add('hidden')
minusSmallTwo.classList.add('minusSmall')
minusSmallTwo.classList.add('hidden')
minusSmallOne.style.marginRight = 'auto'
minusSmallOne.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" class="bi bi-dash-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/></svg>'
minusSmallTwo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" class="bi bi-dash-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/></svg>'
minusButtons.appendChild(minusSmallOne)
minusButtons.appendChild(minusSmallTwo)

// Creation of "more/less" button
const lessDiv = document.createElement('div')
lessDiv.style.margin = '20px'
counter.appendChild(lessDiv)

const divideCounter = document.createElement('div')
divideCounter.classList.add('divideCounter')
divideCounter.innerHTML = 'More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16"><path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/></svg>'
lessDiv.appendChild(divideCounter)

// Creation of "option" button
const optionDiv = document.createElement('div')
optionDiv.style.margin = '20px'
counter.appendChild(optionDiv)

const option = document.createElement('div')
option.classList.add('options')
option.innerHTML = 'See options <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/></svg>'
optionDiv.appendChild(option)

// Creation of click step
const clickDiv = document.createElement('div')
clickDiv.classList.add('hidden')
counter.appendChild(clickDiv)

const clickLabel = document.createElement('label')
clickLabel.innerHTML = 'Click step'
clickLabel.style.width = '100%'
clickLabel.style.textAlign = 'center'

const clickInput = document.createElement('input')
clickInput.classList.add('step')
clickInput.type = 'number'
clickInput.min = '2'
clickInput.placeholder = '2'

clickDiv.appendChild(clickLabel)
clickDiv.appendChild(clickInput)

// Creation of click step width divide
const clickLabelLeft = document.createElement('label')
clickLabelLeft.classList.add('labelSmall')
clickLabelLeft.classList.add('hidden')
clickLabelLeft.innerHTML = 'Click step'
clickLabelLeft.style.marginRight = '10%'

const clickInputLeft = document.createElement('input')
clickInputLeft.classList.add('stepSmall')
clickInputLeft.classList.add('hidden')
clickInputLeft.type = 'number'
clickInputLeft.min = '2'
clickInputLeft.placeholder = '2'
clickInputLeft.style.marginRight = '10%'

const clickLabelRight = document.createElement('label')
clickLabelRight.classList.add('labelSmall')
clickLabelRight.classList.add('hidden')
clickLabelRight.innerHTML = 'Click step'

const clickInputRight = document.createElement('input')
clickInputRight.classList.add('stepSmall')
clickInputRight.classList.add('hidden')
clickInputRight.type = 'number'
clickInputRight.min = '2'
clickInputRight.placeholder = '2'

clickDiv.appendChild(clickLabelLeft)
clickDiv.appendChild(clickLabelRight)
clickDiv.appendChild(clickInputLeft)
clickDiv.appendChild(clickInputRight)

