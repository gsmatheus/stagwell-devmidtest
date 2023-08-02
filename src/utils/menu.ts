import * as readline from 'node:readline/promises';
import * as colors from './colors';

export class Menu {
  constructor(private readonly rl: readline.Interface) {}

  public async ask(question: string): Promise<string> {
    const answer = await this.rl.question(question);
    this.rl.pause();

    return answer.trim();
  }

  public async askNumber(question: string): Promise<number> {
    const answer = await this.ask(question);
    const number = Number(answer);

    // todo: improve error handling
    if (isNaN(number)) {
      throw new Error('Invalid number');
    }

    return number;
  }

  public async askYesOrNo(question: string): Promise<boolean> {
    const answer = await this.askMultipleChoice(question, ['Yes', 'No']);
    return answer === 'Yes';
  }

  public async askMultipleChoice(
    question: string,
    choices: string[]
  ): Promise<string> {
    const choicesString = choices
      .map((choice, index) => {
        return `${index + 1}. ${choice}`;
      })
      .join('\n');

    const answer = await this.ask(
      `${colors.FGGREEN}${colors.BRIGHT}${question}${colors.RESET}\n\n${colors.FGBOLDBLACK}${choicesString}${colors.RESET}\n\n`
    );

    const choiceIndex = Number(answer) - 1;
    if (choiceIndex < 0 || choiceIndex >= choices.length) {
      // Return empty chooice if invalid choice
      return '';
    }

    this.rl.pause();

    return choices[choiceIndex];
  }
}
