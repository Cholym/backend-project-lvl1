// eslint-disable-next-line import/no-named-default
import { default as gameLogic, timesPlayToWin } from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const isPrime = (num) => {
  if (num === 2 || num === 3) return true;
  if (num <= 1 || num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; (i * i) <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playGame = () => {
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
