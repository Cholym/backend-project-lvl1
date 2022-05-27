import readlineSync from 'readline-sync';

const gameRule = (str) => {
  console.log(str);
};

const randomNumber = () => {
  const maxValue = 100;
  return Math.floor(Math.random() * maxValue);
};

const gameLogic = (rule, questions, answers) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, %s!', userName);
  gameRule(rule);
  for (let timesPlay = 0; timesPlay !== 3; timesPlay += 1) {
    console.log('Question: ', questions[timesPlay]);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === answers[timesPlay]) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answers[timesPlay]}'. Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export { gameLogic };
export { randomNumber };
