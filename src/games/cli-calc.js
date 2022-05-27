import { randomNumber, gameLogic } from '../index.js';

const playGame = () => {
  const rule = 'What is the result of the expression?';
  const questions = [];
  const answers = [];
  const randomCalculationSigns = [];

  const mathSymbols = '-+*';

  for (let numberTries = 0; numberTries !== 3; numberTries += 1) {
    randomCalculationSigns.push(mathSymbols.charAt(Math.floor(Math.random() * mathSymbols.length)));
    const maxNumberValue = 100;
    let number1 = randomNumber(0, maxNumberValue);
    let number2 = randomNumber(0, maxNumberValue);
    questions.push(`${number1} ${randomCalculationSigns[numberTries]} ${number2}`);
    const calcSign = randomCalculationSigns[numberTries];
    const answer = (num1, sign, num2) => {
      switch (sign) {
        case '-': return num1 - num2;
        case '+': return num1 + num2;
        default: return num1 * num2;
      }
    };
    answers.push(answer(number1, calcSign, number2));
    number1 = 0;
    number2 = 0;
  }
  gameLogic(rule, questions, answers);
};

export default playGame;
