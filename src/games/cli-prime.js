import { randomNumber, gameLogic } from '../index.js';

const primeGame = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questions = [];
  const answers = [];
  for (let numberTries = 0; numberTries !== 3; numberTries += 1) {
    const maxNumberValue = 100;
    questions.push(randomNumber(0, maxNumberValue));
    let countDividers = 0;
    for (let ifDivider = 1; ifDivider === questions[numberTries]; ifDivider += 1) {
      if (questions[numberTries] % ifDivider === 0) {
        countDividers += 1;
      }
    }
    const correctAnswer = countDividers === 2 ? 'yes' : 'no';
    answers.push(correctAnswer);
  }
  gameLogic(rule, questions, answers);
};

export default primeGame;
