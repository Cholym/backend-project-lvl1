import { gameLogic, timesPlayToWin } from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const countDividers = (num) => {
  let result = 0;
  for (let ifDivider = 1; ifDivider !== num + 1; ifDivider += 1) {
    if (num % ifDivider === 0) result += 1;
  }
  return result;
};

const isPrime = (num) => countDividers(num) === 2;

const playGame = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionsAndAnswers = [];
  for (let numberTries = 0; numberTries !== timesPlayToWin; numberTries += 1) {
    const maxNumberValue = 100;
    const question = generateRandomNumber(0, maxNumberValue);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    questionsAndAnswers.push([question, correctAnswer]);
  }
  gameLogic(rule, questionsAndAnswers);
};

export default playGame;
