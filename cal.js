const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a math question (eg: What is 5 plus 7?): ', (question) => {
  const regex = /What is (\d+) (plus|minus|multiplied by|divided by) (\d+)\?/;
  const match = question.match(regex);

  if (!match) {
    console.log('Invalid question');
    rl.close();
    return;
  }

  const [, num1, operator, num2] = match;

  let result;
  switch (operator) {
    case 'plus':
      result = Number(num1) + Number(num2);
      break;
    case 'minus':
      result = Number(num1) - Number(num2);
      break;
    case 'multiplied by':
      result = Number(num1) * Number(num2);
      break;
    case 'divided by':
      result = Number(num1) / Number(num2);
      break;
    default:
      console.log('Invalid operator');
      rl.close();
      return;
  }

  console.log(`${num1} ${operator} ${num2} is ${result}`);
  rl.close();
});
