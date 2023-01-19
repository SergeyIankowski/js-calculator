import { dot } from '../charactersData';

export default function renderCalculator(arr) {
  const calculator = document.createElement('section');
  const calculatorTheme = localStorage.getItem('theme') || 'theme-1';
  calculator.classList.add('calculator', 'calculator-layout', `calculator_${calculatorTheme}`);

  const themes = document.createElement('div');
  themes.classList.add('themes-container', 'themes-layout');

  ['theme-1', 'theme-2', 'theme-3', 'theme-4'].forEach((item) => {
    const themeButton = document.createElement('buttom');
    themeButton.classList.add('themes-container__item', 'theme-button', `theme-button_${item}`);
    themeButton.onclick = () => {
      calculator.className = `calculator calculator-layout calculator_${item}`;
      localStorage.setItem('theme', item);
    };
    themeButton.innerText = `${item.slice(0, 5)} ${item.at(-1)}`;
    themes.append(themeButton);
  });

  const calculatorBoard = document.createElement('input');
  calculatorBoard.type = 'text';
  calculatorBoard.classList.add('calculator__board');

  const calculatorButtons = document.createElement('div');
  calculatorButtons.classList.add('calculator__buttons', 'buttons-container__layout');

  arr.forEach((button) => {
    const buttonNode = document.createElement('div');
    const [buttonKey, buttonCallback] = [button.btnName, button.callback];

    if (!Number.isNaN(+buttonKey) || buttonKey === dot) {
      buttonNode.classList.add('calculator__button');
    } else {
      buttonNode.classList.add('calculator__button', 'calculator__button_colored');
    }
    if (+buttonKey === 0) {
      buttonNode.classList.add('calculator__button_wide');
    }
    if (buttonKey === '=') {
      buttonNode.classList.add('calculator__button_extra-wide');
    }

    buttonNode.innerText = `${buttonKey}`;
    buttonNode.onclick = buttonCallback;
    calculatorButtons.append(buttonNode);
  });

  calculator.append(themes, calculatorBoard, calculatorButtons);
  return calculator;
}
