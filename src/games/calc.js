import gameLogic from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const playGame = () => {
  const rule = 'What is the result of the expression?';
  const questionsAndAnswers = [];
  const randomCalculationSigns = [];

  const mathSymbols = '-+*';

  for (let numberTries = 0; numberTries !== 3; numberTries += 1) {
    randomCalculationSigns.push(mathSymbols.charAt(Math.floor(Math.random() * mathSymbols.length)));
    const maxNumberValue = 100;
    let number1 = generateRandomNumber(0, maxNumberValue);
    let number2 = generateRandomNumber(0, maxNumberValue);
    const pairQuestionAnswer = [];
    pairQuestionAnswer.push(`${number1} ${randomCalculationSigns[numberTries]} ${number2}`);
    const calcSign = randomCalculationSigns[numberTries];
    const answer = (num1, sign, num2) => {
      let numberTypeAnswer;
      switch (sign) {
        case '-': {
          numberTypeAnswer = num1 - num2;
          break;
        }
        case '+': {
          numberTypeAnswer = num1 + num2;
          break;
        }
        default: {
          numberTypeAnswer = num1 * num2;
        }
      }
      return String(numberTypeAnswer);
    };
    pairQuestionAnswer.push(answer(number1, calcSign, number2));
    questionsAndAnswers.push(pairQuestionAnswer);
    number1 = 0;
    number2 = 0;
  }
  gameLogic(rule, questionsAndAnswers);
};

export default playGame;
