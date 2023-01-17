export default function checkEnteredChar(char, boardArr, input, rerenderCallback) {
  // if char isn't operator or digit
  if (!'*/+-=%<.'.includes(char) && Number.isNaN(+char)) {
    const inputNode = input;
    inputNode.value = inputNode.value.slice(0, -1);
    return;
  }

  // if dot is clicked
  if ('.'.includes(char) && !Number.isNaN(+boardArr.at(-1)) && !boardArr.at(-1).includes('.')) {
    const value = +boardArr.pop();
    boardArr.push(`${value}.`);
    rerenderCallback();
  }

  // if clicked on percent
  if ('%'.includes(char) && !Number.isNaN(+boardArr.at(-1))) {
    let value = +boardArr.pop();
    value /= 100;
    boardArr.push(String(value));
    console.log('percent', boardArr);
    rerenderCallback();
    return;
  }

  // if clicked delete char button
  if ('<'.includes(char)) {
    if (boardArr.length === 0) {
      return;
    }
    let value = boardArr.pop();
    if (value.length === 1) {
      console.log('delete char', boardArr);
      rerenderCallback();
      return;
    }
    value = value.slice(0, -1);
    boardArr.push(value);
    rerenderCallback();
    console.log('delete char', boardArr);
    return;
  }

  // add first char to array
  if (boardArr.length === 0 && !'*/+-='.includes(char)) {
    boardArr.push(char);
    console.log('add first char to array', boardArr);
    rerenderCallback();
    return;
  }

  // add operator after number
  if (!Number.isNaN(+boardArr.at(-1)) && '*/+-='.includes(char)) {
    boardArr.push(char);
    console.log('add operator after number', boardArr);
    rerenderCallback();
    return;
  }

  // add new number after operator
  if ('*/+-='.includes(boardArr.at(-1)) && !Number.isNaN(+char)) {
    boardArr.push(char);
    console.log('add new number after operator', boardArr);
    rerenderCallback();
    return;
  }

  // change operator
  if ('*/+-='.includes(boardArr.at(-1)) && '*/+-='.includes(char)) {
    boardArr.pop();
    boardArr.push(char);
    console.log('change operator', boardArr);
    rerenderCallback();
    return;
  }

  // concat next digit to last number
  if (!Number.isNaN(+boardArr.at(-1)) && !Number.isNaN(+char)) {
    let value = boardArr.pop();
    value = `${value}${char}`;
    boardArr.push(value);
    console.log('concat next digit to last number', boardArr);
    rerenderCallback();
  }
}
