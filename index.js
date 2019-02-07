var inquirer = require("inquirer");

var letterInclude = require("./letter.js")
var wordInclude = require ("./word.js")

function prompt(){
inquirer.prompt([

    {
      type: "input",
      name: "guess",
      message: "Guess a letter"
    }]).then(function(){prompt();})

}

wordInclude.pickWord();
console.log(wordInclude.word)
prompt();