import { gameLogic, timesPlayToWin } from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const answer = (num1, num2, sign) => {
  switch (sign) {
    case '-': {
      return num1 - num2;
    }
    case '+': {
      return num1 + num2;
    }
    default: {
      return num1 * num2;
    }
  }
};

const playGame = () => {
  const rule = 'What is the result of the expression?';
  const questionsAndAnswers = [];

  for (let numberTries = 0; numberTries !== timesPlayToWin; numberTries += 1) {
    const mathSymbols = '-+*';
    const randomIndex = Math.floor(Math.random() * mathSymbols.length);
    const randomSign = mathSymbols.charAt(randomIndex);
    const maxNumberValue = 100;
    const number1 = generateRandomNumber(0, maxNumberValue);
    const number2 = generateRandomNumber(0, maxNumberValue);
    const question = `${number1} ${randomSign} ${number2}`;
    const calcSign = randomSign;
    questionsAndAnswers.push([question, String(answer(number1, number2, calcSign))]);
  }
  gameLogic(rule, questionsAndAnswers);
};

export default playGame;
