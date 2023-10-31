const CLI = require("./lib/cli");
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

new CLI().run();

const questions = () => {
    
};

function init() {
    questions()
        // .then((answers) => writeFile('README.md', generateREADME(answers)))
        .then((answers) => console.log(answers))
        .then(() => console.log('Successfully created an SVG.'))
        .catch((err) => console.error(err));
};

// class SVG {
//     constructor(color, shape, text, textColor) {
//         this.color = color;
//         this.shape = shape;
//         this.text = text;
//         this.textColor = textColor;
//     }
// }

// init();