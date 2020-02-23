import './sass/style.sass'

document.addEventListener('DOMContentLoaded', function() {

  let historyarray = []
  let mainMath = '0'
  let history = '0'
  let finalset = ''
  let equalPressed = false

  document.querySelectorAll('button').forEach((button) => button.addEventListener('click', ({ target }) => calculate(target.getAttribute('value'))))

  function calculate(keyitem) {
    historyarray.push(keyitem)
    switch(keyitem) {
      case 'clear':
        clearScreen()
        break
      case '/':
      case '*':
      case '+':
      case '-':
        addOperator(keyitem)
        break
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        addNumber(keyitem)  // adding only numbers
        break
      case '.':
        addDecimal(keyitem)
        break
      case '=':
        solveEqual()
        break
    }
    // console.log(historyarray)
    update()
  }

  // add numbers to historyarray for each click =+
  function addNumber(keyitem) {
    if (mainMath === '0'){
      mainMath = keyitem
      finalset = mainMath
      return
    }
    mainMath+=keyitem
    finalset = mainMath
    // console.log(finalset)
    // console.log(mainMath)
  }

  // getting every values into historyarray

  function addOperator(keyitem){
    if(['/', 'x', '+', '-', '='].indexOf(historyarray[0]) > -1)   {
      historyarray = []
      return
    }
    if (equalPressed === true){
      history = ''
      historyarray = []
      equalPressed = false
    }
    mainMath+=keyitem

    if(history === '0'){
      history = mainMath
    } else {
      history += mainMath
    }
    mainMath = '0'
    // console.log(historyarray)
  }


  // getting the history array back to original value of 0 after click on AC
  const clearScreen = () => {
    mainMath = '0'
    history = '0'
    historyarray = []
  }


  // Allowing decimal to go into historyarray when press '.' value
  function addDecimal(keyitem) {
    if (mainMath.indexOf(keyitem) === -1){
      if(mainMath === '0') {
        mainMath = '0' + keyitem
        return
      }
    } else {
      return
    }
    mainMath+=keyitem
  }

  const solveEqual = () => {
    history += finalset
    mainMath =
  eval(history)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  // console.log(historyarray)

  // priniting digits to the screen and getting history and result
  const update = () => {
    document.getElementById('answer').innerHTML =
    mainMath
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      .substring(0, 4)

    document.getElementById('history').innerHTML =
    history
      .toString().replace(/\*/g, 'x')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }




}) //DOMContentLoaded ends
