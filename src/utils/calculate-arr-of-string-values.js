import calculateBySigns from './calculateBySigns';
import removeZerosFromFractionNumberStr from './removeZerosFromFractNumb';
import saveResultsToLocalStorage from './saveResultsToLocalStorage';

export default function calculateArrOfStringValues(arr) {
  const arrayForManipulations = [...arr];
  const firstPriorActions = arrayForManipulations.filter((item) => item === '*' || item === '/');
  const secondPriorActions = arrayForManipulations.filter((item) => item === '+' || item === '-');

  let resultArr = [...arrayForManipulations];

  resultArr = calculateBySigns(resultArr, firstPriorActions);
  resultArr = calculateBySigns(resultArr, secondPriorActions);

  const result = Number.isInteger(resultArr[0])
    ? [resultArr.toString()]
    : [removeZerosFromFractionNumberStr(resultArr[0])];

  // set results to local Storage
  saveResultsToLocalStorage(arrayForManipulations, result);

  return result;
}
