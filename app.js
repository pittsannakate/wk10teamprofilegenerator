const ManagerExport = require (./lib/Manager);
const EngineerExport = require (./lib/Engineer);
const InternExport = require (/lib/Intern);
const inquirer = require("inquirer");
const fs = require ("fs");

const employees = []

//Manager Function
function createTeamMember() {
    inquirer.prompt([{
        type: "input",
        name: "memberName",
        message: "What is the team member's name?",
        validate: answer => {
            if (answer !== " ") {
                return true;
            }
                return "Please enter a name!" 
                },
                type: "list"
                message: "Select team member's role"
                choices: [
                    "Engineer",
                    "Intern",
                    "Manager",
                ]

                }
    }])
};




