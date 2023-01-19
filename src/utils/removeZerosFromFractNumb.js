import { dot } from '../charactersData';

function removeLastZeros(str) {
  let stringValue = str;
  while (stringValue.at(-1) === '0' || stringValue.at(-1) === '9') {
    stringValue = stringValue.slice(0, -1);
  }
  return stringValue;
}

export default function removeZerosFromFractionNumberStr(num) {
  if (num[num.length - 1] === dot) {
    return num.slice(0, -1);
  }
  const str = Number(num).toFixed(6);
  const arr = str.split(dot);
  if (arr[0].includes('Infinity')) {
    return 'Infinity';
  }

  const newArr = arr[1].includes('0') ? [arr[0], removeLastZeros(arr[1])] : arr;
  return newArr.join('.');
}
