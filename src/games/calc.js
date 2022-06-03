import generateRandomNumber from '../randomNumber.js';
import gameLogic, { timesPlayToWin } from '../index.js';

const rule = 'What is the result of the expression?';
const maxNumberValue = 100;
const mathSymbols = '-+*';

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

const generateRandomForOneRound = () => {
  const randomIndex = generateRandomNumber(0, mathSymbols.length - 1);
  const randomSign = mathSymbols.charAt(randomIndex);
  const number1 = generateRandomNumber(0, maxNumberValue);
  const number2 = generateRandomNumber(0, maxNumberValue);
  const question = `${number1} ${randomSign} ${number2}`;
  return [question, String(answer(number1, number2, randomSign))];
};

const playGame = () => {
  const questionsAndAnswers = [];
  for (let numberTries = 0; numberTries < timesPlayToWin; numberTries += 1) {
    questionsAndAnswers.push(generateRandomForOneRound());
  }
  gameLogic(rule, questionsAndAnswers);
};

export default playGame;
