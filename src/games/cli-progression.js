import { randomNumber, gameLogic } from '../index.js';

const progressionGame = () => {
  const rule = 'What number is missing in the progression?';
  const questions = [];
  const answers = [];

  for (let numberTries = 0; numberTries !== 3; numberTries += 1) {
    const maxNumberValue = 50;
    const maxDifferenceValue = 10;
    let number = randomNumber(0, maxNumberValue);
    let difference = randomNumber(1, maxDifferenceValue);
    let question = [];
    for (let nextNumber = number; question.length < 10; nextNumber += difference) {
      question.push(nextNumber);
    }
    let indexOfHiddenNumber = randomNumber(0, question.length);
    let hiddenNumber = question[indexOfHiddenNumber]; 
    question[indexOfHiddenNumber] = '..';
    questions.push(question.join(' '));
    
    const answer = hiddenNumber;
    answers.push(answer);
    number = 0;
    difference = 0;
    indexOfHiddenNumber = 0;
  }
  gameLogic(rule, questions, answers);
};

export default progressionGame;
