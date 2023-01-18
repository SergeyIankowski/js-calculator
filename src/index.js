import './sass/main.scss';
import Calculator from './components/calculator';

const appContainer = document.querySelector('.app');

const initialValueStr = window.localStorage.getItem('result');
const initialValue = initialValueStr ? JSON.parse(window.localStorage.getItem('result')) : [];
const calculator = new Calculator(initialValue);

calculator.init(appContainer);
