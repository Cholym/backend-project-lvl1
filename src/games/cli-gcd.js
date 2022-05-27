import { randomNumber, gameLogic } from '../index.js';

const gcdGame = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const questions = [];
  const answers = [];

  for (let numberTries = 0; numberTries !== 3; numberTries += 1) {
    const maxNumberValue = 100;
    let number1 = randomNumber(1, maxNumberValue);
    let number2 = randomNumber(1, maxNumberValue);
    questions.push(`${number1} ${number2}`);
    const answer = (num1, num2) => {
      for (let diviser = Math.min(num1, num2); diviser !== 0; diviser -= 1) {
        if (num1 % diviser === 0 && num2 % diviser === 0) {
            return diviser;
        }
      }
    }
    answers.push(answer(number1, number2));
    number1 = 0;
    number2 = 0;
  }
  gameLogic(rule, questions, answers);
};

export default gcdGame;
