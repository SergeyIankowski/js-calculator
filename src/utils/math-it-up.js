import {
  divider, minus, multiply, plus,
} from '../charactersData';

const mathItUp = {
  [plus]: (x, y) => x + y,
  [minus]: (x, y) => x - y,
  [multiply]: (x, y) => x * y,
  [divider]: (x, y) => x / y,
};

export default mathItUp;
