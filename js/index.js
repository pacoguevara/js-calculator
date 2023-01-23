let buffer = '0';

function buttonClick (value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  }else {
    handleNumber(value);
  }
  rerender();
}

function handleNumber (number) {
  if (buffer === '0') {
    buffer = number;
  } else {
    buffer += number;
  }
}

function rerender () {
  document.querySelector('.output').innerText = buffer;
}

function handleSymbol (symbol) {
  switch (symbol) {
    case 'C':
      buffer = '0';
      break;
    case '=':
      console.log('equals');
      break;
    case '<':
      if (buffer.length === 1) {
        buffer = '0';
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case '/':
      console.log('divide');
      break;
    case '+':
      console.log('plus');
      break;
    case '-':
      console.log('minus');
      break;
    case 'x':
      console.log('multiply');
      break;
    default:
      console.log('undefined');
      break;
  }
}

function init () {
  document.querySelector('.numbers')
    .addEventListener('click', function(event) {
      buttonClick(event.target.innerText);
    });
}

init();
