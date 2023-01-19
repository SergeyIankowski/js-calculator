import {
  divide, minus, multiply, plus,
} from '../charactersData';

const mathItUp = {
  [plus]: (x, y) => x + y,
  [minus]: (x, y) => x - y,
  [multiply]: (x, y) => x * y,
  [divide]: (x, y) => x / y,
};

export default mathItUp;
