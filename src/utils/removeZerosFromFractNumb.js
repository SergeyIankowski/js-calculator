export default function removeZerosFromFractionNumberStr(num) {
  if (num[num.length - 1] === '.') {
    return num.slice(0, -1);
  }
  const str = Number(num).toFixed(6);
  const arr = str.split('.');

  if (arr[0].includes('Infinity')) {
    return 'Infinity';
  }

  const newArr = arr[1].includes('0') ? [arr[0], arr[1].replaceAll('0', '')] : arr;
  return newArr.join('.');
}
