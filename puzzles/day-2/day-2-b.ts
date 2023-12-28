import { readData } from '../../shared.ts';
import chalk from 'chalk';

export async function day2b(dataPath?: string) {
  const data = await readData(dataPath);

  const total = data.reduce((acc, game) => {
    const parts = game.split(':')
    const id = parts[0].split(' ')[1]
    const pulls = parts[1].split(';')
    
    const highest = {
      red: 0,
      blue: 0,
      green: 0
    }

    pulls.forEach((pull) => {      
      pull.split(',').forEach((p) => {
        const s = p.split(' ')
        const num = s[1]
        const color = s[2]

        if (highest[color] < num) {
          highest[color] = Number(num)
        }
      })
    })

    return acc + highest.red*highest.green*highest.blue
  }, 0)

  return total;
}

const answer = await day2b();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
