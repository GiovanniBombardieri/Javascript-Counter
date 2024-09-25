// IN THIS SCRIPT I CREATE THE FUNCTIONS THAT LET THE COUNTER WORKS. THEN I CALL THEM ON THE RIGHT BUTTONS.

// Functions
const counterValue = [0, 0]; // Dichiarato array per memorizzare il valore del o dei contatore/i

// SUM WIDTH FULL COUNTER
function sum() {
  let control = clickInput.checkValidity()
  console.log(control)
  console.log(counterValue);
  result.style.boxShadow = "0px 0px 5px 5px rgba(0, 0, 255, .2)"

  if (control) {
    if (!clickInput.value) {
      counterValue[0] = (counterValue[0] + 1)
      result.innerHTML = counterValue[0]
      console.log(counterValue)
    } else {
      counterValue[0] = (counterValue[0] + parseInt(clickInput.value))
      result.innerHTML = counterValue[0]
      console.log(counterValue)
    }
  } else {
    alert('Insert a number')
  }
}

// SUM WITH DIVIDE COUNTER
function smallSumLeft() {
  let control = clickInputLeft.checkValidity()
  console.log(control)
  console.log(counterValue);
  resultSmallOne.style.boxShadow = "0px 0px 5px 5px rgba(0, 0, 255, .2)"
  if (control) {
    if (!clickInputLeft.value) {
      counterValue[0] = (counterValue[0] + 1)
      resultSmallOne.innerHTML = counterValue[0]
      console.log(counterValue)
    } else {
      counterValue[0] = (counterValue[0] + parseInt(clickInputLeft.value))
      resultSmallOne.innerHTML = counterValue[0]
      console.log(counterValue)
    }
  } else {
    alert('Insert a number')
  }
}

function smallSumRight() {
  let control = clickInputRight.checkValidity()
  console.log(control)
  console.log(counterValue);
  resultSmallTwo.style.boxShadow = "0px 0px 5px 5px rgba(0, 0, 255, .2)"
  if (control) {
    if (!clickInputRight.value) {
      counterValue[1] = (counterValue[1] + 1)
      resultSmallTwo.innerHTML = counterValue[1]
      console.log(counterValue)
    } else {
      counterValue[1] = (counterValue[1] + parseInt(clickInputRight.value))
      resultSmallTwo.innerHTML = counterValue[1]
      console.log(counterValue)
    }
  } else {
    alert('Insert a number')
  }
}

// DECREASE WITH FULL COUNTER
function decrease() {
  let control = clickInput.checkValidity()
  console.log(control)
  console.log(counterValue);
  result.style.boxShadow = "0px 0px 5px 5px rgba(0, 0, 255, .2)"
  if (control) {
    if (parseInt(result.innerHTML) > 0 && (parseInt(result.innerHTML) - clickInput.value) >= 0) {
      if (!clickInput.value) {
        counterValue[0] = (counterValue[0] - 1)
        result.innerHTML = counterValue[0]
        console.log(counterValue)

      } else {
        counterValue[0] = (counterValue[0] - parseInt(clickInput.value))
        result.innerHTML = counterValue[0]
        console.log(counterValue)
      }
    } else {
      return
    }
  } else {
    alert('Insert a number')
  }
}

// DECREASE WITH DIVIDE COUNTER
function decreaseSmallLeft() {
  let control = clickInputLeft.checkValidity()
  console.log(control)
  console.log(counterValue);
  resultSmallOne.style.boxShadow = "0px 0px 5px 5px rgba(0, 0, 255, .2)"
  if (control) {
    if (parseInt(resultSmallOne.innerHTML) > 0 && (parseInt(resultSmallOne.innerHTML) - clickInputLeft.value) >= 0) {
      if (!clickInputLeft.value) {
        counterValue[0] = (counterValue[0] - 1)
        resultSmallOne.innerHTML = counterValue[0]
        console.log(counterValue)
      } else {
        counterValue[0] = (counterValue[0] - parseInt(clickInputLeft.value))
        resultSmallOne.innerHTML = counterValue[0]
        console.log(counterValue)
      }
    } else {
      return
    }
  } else {
    alert('Insert a number')
  }
}

function decreaseSmallRight() {
  let control = clickInputRight.checkValidity()
  console.log(control)
  console.log(counterValue);
  resultSmallTwo.style.boxShadow = "0px 0px 5px 5px rgba(0, 0, 255, .2)"
  if (control) {
    if (parseInt(resultSmallTwo.innerHTML) > 0 && (parseInt(resultSmallTwo.innerHTML) - clickInputRight.value) >= 0) {
      if (!clickInputRight.value) {
        counterValue[1] = (counterValue[1] - 1)
        resultSmallTwo.innerHTML = counterValue[1]
        console.log(counterValue)
      } else {
        counterValue[1] = (counterValue[1] - parseInt(clickInputRight.value))
        resultSmallTwo.innerHTML = counterValue[1]
        console.log(counterValue)
      }
    } else {
      return
    }
  } else {
    alert('Insert a number')
  }
}

// RESET BUTTON FOR BOTH, FULL AND DIVIDE COUNTER
function reset() {
  counterValue[0] = 0;
  result.innerHTML = '0'
  clickInput.value = ''
  result.style.boxShadow = ""
  console.log(counterValue)
}

function resetSmallLeft() {
  resultSmallOne.innerHTML = '0'
  clickInput.value = ''
  resultSmallOne.style.boxShadow = ""
}

function resetSmallRight() {
  resultSmallTwo.innerHTML = '0'
  clickInput.value = ''
  resultSmallTwo.style.boxShadow = ""
}

// SHOW OPTION FUNCTION
function showClickStep() {
  console.log(clickDiv)
  if (clickDiv.classList.contains('hidden')) {
    clickDiv.classList.replace('hidden', 'show')
    option.innerHTML = 'Hide options <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/></svg>'
    console.log(clickDiv)
  } else if (clickDiv.classList.contains('show')) {
    clickDiv.classList.replace('show', 'hidden')
    clickInput.value = ''
    clickInputLeft.value = ''
    clickInputRight.value = ''
    option.innerHTML = 'See options <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/></svg>'
    console.log(clickDiv)
  }
}

// SPLIT COUNTER IN TWO DIFFERENT AND SMALL ONES
function splitView() {

  if (result.classList.contains('result') && restart.classList.contains('restart')) {
  
    result.classList.replace('result', 'hidden')
    restart.classList.replace('restart', 'hidden')
    
    resultSmallOne.classList.remove('hidden')
    resultSmallTwo.classList.remove('hidden')
    restartSmallOne.classList.remove('hidden')
    restartSmallTwo.classList.remove('hidden')

    plus.classList.replace('plus', 'hidden')
    plusSmallOne.classList.remove('hidden')
    plusSmallTwo.classList.remove('hidden')

    minus.classList.replace('minus', 'hidden')
    minusSmallOne.classList.remove('hidden')
    minusSmallTwo.classList.remove('hidden')

    clickLabel.classList.add('hidden')
    clickInput.classList.replace('step', 'hidden')
    clickLabelLeft.classList.remove('hidden')
    clickInputLeft.classList.remove('hidden')
    clickLabelRight.classList.remove('hidden')
    clickInputRight.classList.remove('hidden')

    divideCounter.innerHTML = 'Less <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16"><path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"/></svg>'

    counterValue[0] = 0
    counterValue[1] = 0
    resultSmallOne.innerHTML = '0'
    resultSmallTwo.innerHTML = '0'
    console.log(counterValue)

  } else if (result.classList.contains('hidden') && restart.classList.contains('hidden')) {
    result.classList.replace('hidden', 'result')
    restart.classList.replace('hidden', 'restart')

    resultSmallOne.classList.add('hidden')
    resultSmallTwo.classList.add('hidden')
    restartSmallOne.classList.add('hidden')
    restartSmallTwo.classList.add('hidden')

    plus.classList.replace('hidden', 'plus')
    plusSmallOne.classList.add('hidden')
    plusSmallTwo.classList.add('hidden')

    minus.classList.replace('hidden', 'minus')
    minusSmallOne.classList.add('hidden')
    minusSmallTwo.classList.add('hidden')

    clickLabel.classList.remove('hidden')
    clickInput.classList.replace('hidden', 'step')
    clickLabelLeft.classList.add('hidden')
    clickInputLeft.classList.add('hidden')
    clickLabelRight.classList.add('hidden')
    clickInputRight.classList.add('hidden')

    divideCounter.innerHTML = 'More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16"><path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/></svg>'

    counterValue[0] = 0
    counterValue[1] = 0
    result.innerHTML = "0"
    clickInputLeft.value = ''
    console.log(counterValue)
  }

}


// Call to events
plus.addEventListener('click', sum)
minus.addEventListener('click', decrease)
restart.addEventListener('click', reset)
option.addEventListener('click', showClickStep)
divideCounter.addEventListener('click', splitView)
plusSmallOne.addEventListener('click', smallSumLeft)
plusSmallTwo.addEventListener('click', smallSumRight)
restartSmallOne.addEventListener('click', resetSmallLeft)
restartSmallTwo.addEventListener('click', resetSmallRight)
minusSmallOne.addEventListener('click', decreaseSmallLeft)
minusSmallTwo.addEventListener('click', decreaseSmallRight)