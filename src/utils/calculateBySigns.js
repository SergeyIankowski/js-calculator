import mathItUp from './math-it-up';

export default function calculateBySigns(arr, signsArr) {
  let resultArr = [...arr];

  signsArr.forEach((item) => {
    const index = resultArr.indexOf(item);
    const arrBefore = resultArr.slice(0, index - 1);
    const arrAfter = resultArr.slice(index + 2);
    const numberBefore = parseFloat(resultArr[index - 1]);
    const numberAfter = parseFloat(resultArr[index + 1]);

    if (!numberAfter) {
      resultArr = [...arrBefore, numberBefore];
      return;
    }
    resultArr = [...arrBefore, mathItUp[item](numberBefore, numberAfter), ...arrAfter];
  });
  return resultArr;
}
