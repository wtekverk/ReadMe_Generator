// TODO: Include packages needed for this application

const fs = require('fs')

const inquirer = require('inquirer')

inquirer.prompt([

    {
        type: 'input',
        message: 'What is the title of your Project?',
        name: 'Title'
    },

    {
        type: 'input',
        message: 'In a few sentences, describe your Project.',
        name: 'Description'
    },

    {
        type: 'input',
        message: 'What does your project need to be installed?',
        name: 'Installation'
    },

    {
        type: 'input',
        message: 'In a few sentences, how do you use your project?',
        name: 'Usage'
    },

    {
        type: 'input',
        message: 'Who or what contributed to your project?',
        name: 'Contributing'
    },

    {
        type: 'input',
        message: 'What tests can you run with your project?',
        name: 'Tests'
    },

    {
        type: 'checkbox',
        message: 'Choose a license.',
        name: 'License',
        choices: [
            'MIT', 'GNU GPLv3', 'Apache 2.0'
        ]
    },

    {
        type: 'input',
        message: 'What is your GitHub web address',
        name: 'GitHub'
    },

    {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email'
    },





]).then((response) => {


    const fileName = `README.md`;

    fs.writeFile(fileName, `
# ${response.Title}

## Description
${response.Description}


## Table of Contents 


## Installation
${response.Installation}


## Usage
${response.Usage}


## License


## Contributing
${response.Contributing}

## Tests
${response.Tests}


## Questions
GitHub: (https://${response.GitHub})
Email: (https://${response.Email})











`, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log('Great Job!')
        }
    })



})



// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under


// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README