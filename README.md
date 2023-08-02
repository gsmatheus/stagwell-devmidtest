# stagwell-devmidtest

The project is a command-line application (CLI) developed in TypeScript that provides an interactive menu for performing various mathematical operations. Users can choose from a simple calculator, find prime numbers, calculate factorials, check for palindromes, generate multiplication tables, count vowels, calculate grade averages, and compute investment interests. With a simple and user-friendly interface, the project allows users to perform these operations quickly and efficiently through the terminal.

## Installation

To get started, you need to have Node.js installed on your machine. Visit the official Node.js website (https://nodejs.org/) and download the recommended version for your operating system. Node.js includes npm (Node Package Manager), which will be used to install the project's dependencies.

### Installing Dependencies

Open the terminal in the project folder and run one of the following commands, depending on the package manager you want to use:

```bash
# Using npm
npm install

# Using yarn
yarn install
```

This will install all the dependencies listed in the `package.json` file and create a `node_modules` folder with the necessary packages.

## Testing

The project has a comprehensive suite of tests to ensure the quality and integrity of the functionalities. The tests are written using an appropriate testing library for TypeScript projects, ensuring coverage of the main use cases.

To run the tests, use the following command:

```bash
# Using npm
npm test

# Using yarn
yarn test
```

This will execute the automated tests and display the results in the terminal. Make sure all tests are passing before making changes to the code or pushing alterations to the repository. Tests provide an additional layer of safety and help prevent regressions in future updates.

## Project Build

To build the project, run the following command:

```bash
# Using npm
npm run compile

# Using yarn
yarn compile
```

This command will compile the TypeScript code into JavaScript and place it in the output folder specified in the `tsconfig.json` file. The project will be ready to run after the compilation.

## Running the Project

After installing the dependencies and completing the build, you can start the project with the following command:

```bash
# Using npm
npm start

# Using yarn
yarn start
```

This will start the application and display the interactive menu in the terminal. You can select one of the available options to perform the mathematical operations.
