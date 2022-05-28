import gameLogic from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const playGame = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionsAndAnswers = [];
  for (let numberTries = 0; numberTries !== 3; numberTries += 1) {
    const maxNumberValue = 100;
    const minNumber = 0;
    const pairQuestionAnswer = [];
    pairQuestionAnswer.push(generateRandomNumber(minNumber, maxNumberValue));
    const correctAnswer = pairQuestionAnswer[0] % 2 === 0 ? 'yes' : 'no';
    pairQuestionAnswer.push(correctAnswer);
    questionsAndAnswers.push(pairQuestionAnswer);
  }
  gameLogic(rule, questionsAndAnswers);
};

export default playGame;
