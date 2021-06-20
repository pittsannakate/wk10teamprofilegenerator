const Employee = require ('./Employee');

class Engineer extends Employee {
    constructor(name, id, github) {
        super(name, id, email)
    
    this.github = github;
    this.role = 'Engineer';
    this.title= title;

}
getGithub() {
    return this.github;
}

getRole() {
    return this.title;
}
}
module.exports = Engineer
