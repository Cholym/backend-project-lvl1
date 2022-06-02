// eslint-disable-next-line import/no-named-default
import { default as gameLogic, timesPlayToWin } from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const generateProgression = () => {
  const rowOfNumbers = [];
  const maxNumberValue = 50;
  const maxDifferenceValue = 10;
  const number = generateRandomNumber(0, maxNumberValue);
  const difference = generateRandomNumber(1, maxDifferenceValue);
  const rowLength = 10;
  for (let nextNumber = number; rowOfNumbers.length < rowLength; nextNumber += difference) {
    rowOfNumbers.push(nextNumber);
  }
  return rowOfNumbers;
};

const rule = 'What number is missing in the progression?';

const playGame = () => {
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
