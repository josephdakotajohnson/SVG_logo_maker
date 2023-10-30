const CLI = require("./lib/cli");
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

new CLI().run();

const questions = () => {
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'color',
            message: 'What color should the SVG be?',
            choices: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'White', 'Gray', 'Black', 'Brown'],
        },
        {
            type: 'input',
            name: 'text',
            message: `What text should the SVG have?`,
            validate: function (input) {
              if (input.length === 3) {
                return true; // Input is valid
              } else {
                return "Please enter exactly 3 characters."; // Input is invalid
              }
            }
        },
        {
            type: 'checkbox',
            name: 'color',
            message: "What color should the SVG's text be?",
            choices: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'White', 'Gray', 'Black', 'Brown'],
        },
    ])
};

function init() {
    questions()
        .then((answers) => writeFile('README.md', generateREADME(answers)))
        .then(() => console.log('Successfully created an SVG.')
        .then(() => console.log('Successfully created an SVG.')
        .catch((err) => console.error(err));
};