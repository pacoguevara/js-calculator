let buffer = '0';
let runningTotal = 0;
let previousSymbol = null;

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

function handleMath (value) {
  if (buffer === '0') {
    return;
  }
  let intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushMathOperation(intBuffer);
  }
  previousSymbol = value;
  buffer = '0';
  console.log(runningTotal);
}

function flushMathOperation (value) {
  if (previousSymbol === '+') {
    runningTotal += value;
  } else if (previousSymbol === '-') {
    runningTotal -= value;
  } else if (previousSymbol === 'x') {
    runningTotal *= value;
  } else if (previousSymbol === '/') {
    runningTotal /= value;
  }
}
function handleSymbol (symbol) {
  switch (symbol) {
    case 'C':
      buffer = '0';
      break;
    case '=':
      if (previousSymbol === null) {
        return;
      }
      flushMathOperation(parseInt(buffer));
      previousSymbol = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;
    case '<':
      if (buffer.length === 1) {
        buffer = '0';
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case '/':
    case '+':
    case '-':
    case 'x':
      handleMath(symbol);
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
