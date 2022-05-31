import { gameLogic, timesPlayToWin } from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const generateProgression = () => {
  const col = [];
  const maxNumberValue = 50;
  const maxDifferenceValue = 10;
  const number = generateRandomNumber(0, maxNumberValue);
  const difference = generateRandomNumber(1, maxDifferenceValue);
  for (let nextNumber = number; col.length < 10; nextNumber += difference) {
    col.push(nextNumber);
  }
  return col;
};

const playGame = () => {
  const rule = 'What number is missing in the progression?';
  const questionsAndAnswers = [];

  for (let numberTries = 0; numberTries !== timesPlayToWin; numberTries += 1) {
    const question = generateProgression();
    const indexOfHiddenNumber = generateRandomNumber(0, question.length - 1);
    const answer = String(question[indexOfHiddenNumber]);
    question[indexOfHiddenNumber] = '..';
    questionsAndAnswers.push([question.join(' '), answer]);
  }
  gameLogic(rule, questionsAndAnswers);
};

export default playGame;
