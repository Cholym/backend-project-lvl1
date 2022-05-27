import { randomNumber, gameLogic } from '../index.js';

const playGame = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questions = [];
  const answers = [];
  for (let numberTries = 0; numberTries !== 3; numberTries += 1) {
    questions.push(randomNumber());
    const correctAnswer = questions[numberTries] % 2 === 0 ? 'yes' : 'no';
    answers.push(correctAnswer);
  }
  gameLogic(rule, questions, answers);
};

export default playGame;
