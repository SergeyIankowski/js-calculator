import calculateBySigns from './calculateBySigns';

export default function calculateArrOfStringValues(arr) {
  const arrayForManipulations = [...arr];
  const firstPriorActions = arrayForManipulations.filter((item) => item === '*' || item === '/');
  const secondPriorActions = arrayForManipulations.filter((item) => item === '+' || item === '-');

  let resultArr = [...arrayForManipulations];

  resultArr = calculateBySigns(resultArr, firstPriorActions);
  resultArr = calculateBySigns(resultArr, secondPriorActions);

  return resultArr[0] % 1 === 0 ? [resultArr.toString()] : [resultArr[0].toFixed(6)];
}
