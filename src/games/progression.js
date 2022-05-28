import gameLogic from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const playGame = () => {
  const rule = 'What number is missing in the progression?';
  const questionsAndAnswers = [];

  for (let numberTries = 0; numberTries !== 3; numberTries += 1) {
    const pairQuestionAnswer = [];
    const maxNumberValue = 50;
    const maxDifferenceValue = 10;
    let number = generateRandomNumber(0, maxNumberValue);
    let difference = generateRandomNumber(1, maxDifferenceValue);
    const question = [];
    for (let nextNumber = number; question.length < 10; nextNumber += difference) {
      question.push(nextNumber);
    }
    let indexOfHiddenNumber = generateRandomNumber(0, question.length - 1);
    const hiddenNumber = question[indexOfHiddenNumber];
    question[indexOfHiddenNumber] = '..';
    pairQuestionAnswer.push(question.join(' '));
    const answer = String(hiddenNumber);
    pairQuestionAnswer.push(answer);
    questionsAndAnswers.push(pairQuestionAnswer);
    number = 0;
    difference = 0;
    indexOfHiddenNumber = 0;
  }
  gameLogic(rule, questionsAndAnswers);
};

export default playGame;
