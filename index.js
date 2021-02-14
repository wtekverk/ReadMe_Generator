const fs = require('fs')

const inquirer = require('inquirer')

const generateMarkdown = require('./utils/generateMarkdown')

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
        type: 'list',
        message: 'Choose a license.',
        name: 'License',
        choices: [
            'MIT', 'GNU GPLv3', 'Apache 2.0', 'none'
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

    fs.writeFile(fileName, generateMarkdown(response), (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log('Great Job!')
            }
        }

    )



}).catch(function (err) {
    if (err) {
        console.log("I'm so sad an error occurred. Me broken :(")
        console.log(err);
    }
})