import './sass/style.sass'

document.addEventListener('DOMContentLoaded', function() {

  let historyarray = []
  let mainMath = '0'
  let history = '0'
  let finalset = ''
  let equalPressed = false
  const sum = []

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
      // .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    document.getElementById('history').innerHTML =
    history
      // .toString()
      .replace(/\*/g, 'x')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }


  // 'SAVE' event will retunrn local IP, Browser and Time => onclick
  const giveSum = (ev) => {
    ev.preventDefault()

    const ip = require('ip')
    const ipAdr = ip.address()
    const today = new Date()
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
    const dateTime = date+' '+time
    const summary = document.getElementById('answer').innerHTML =
    mainMath
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')


    // get object with all transaction as JSON when click on 'SAVE'
    const tracks = {
      Summary: summary,
      Time: dateTime,
      Browser: navigator.appVersion, // give local IP
      IpAddress: ipAdr
    }

    // Every click "SAVE" it will create a single CSV file, just one action

    // let tracks = [
    //   ['', '' ],
    //   ['Summary', summary],
    //   ['Time', new Date()],
    //   ['Browser', navigator.appVersion],
    //   ['Ip Address', ipAdr]
    // ]

    // const csvContent = 'data:text/csv; charset=utf-8'
    //       + tracks.map(e => e.join(',')).join('\n')
    //
    // var encodedUri = encodeURI(csvContent)
    // var link = document.createElement('a')
    // link.setAttribute('href', encodedUri)
    // link.setAttribute('download', 'tracks.csv')
    // document.body.appendChild(link)
    // link.click()

    // end of CSV on 'SAVE'

    sum.push(tracks)
    //
    console.log(JSON.stringify(sum, 0, 4))

    // including a localStorage for data track

    localStorage.setItem('MyCalculation', JSON.stringify(sum, 0, 3))

  }
  document.getElementById('save').addEventListener('click', giveSum)

}) //DOMContentLoaded ends
