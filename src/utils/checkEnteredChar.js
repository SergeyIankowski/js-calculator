import {
  allChars, back, divider, dot, equal, minus, multiply, percent, plus,
} from '../charactersData';
import removeZerosFromFractionNumberStr from './removeZerosFromFractNumb';

export default function checkEnteredChar(char, boardArr, input, rerenderCallback) {
  // if char isn't operator or digit
  if (!allChars.includes(char) && Number.isNaN(+char)) {
    const inputNode = input;
    inputNode.value = inputNode.value.slice(0, -1);
    return;
  }

  // if dot is clicked
  if (dot.includes(char) && !Number.isNaN(+boardArr.at(-1)) && !boardArr.at(-1).includes('.')) {
    const value = +boardArr.pop();
    boardArr.push(`${value}.`);
    rerenderCallback();
  }

  // if clicked on percent
  if (percent.includes(char) && !Number.isNaN(+boardArr.at(-1))) {
    let value = +boardArr.pop();
    value /= 100;
    value = removeZerosFromFractionNumberStr(value);
    if (+value < 0.000001) {
      boardArr.push('Error');
      rerenderCallback();
      return;
    }
    boardArr.push(String(value));
    rerenderCallback();
    return;
  }

  // if clicked delete char button
  if (back.includes(char)) {
    if (boardArr.length === 0) {
      return;
    }
    let value = boardArr.pop();
    if (value.length === 1) {
      rerenderCallback();
      return;
    }
    value = value.slice(0, -1);
    boardArr.push(value);
    rerenderCallback();
    return;
  }

  // add first char to array
  if (boardArr.length === 0 && ![multiply, divider, plus, minus, equal].includes(char)) {
    boardArr.push(char);
    rerenderCallback();
    return;
  }

  // add operator after number
  if (!Number.isNaN(+boardArr.at(-1)) && [multiply, divider, plus, minus, equal].includes(char)) {
    boardArr.push(char);
    rerenderCallback();
    return;
  }

  // add new number after operator
  if ([multiply, divider, plus, minus, equal].includes(boardArr.at(-1)) && !Number.isNaN(+char)) {
    boardArr.push(char);
    rerenderCallback();
    return;
  }

  // change operator
  if (
    [multiply, divider, plus, minus, equal].includes(boardArr.at(-1))
    && [multiply, divider, plus, minus, equal].includes(char)
  ) {
    boardArr.pop();
    boardArr.push(char);
    rerenderCallback();
    return;
  }

  // concat next digit to last number
  if (!Number.isNaN(+boardArr.at(-1)) && !Number.isNaN(+char)) {
    let value = boardArr.pop();
    value = `${value}${char}`;
    boardArr.push(value);
    rerenderCallback();
  }
}
