// eslint-disable-next-line import/no-named-default
import { default as gameLogic, timesPlayToWin } from '../index.js';
import generateRandomNumber from '../randomNumber.js';

// не сообразила, как рекурсировать
// eslint-disable-next-line consistent-return
const findCommonDivider = (num1, num2) => {
  for (let divider = Math.min(num1, num2); divider !== 0; divider -= 1) {
    if (num1 % divider === 0 && num2 % divider === 0) {
      return divider;
    }
  }
};

const rule = 'Find the greatest common divisor of given numbers.';

const playGame = () => {
  const questionsAndAnswers = [];

  for (let numberTries = 0; numberTries !== timesPlayToWin; numberTries += 1) {
    const maxNumberValue = 100;
    const number1 = generateRandomNumber(1, maxNumberValue);
    const number2 = generateRandomNumber(1, maxNumberValue);
    const question = (`${number1} ${number2}`);
    const answer = String(findCommonDivider(number1, number2));
    questionsAndAnswers.push([question, answer]);
  }
  gameLogic(rule, questionsAndAnswers);
};

export default playGame;
