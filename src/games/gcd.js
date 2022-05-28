import gameLogic from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const playGame = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const questionsAndAnswers = [];

  for (let numberTries = 0; numberTries !== 3; numberTries += 1) {
    const maxNumberValue = 100;
    const pairQuestionAnswer = [];
    let number1 = generateRandomNumber(1, maxNumberValue);
    let number2 = generateRandomNumber(1, maxNumberValue);
    pairQuestionAnswer.push(`${number1} ${number2}`);
    let answer;
    for (let divider = Math.min(number1, number2); divider !== 0; divider -= 1) {
      if (number1 % divider === 0 && number2 % divider === 0) {
        answer = String(divider);
        break;
      }
    }
    pairQuestionAnswer.push(answer);
    questionsAndAnswers.push(pairQuestionAnswer);
    number1 = 0;
    number2 = 0;
  }
  gameLogic(rule, questionsAndAnswers);
};

export default playGame;
