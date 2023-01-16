import calculateArrOfStringValues from './utils/calculate-arr-of-string-values';

console.log('Hello World!');

// const arr = ['35', '+', '1', '*', '-17.1', '+', '1', '*', '3', '/', '8', '+', '2'];
console.log(calculateArrOfStringValues('1 + 2 + 3 * -2 - 125.7654 + 126.121212'.split(' ')));
console.log(
  calculateArrOfStringValues(
    `${calculateArrOfStringValues('1 + 2 + 3 * -2 - 125 + 126 * 3 + 8588 / 75'.split(' ')).toString()} + 236`.split(' ')
  )
);
