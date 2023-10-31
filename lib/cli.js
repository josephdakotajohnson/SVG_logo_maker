const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square, Octagon } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
  async run() {
    try {

      // TODO: Make an inquirer prompt to get text, textColor, shapeType, shapeColor data from user
        const data = await inquirer.prompt([
          {
              type: 'list',
              name: 'color',
              message: 'What color should the SVG be?',
              choices: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'White', 'Gray', 'Black', 'Brown'],
          },
          {
              type: 'list',
              name: 'shape',
              message: "What shape should the SVG's background be?",
              choices: ['Circle', 'Triangle', 'Square', 'Octagon'],
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
              type: 'list',
              name: 'textColor',
              message: "What color should the SVG's text be?",
              choices: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'White', 'Gray', 'Black', 'Brown'],
          },
      ])

      // TODO: Create a shape object based on inquirer data
      const {color, shape, text, textColor} = data;

      let shapeObj;

      if (shape === "Circle") {
        shapeObj = new Circle();
      } else if (shape === "Triangle") {
        shapeObj = new Triangle();
      } else if (shape === "Square") {
        shapeObj = new Square();
      } else if (shape === "Octagon") {
        shapeObj = new Octagon();
      }

      shapeObj.setColor(color);

      const svg = new SVG(shapeObj.render(), text, textColor)

      await writeFile('logo.svg', svg.render());

    } catch(err) {
      console.log(err);
    }
  }
}
module.exports = CLI;
