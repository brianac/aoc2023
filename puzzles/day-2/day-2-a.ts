import { readData } from '../../shared.ts';
import chalk from 'chalk';

export async function day2a(dataPath?: string) {
  const data = await readData(dataPath);

  const possibleVals = {
    red: 12,
    green: 13,
    blue: 14
  }

  const total = data.reduce((acc, game) => {
    const parts = game.split(':')
    const id = parts[0].split(' ')[1]
    const pulls = parts[1].split(';')

    const valid = pulls.map((pull) => {      
      return pull.split(',').map((p) => {
        const s = p.split(' ')
        const num = s[1]
        const color = s[2]

        if (num > possibleVals[color]) {
          return false
        }
        return true
      })
    }).flat().filter(e => e === false)

    if (!valid.length) {
      return acc + Number(id)
    }
    return acc
  }, 0)

  return total;
}

const answer = await day2a();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
