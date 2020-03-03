const fs = require("fs");
const inquirer = require("inquirer");

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

            // Write main.html to the output folder as "team.html"
            fs.writeFile("./output/team.html", data, function(err) {
                if (err) {
                    return console.log(err);
                }

                // Console log a success message
                console.log("Successfully wrote team.html to the output directory.");
            })
        });
    })
    /*
    - Output the HTML page to the output directory, in the file team.html
    - Build a card for the manager
    -- Make a template for the card
    - Add the manager card to the HTML page
  
    - Add more styling for the HTML page
    */

    /*
    Notes:
    - Write one set of inquirer prompts -- use variable for final value
    */