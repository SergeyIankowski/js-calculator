export default function renderCalculator(arr, targetNode) {
  const calculator = document.createElement('section');
  calculator.classList.add('calculator', 'calculator-layout');

  const calculatorBoard = document.createElement('input');
  calculatorBoard.type = 'text';
  calculatorBoard.classList.add('calculator__board');

  const calculatorButtons = document.createElement('div');
  calculatorButtons.classList.add('calculator__buttons', 'buttons-container__layout');

  arr.forEach((button) => {
    const buttonNode = document.createElement('div');
    const [buttonKey, buttonCallback] = [button.btnName, button.callback];

    if (!Number.isNaN(+buttonKey) || buttonKey === '.') {
      buttonNode.classList.add('calculator__button');
    } else {
      buttonNode.classList.add('calculator__button', 'calculator__button_colored');
    }
    if (+buttonKey === 0) {
      buttonNode.classList.add('calculator__button_wide');
    }

    buttonNode.innerText = `${buttonKey}`;
    buttonNode.onclick = buttonCallback;
    calculatorButtons.append(buttonNode);
  });

  calculator.append(calculatorBoard, calculatorButtons);
  targetNode.append(calculator);
}
