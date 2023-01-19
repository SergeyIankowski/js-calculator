import {
  back, devider, dot, minus, multiply, percent, plus,
} from '../charactersData';
import calculateArrOfStringValues from '../utils/calculate-arr-of-string-values';
import checkEnteredChar from '../utils/checkEnteredChar';
import isLastCharDot from '../utils/isLastCharDot';
import rerenderResultsBoard from '../utils/rerenderResultsBoard';
import renderCalculator from './renderCalculator';
import { renderLastTenResultsBoard } from './renderLastResutsBoard';

class Calculator {
  constructor(board) {
    this.board = board;
    this.boardInput = null;
    this.resultsBoard = null;
  }

  setResult(arr) {
    this.board = arr;
    this.boardInput.value = this.board.join(' ');
  }

  rerenderBoard() {
    this.boardInput.value = this.board.join(' ');
  }

  setValue(char) {
    checkEnteredChar(char, this.board, this.boardInput, () => {
      this.rerenderBoard();
    });
  }

  init(targetNode) {
    const buttonsData = [
      {
        btnName: 'AC',
        callback: () => {
          this.board = [];
          this.boardInput.value = '';
          window.localStorage.setItem('result', '');
          window.localStorage.setItem('lastTenResults', JSON.stringify([]));
          rerenderResultsBoard(this.resultsBoard);
        },
      },
      {
        btnName: '<=',
        callback: () => {
          this.setValue(back);
        },
      },
      {
        btnName: '+/-',
        callback: () => {
          let value = +this.board.pop(-1);
          if (!Number.isNaN(value)) {
            value *= -1;
            this.board.push(`${value}`);
            this.rerenderBoard();
          }
        },
      },
      {
        btnName: '%',
        callback: () => {
          this.setValue(percent);
          const newArr = this.board;
          if (newArr[0] === 'Error') {
            this.board = ['very small percent'];
            this.rerenderBoard();
            setTimeout(() => {
              this.board = [];
              this.rerenderBoard();
            }, 1000);
          }
        },
      },
      {
        btnName: '/',
        callback: () => {
          this.setValue(devider);
        },
      },
      {
        btnName: 7,
        callback: () => {
          this.setValue(`${7}`);
        },
      },
      {
        btnName: 8,
        callback: () => {
          this.setValue(`${8}`);
        },
      },
      {
        btnName: 9,
        callback: () => {
          this.setValue(`${9}`);
        },
      },
      {
        btnName: '*',
        callback: () => {
          this.setValue(multiply);
        },
      },
      {
        btnName: 4,
        callback: () => {
          this.setValue(`${4}`);
        },
      },
      {
        btnName: 5,
        callback: () => {
          this.setValue(`${5}`);
        },
      },
      {
        btnName: 6,
        callback: () => {
          this.setValue(`${6}`);
        },
      },
      {
        btnName: '-',
        callback: () => {
          this.setValue(minus);
        },
      },
      {
        btnName: 1,
        callback: () => {
          this.setValue(`${1}`);
        },
      },
      {
        btnName: 2,
        callback: () => {
          this.setValue(`${2}`);
        },
      },
      {
        btnName: 3,
        callback: () => {
          this.setValue(`${3}`);
        },
      },
      {
        btnName: '+',
        callback: () => {
          this.setValue(plus);
        },
      },
      {
        btnName: 0,
        callback: () => {
          this.setValue(`${0}`);
        },
      },
      {
        btnName: '.',
        callback: () => {
          this.setValue(dot);
        },
      },
      {
        btnName: '=',
        callback: () => {
          const newArr = calculateArrOfStringValues(this.board);

          if (newArr[0] === 'Infinity' || newArr[0] === '-Infinity') {
            this.board = ['not divide by zero'];
            this.rerenderBoard();
            setTimeout(() => {
              this.board = [];
              this.rerenderBoard();
            }, 1000);
            return;
          }

          this.board = isLastCharDot(newArr);
          this.rerenderBoard();

          rerenderResultsBoard(this.resultsBoard);
        },
      },
    ];

    const calculatorNode = renderCalculator(buttonsData);

    // adding events to input
    this.boardInput = calculatorNode.querySelector('.calculator__board');
    this.boardInput.addEventListener('input', (e) => {
      const tapedValue = e.target.value.slice(-1);
      this.setValue(tapedValue);
    });

    this.boardInput.addEventListener('keydown', (e) => {
      if (e.code === 'Backspace') {
        e.preventDefault();
      }
      if (e.code === 'Space') {
        e.preventDefault();
        return;
      }
      if (e.key === 'Enter') {
        const newArr = calculateArrOfStringValues(this.board);

        if (newArr[0] === 'Infinity' || newArr[0] === '-Infinity') {
          this.board = ['not divide by zero'];
          this.rerenderBoard();
          setTimeout(() => {
            this.board = [];
            this.rerenderBoard();
          }, 1000);
          return;
        }

        this.board = newArr;
        isLastCharDot(newArr);
        this.rerenderBoard();
        rerenderResultsBoard(this.resultsBoard);
      }
      if (e.key === 'Delete' || e.code === 'Backspace') {
        this.setValue(back);
      }
    });
    this.boardInput.addEventListener('click', (e) => {
      const end = e.target.value.length;
      e.target.setSelectionRange(end, end);
    });

    // render results board
    const results = window.localStorage.getItem('lastTenResults');
    const resultsArr = results ? JSON.parse(results) : [];

    this.resultsBoard = renderLastTenResultsBoard(resultsArr);

    // render in an outer container
    targetNode.append(calculatorNode, this.resultsBoard);
    this.rerenderBoard();
  }
}

export default Calculator;
