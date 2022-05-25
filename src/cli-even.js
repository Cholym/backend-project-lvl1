import readLineSync from 'readline-sync';

const game = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');
  console.log('Hello, %s!', userName);
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(rule);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let flagIfCorrect;
  for (let timesPlay = 0; timesPlay !== 3; timesPlay += 1) {
    const randomNumber = getRandomInt(100);
    console.log('Question: ', randomNumber);
    const userAnswer = readLineSync.question('Your answer: ');
    console.log(userAnswer);
    flagIfCorrect = false;
    if (((userAnswer === 'yes') && (randomNumber % 2 === 0)) || ((userAnswer === 'no') && (randomNumber % 2 !== 0))) {
      console.log('Correct!');
      flagIfCorrect = true;
    } else {
      timesPlay = 0;
      let oppositeAnswer;
      if (userAnswer === 'yes') {
        oppositeAnswer = 'no';
      } else {
        oppositeAnswer = 'yes';
      }
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${oppositeAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (flagIfCorrect === true) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default game;
