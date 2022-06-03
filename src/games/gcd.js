import gameLogic, { timesPlayToWin } from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findCommonDivider = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return findCommonDivider(num2, num1 % num2);
};

const generateRandomForOneRound = () => {
  const maxNumberValue = 100;
  const number1 = generateRandomNumber(1, maxNumberValue);
  const number2 = generateRandomNumber(1, maxNumberValue);
  const question = (`${number1} ${number2}`);
  const answer = String(findCommonDivider(number1, number2));
  return ([question, answer]);
};

const playGame = () => {
  const questionsAndAnswers = [];
  for (let numberTries = 0; numberTries < timesPlayToWin; numberTries += 1) {
    questionsAndAnswers.push(generateRandomForOneRound());
  }
  gameLogic(rule, questionsAndAnswers);
};

export default playGame;
