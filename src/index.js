import readlineSync from 'readline-sync';

export const timesPlayToWin = 3;

export default (rule, questionsAndAnswers) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, %s!', userName);
  console.log(rule);
  // eslint-disable-next-line no-restricted-syntax
  for (const gameData of questionsAndAnswers) {
    const [question, answer] = gameData;
    console.log('Question:', question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
