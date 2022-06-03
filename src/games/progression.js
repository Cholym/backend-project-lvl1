import gameLogic, { timesPlayToWin } from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const rule = 'What number is missing in the progression?';

const generateProgression = () => {
  const question = [];
  const maxNumberValue = 50;
  const maxDifferenceValue = 10;
  const number = generateRandomNumber(0, maxNumberValue);
  const difference = generateRandomNumber(1, maxDifferenceValue);
  const rowLength = 10;
  for (let nextNumber = number; question.length < rowLength; nextNumber += difference) {
    question.push(nextNumber);
  }
  const indexOfHiddenNumber = generateRandomNumber(0, question.length - 1);
  const answer = String(question[indexOfHiddenNumber]);
  question[indexOfHiddenNumber] = '..';
  return ([question.join(' '), answer]);
};

const playGame = () => {
  const questionsAndAnswers = [];

  for (let numberTries = 0; numberTries < timesPlayToWin; numberTries += 1) {
    questionsAndAnswers.push(generateProgression());
  }
  gameLogic(rule, questionsAndAnswers);
};

export default playGame;
