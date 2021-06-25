const ManagerExport = require (./lib/Manager);
const EngineerExport = require (./lib/Engineer);
const InternExport = require (/lib/Intern);
const inquirer = require("inquirer");
const fs = require ("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

function addRole(member) {
    const name = member.getName();
    const role = member.getRole();
    const id = member.getId();
    const email= member.getEmail();
    let data = " ";
    if (role === "Engineer") {
        const gitHub = member.getGithub();
    } else if (role === "Intern") {
        const school = getSchool();
    }
}

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
                name: "role"
                },
                message: "Please enter team member's id",
                name: "id"
    },
                message: "Please enter team member's email address"
                name: "email"
])
}
                .then(function({roleInfo, teamMembers})) {
                    let newTeamMember;
                    if (role === "Engineer") {
                        newTeamMember = new Engineer(name, id, email, roleInfo);
                    } else if (role === "Intern") {
                        newTeamMember = new Intern(name, id, email, roleInfo);
                    } else {
                        newTeamMember = new Manager(name, id, email, roleInfo);
                    }
                }

function 

                





