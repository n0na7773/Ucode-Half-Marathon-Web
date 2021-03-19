const calculator = document.querySelector('.calculator'),
      fieldResult = calculator.querySelector('.calculator_result'),
      btnIs = calculator.querySelector('.calculator_is');

let operator,
    oldNum,
    newNum,
    result = '';

let history = document.createElement('div');
history.style.cssText = 'position: absolute;' +
  'top: 10px; right: 10%;' +
  'font-size: 1em; font-weight: bold;' +
  'color: rgba(0,0,0,.8); background: inherit;';
calculator.children[0].appendChild(history);

calculator.addEventListener('click', function (e) {
  let target = e.target;

  if (fieldResult.innerHTML === '0' && target.dataset.num != '.') {
    clear(fieldResult, '');
  }

  if (target.dataset.type == 'clear') {
    operator = '';
    oldNum = '';
    newNum = '';
    result = ''
    clear(fieldResult, '0');
  }

  if (target.classList.contains('calculator_num')) {

    if (fieldResult.innerHTML == result) {
      clear(fieldResult, '');
      result = '';
    }

    fieldResult.innerHTML += target.dataset.num;
    newNum = fieldResult.innerHTML;
  }

  if (target.classList.contains('calculator_operator')) {
    if (result === '') oldNum = newNum;
    operator = target.dataset.type;
    clear(fieldResult, '');
    history.innerHTML = oldNum + ' ' + operator;
  }

  if (target == btnIs) {
    result = doMath(operator,oldNum,newNum);
    result = Math.round(result * 10000) / 10000;

    if (!isFinite(result)) result = 0;

    fieldResult.innerHTML = result;
    oldNum = fieldResult.innerHTML;
    operator = '';
    clear(history, '');
  }
});

function doMath(operator, num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return result;
  }
}

function clear(elem, value) {
  return elem.innerHTML = value;
}