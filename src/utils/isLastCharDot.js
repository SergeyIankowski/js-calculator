export default function isLastCharDot(arr) {
  const newArr = arr;
  if (newArr.length === 1 && newArr[0].at(-1) === '.') {
    const value = newArr.pop();
    newArr.push(value.slice(0, -1));
    return newArr;
  }
  return newArr;
}
