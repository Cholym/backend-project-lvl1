// eslint-disable-next-line import/no-named-default
import { default as gameLogic, timesPlayToWin } from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);

const playGame = () => {
  const questionsAndAnswers = [];
  for (let numberTries = 0; numberTries !== timesPlayToWin; numberTries += 1) {
    const minNumber = 1;
    const maxNumberValue = 100;
    const question = generateRandomNumber(minNumber, maxNumberValue);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    questionsAndAnswers.push([question, correctAnswer]);
  }
  gameLogic(rule, questionsAndAnswers);
};

export default playGame;
