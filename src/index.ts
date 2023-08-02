import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import {Menu} from './utils/menu';
import {
  calculateResult,
  printFirstPrimeNumbers,
  calculateFactorial,
  isPalindrome,
  generateMultiplicationTable,
  countVowels,
  calculeAverage,
  calculateInvestment,
} from './questions';
import * as colors from './utils/colors';

// Create a reusable readline interface
const menu = new Menu(readline.createInterface({input, output}));

// Helper function to print a separator line with color
function printSeparator() {
  console.log(
    colors.FGYELLOW,
    '-----------------------------------',
    colors.RESET
  );
}

// Function to show the default menu and ask the user what operation to perform
async function defaultMenu(): Promise<string> {
  printSeparator();
  console.log(colors.FGYELLOW, 'What do you want to do?', colors.RESET);
  printSeparator();

  const chooseQuestion = await menu.askMultipleChoice('Question:', [
    'Simple Calculator',
    'Prime Numbers',
    'Factorial',
    'Palindrome',
    'Table',
    'Vowel Counter',
    'Grade Average',
    'Interest Calculation',
    'Exit',
  ]);

  return chooseQuestion;
}

// Function to perform simple calculator operations (addition, subtraction, multiplication, division)
async function simpleCalculatorMenu() {
  printSeparator();
  console.log(colors.FGYELLOW, 'Simple Calculator', colors.RESET);
  printSeparator();

  const firstNumber = await menu.askNumber('Enter first number: ');
  const secondNumber = await menu.askNumber('Enter second number: ');
  const operator = await menu.askMultipleChoice('Choose an operator', [
    '+',
    '-',
    '*',
    '/',
  ]);

  const {result} = calculateResult({
    firstNumber,
    secondNumber,
    operator,
  });

  console.log(colors.FGGREEN, `Result: ${result}\n`, colors.RESET);
}

// Function to find and print the first prime numbers
async function primeNumbersMenu() {
  printSeparator();
  console.log(colors.FGYELLOW, 'Prime Numbers', colors.RESET);
  printSeparator();

  const count = await menu.askNumber('Enter count: ');

  const {number} = printFirstPrimeNumbers({count});

  console.log(colors.FGGREEN, `Result: ${number}\n`, colors.RESET);
}

// Function to calculate and print the factorial of a given number
async function factorialMenu() {
  printSeparator();
  console.log(colors.FGYELLOW, 'Factorial', colors.RESET);
  printSeparator();

  const number = await menu.askNumber('Enter number: ');

  const {factorial} = calculateFactorial({number});

  console.log(colors.FGGREEN, `Result: ${factorial}\n`, colors.RESET);
}

// Function to check if a given word is a palindrome
async function palindromeMenu() {
  printSeparator();
  console.log(colors.FGYELLOW, 'Palindrome', colors.RESET);
  printSeparator();

  const word = await menu.ask('Enter word: ');

  const {is_palindrome} = isPalindrome({word});

  console.log(colors.FGGREEN, `Result: ${is_palindrome}\n`, colors.RESET);
}

// Function to generate and print a multiplication table for a given number
async function tableMultiplicationMenu() {
  printSeparator();
  console.log(colors.FGYELLOW, 'Table Multiplication', colors.RESET);
  printSeparator();

  const number = await menu.askNumber('Enter number: ');

  const {table} = generateMultiplicationTable({count: number});

  for (const value of table) {
    console.log(
      colors.FGCYAN,
      `${number} x ${value / number} = ${value}`,
      colors.RESET
    );
  }
}

// Function to count the number of vowels in a given text
async function vowelCounterMenu() {
  printSeparator();
  console.log(colors.FGYELLOW, 'Vowel Counter', colors.RESET);
  printSeparator();

  const text = await menu.ask('Enter text: ');

  const {count} = countVowels({text});

  console.log(colors.FGGREEN, `Result: ${count}\n`, colors.RESET);
}

// Function to calculate the average grade from three input grades
async function gradeAverageMenu() {
  printSeparator();
  console.log(colors.FGYELLOW, 'Grade Average', colors.RESET);
  printSeparator();

  const firstGrade = await menu.askNumber('Enter first grade: ');
  const secondGrade = await menu.askNumber('Enter second grade: ');
  const thirdGrade = await menu.askNumber('Enter third grade: ');

  const {average} = calculeAverage({
    numbers: [firstGrade, secondGrade, thirdGrade],
  });

  console.log(colors.FGGREEN, `Result: ${average}\n`, colors.RESET);
}

// Function to calculate the total amount of an investment with interest
async function interestCalculationMenu() {
  printSeparator();
  console.log(colors.FGYELLOW, 'Interest Calculation', colors.RESET);
  printSeparator();

  const initialAmount = await menu.askNumber('Enter initial amount: ');
  const interestRate = await menu.askNumber('Enter interest rate: ');
  const period = await menu.askNumber('Enter period: ');

  const {total} = calculateInvestment({
    amount: initialAmount,
    interest: interestRate,
    months: period,
  });

  console.log(colors.FGGREEN, `Result: ${total}\n`, colors.RESET);
}

async function main() {
  let chooseQuestion = await defaultMenu();

  while (chooseQuestion !== 'Exit') {
    switch (chooseQuestion) {
      case 'Simple Calculator':
        await simpleCalculatorMenu();
        break;
      case 'Prime Numbers':
        await primeNumbersMenu();
        break;
      case 'Factorial':
        await factorialMenu();
        break;
      case 'Palindrome':
        await palindromeMenu();
        break;
      case 'Table':
        await tableMultiplicationMenu();
        break;
      case 'Vowel Counter':
        await vowelCounterMenu();
        break;
      case 'Grade Average':
        await gradeAverageMenu();
        break;
      case 'Interest Calculation':
        await interestCalculationMenu();
        break;
      default:
        break;
    }

    if (chooseQuestion) {
      const moreQuestions = await menu.askYesOrNo('\nDo you want to continue?');

      if (!moreQuestions) {
        break;
      }
    }

    // eslint-disable-next-line
    console.clear();
    chooseQuestion = await defaultMenu();
  }
}

main();
