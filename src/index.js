import readlineSync from 'readline-sync';

const gameLogic = (rule, questionsAndAnswers) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, %s!', userName);
  console.log(rule);
  const timesPlayToWin = 3;
  for (let timesPlay = 0; timesPlay !== timesPlayToWin; timesPlay += 1) {
    console.log('Question:', questionsAndAnswers[timesPlay][0]);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === questionsAndAnswers[timesPlay][1]) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${questionsAndAnswers[timesPlay][1]}'. 
Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default gameLogic;
