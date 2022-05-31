import { gameLogic, timesPlayToWin } from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const playGame = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionsAndAnswers = [];
  for (let numberTries = 0; numberTries !== timesPlayToWin; numberTries += 1) {
    const minNumber = 1;
    const maxNumberValue = 100;
    const question = generateRandomNumber(minNumber, maxNumberValue);
    const isEven = (number) => (number % 2 === 0);
    const check = (number) => {
      const result = isEven(number) ? 'yes' : 'no';
      return result;
    };
    const correctAnswer = check(question);
    questionsAndAnswers.push([question, correctAnswer]);
  }
  gameLogic(rule, questionsAndAnswers);
};

export default playGame;
