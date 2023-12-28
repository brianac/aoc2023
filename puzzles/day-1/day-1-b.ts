import { readData } from '../../shared.ts';
import chalk from 'chalk';

const map = {
  one: '1',
  two: '2', 
  three: '3',
  four: '4',
  five: '5',
  six: '6', 
  seven: '7',
  eight: '8',
  nine: '9',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
}

export async function day1b(dataPath?: string) {
  const data = await readData(dataPath);

  const numbers = data.map((line) => {
    let matches = []

    Object.keys(map).forEach(el => {
      matches.push(...line.matchAll(new RegExp(el, "g")))
    })
    matches.sort((a, b) => a.index - b.index);

    return map[matches[0][0]] + map[matches[matches.length-1][0]]
  })

  return numbers.reduce((a,b)=>Number(a)+Number(b), 0);
}

const answer = await day1b();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
