import './sass/style.sass'

document.addEventListener('DOMContentLoaded', function() {

  const historyarray = []

  document.querySelectorAll('button').forEach((button) => button.addEventListener('click', ({target}) => calculate(target.getAttribute('value'))))

  function calculate(keyitem) {
    historyarray.push(keyitem)
    switch(keyitem) {
      case 'clear':
        break
      case '/':
      case '*':
      case '+':
      case '-':
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
        break
      case '.':
        break
      case '=':
        break
    }
    console.log(historyarray)
  }






})
