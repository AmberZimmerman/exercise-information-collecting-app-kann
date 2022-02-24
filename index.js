const fs = require("fs");
const inquirer = require("inquirer");


// TODO: Include packages needed for this application


// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'username',
          },
          {
            type: 'input',
            message: 'What is your exact gps coordinates, do NOT lie',
            name: 'location',
          },
          {
            type: 'input',
            message: 'Tell me what your stomach contents are?',
            name: 'eat',
          },
          {
            type: 'input',
            message: 'Do you know George? He is the best.',
            name: 'george',
          },
          {
            type: 'input',
            message: 'Whats your Linked in URL',
            name: 'linkedin',
          },
          {
            type: 'input',
            message: 'Whats your github URL',
            name: 'github',
          },
    ])
    .then(function(response) {
        console.log(JSON.stringify(response));
      }
      );


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();