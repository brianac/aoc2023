import { readData } from '../../shared.ts';
import chalk from 'chalk';

export async function day1a(dataPath?: string) {
  const data = await readData(dataPath);

  const numbers = data.map((line) => {
    let firstNum: string | undefined = undefined
    let secondNum: string | undefined = undefined

    line.split('').forEach((char) => {
      if (Number(char)) {
        if (!firstNum) {
          firstNum = char
        }

        secondNum = char
      }
    })

    return firstNum + secondNum
  })

  return numbers.reduce((a,b)=>Number(a)+Number(b), 0);
}

const answer = await day1a();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
