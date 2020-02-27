const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, gitHubAccount) {
        super(name, id, email);
        this.github = gitHubAccount;
        this.role = "Engineer";
    }

    // Return role of "Engineer"
    getRole() {
        return this.role;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;