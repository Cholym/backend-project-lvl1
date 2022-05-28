import gameLogic from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const playGame = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionsAndAnswers = [];
  for (let numberTries = 0; numberTries !== 3; numberTries += 1) {
    const pairQuestionAnswer = [];
    const maxNumberValue = 100;
    pairQuestionAnswer.push(generateRandomNumber(0, maxNumberValue));
    let countDividers = 0;
    for (let ifDivider = 1; ifDivider !== pairQuestionAnswer[0] + 1; ifDivider += 1) {
      if (pairQuestionAnswer[0] % ifDivider === 0) {
        countDividers += 1;
      }
    }
    const correctAnswer = (countDividers === 2) ? 'yes' : 'no';
    pairQuestionAnswer.push(correctAnswer);
    questionsAndAnswers.push(pairQuestionAnswer);
  }
  gameLogic(rule, questionsAndAnswers);
};

export default playGame;
