const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// Prompt for information about the manager
inquirer.
    prompt([
        {
            type: "input",
            message: "Let's start by collecting information about the manager. \nManager, what is your name?",
            name: "managerName"
        },
        {
            type: "input",
            message: "What is your ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "emailAddress"
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "officeNumber"
        }

    ])
    .then(answers => {
        // Read in the main.html template
        fs.readFile("./templates/main.html", "utf8", function(error, data) {

            // Split the main.html template for before and after the dynamic content text marker
            const mainHTMLPortions = data.split("<!-- Dynamic content goes here -->");
            // const mainHTMLPortions = mainHTMLTemplateStr.split("<!-- Dynamic content goes here -->");

            if (mainHTMLPortions && (mainHTMLPortions.length >= 2)) {
                // Write the first part of the main.html template -- everything before the dynamically
                // added content -- to the "team.html" file in the "output" folder
                fs.writeFile("./output/team.html", mainHTMLPortions[0], function(err) {
                    // console.log("mainHTMLPortions[0]"); // debug
                    if (err) {
                        return console.log(err);
                    }
                });
                /*
                fs.appendFile("./output/team.html", "<p>Here is some dynamically-added text.</p>", function(err) {
                    if (err) {
                        return console.log(err);
                    }
                });
                */

                fs.appendFile("./output/team.html", mainHTMLPortions[1], function(err) {
                    // console.log("mainHTMLPortions[1]"); // debug
                    if (err) {
                        return console.log(err);
                    }
                });

                // Console log a success message
                console.log("Successfully wrote team.html to the output directory.");
            }
        });
  
    });
        

    /*
    - Read in file to delimiter, insert some temp text, read file from delimiter
    - Make a template for the manager card
    - Build a card for the manager
    - Add the manager card to the HTML page
  
    - Add more styling for the HTML page
    */

    /*
    Notes:
    - Write one set of inquirer prompts -- use variable for final value
    */