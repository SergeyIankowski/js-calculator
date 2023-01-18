export function renderLastTenBoardContent(arr) {
  const fragment = document.createDocumentFragment();

  const boardTitle = document.createElement('h2');
  boardTitle.classList.add('results-board__title');
  boardTitle.innerText = 'Last 10 calculations:';

  fragment.append(boardTitle);

  arr.forEach((resObj) => {
    const field = document.createElement('p');
    field.classList.add('results-board__field');
    field.innerText = `${resObj.field} = `;

    const result = document.createElement('span');
    result.classList.add('result-board__result');
    result.innerText = resObj.result.toString();

    field.append(result);
    fragment.append(field);
  });

  return fragment;
}

export function renderLastTenResultsBoard(arr) {
  const board = document.createElement('section');
  board.classList.add('results-board', 'results-board__layout');

  board.append(renderLastTenBoardContent(arr));

  return board;
}
