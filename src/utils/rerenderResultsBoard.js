import { renderLastTenBoardContent } from '../components/renderLastResutsBoard';

export default function rerenderResultsBoard(node) {
  while (node.firstChild) {
    node.firstChild.remove();
  }
  const resData = JSON.parse(window.localStorage.getItem('lastTenResults')) || [];
  node.append(renderLastTenBoardContent(resData));
}
