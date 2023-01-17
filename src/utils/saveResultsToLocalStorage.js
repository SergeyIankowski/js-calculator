export default function saveResultsToLocalStorage(arr, result) {
  if (result.includes('Infinity') || result.includes('-Infinity')) {
    return;
  }
  window.localStorage.setItem('result', JSON.stringify(result));
  const resultsArrStr = window.localStorage.getItem('lastTenResults');
  const resultsArr = JSON.parse(resultsArrStr) || [];
  if (resultsArr.length > 10) {
    resultsArr.pop();
  }
  resultsArr.unshift({ result, field: arr.join(' ') });
  window.localStorage.setItem('lastTenResults', JSON.stringify(resultsArr));
}
