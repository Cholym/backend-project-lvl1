import generateRandomNumber from '../randomNumber.js';
// eslint-disable-next-line import/no-named-default
import { default as gameLogic, timesPlayToWin } from '../index.js';

const answer = (num1, num2, sign) => {
  switch (sign) {
    case '-': {
      return num1 - num2;
    }
    case '+': {
      return num1 + num2;
    }
    case '*': {
      return num1 * num2;
    }
    default: {
      throw new Error(`operation ${sign} is not supported`);
    }
  }
};

const rule = 'What is the result of the expression?';
const maxNumberValue = 100;
const mathSymbols = '-+*';
const questionsAndAnswers = [];

const generateRandomForOneRound = () => {
  const randomIndex = Math.floor(Math.random() * mathSymbols.length);
  const randomSign = mathSymbols.charAt(randomIndex);
  const number1 = generateRandomNumber(0, maxNumberValue);
  const number2 = generateRandomNumber(0, maxNumberValue);
  const question = `${number1} ${randomSign} ${number2}`;
  questionsAndAnswers.push([question, String(answer(number1, number2, randomSign))]);
};

const playGame = () => {
  for (let numberTries = 0; numberTries < timesPlayToWin; numberTries += 1) {
    generateRandomForOneRound();
  }
  gameLogic(rule, questionsAndAnswers);
};

export default playGame;
