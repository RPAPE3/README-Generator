// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      message: 'What is the description of your project?',
      name: 'description',
    },
    {
      message: 'What is the installation of your project?',
      name: 'installation',
    },
    {
      message: 'What is the usage information of your project?',
      name: 'usage',
    },
    {
      type: 'list',
      message: "Choose a license for your project.",
      choices: ['Apache_2.0', 'Boost_1.0', 'BSD_3--Clause', 'BSD_2--Clause', 'MIT'],
      name: 'license'
    },
    {
      message: 'What is the contribution guidelines of your project?',
      name: 'contribution',
    },
    {
      message: 'What is the test instructions of your project?',
      name: 'test',
    },
    {
      message: 'What is your GitHub Username?',
      name: 'username',
    },
    {
      message: 'What is your email address?',
      name: 'email',
    }
];

// TODO: Create a function to write README file

function writeToFile(data) {
    fs.writeFile("README.md", generateMarkdown(data), (err) => (err) ? console.log("Error with generating a README") : console.log("Success! README generated"))
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile(data);
    })
};

// Function call to initialize app
init();
