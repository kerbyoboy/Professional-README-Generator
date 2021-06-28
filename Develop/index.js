// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// `https://img.shields.io/badge/license-Something-blue`

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username ',
        message: 'Enter GitHub username',
        validate: userNameInput => {
            if (userNameInput) {
                return true;
            } else {
                console.log('Please enter username to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Enter email address',
        validate: emailAddressInput => {
            if (emailAddressInput) {
                return true;
            } else {
                console.log('Please enter an email to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
            name: 'projectName',
                message: 'Enter project name',
                    validate: projectNameInput => {
                        if (projectNameInput) {
                            return true;
                        } else {
                            console.log('Enter project name to continue');
                            return false;
                        }
                    }
    },
    {
        type: 'input',
            name: 'install',
                message: 'Steps required to install project',
                    validate: installInput => {
                        if (installInput) {
                            return true;
                        } else {
                            console.log('Enter steps required to install project');
                            return false;
                        }
                    }
    },
    {
        type: 'input',
            name: 'description',
                message: 'Enter project description',
                    validate: descriptionInput => {
                        if (descriptionInput) {
                            return true;
                        } else {
                            console.log('Enter project description to continue');
                            return false;
                        }
                    }
    },
    {
        type: 'list',
            name: 'license',
                message: 'Choose a license: ',
                    choices: ['Apache', 'GNU', 'MIT', 'Mozilla', 'None']
    },
    {
    type: 'input',
    name: 'usage',
        message: 'Please enter instructions and examples of usage',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Enter instruction to continue');
                    return false;
                }
            }
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('README.md has been created.')
    });
}

// TODO: Create a function to initialize app
function init() {
 inquirer
    .prompt(questions)
    .then(function (data) {
        const fileName = './README.md'
        const markdownFile = generateMarkdown(data)
        writeToFile(fileName, markdownFile)
    })
}

// Function call to initialize app
init();