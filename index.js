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










`, (err, data) => {
    if(err) {console.log(err)}else{console.log('Great Job!')}
})



})

// WHEN I enter my project title
// THEN this is displayed as the title of the README


// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under


// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README



    // WHEN I enter my GitHub username
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

    // WHEN I enter my email address
    // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions



// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions





// Function call to initialize app
