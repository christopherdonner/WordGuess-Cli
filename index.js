var inquirer = require("inquirer");

var letterInclude = require("./letter.js")
var wordInclude = require("./word.js")


var secretWord = []
var word0 = ["h", "a", "w", "k"]
var word1 = ["p", "i", "g", "e", "o", "n"]
var word2 = ["c", "r", "o", "w"]
var word3 = ["o", "s", "p", "r", "e", "y"]
var word4 = ["o", "s", "t", "r", "i", "c", "h"]
var word5 = ["d", "u", "c", "k"]
var word6 = ["o", "w", "l"]
var word7 = ["r", "o", "b", "i", "n"]
var word8 = ["g", "r", "o", "u", "s", "e"]
var word9 = ["w", "i", "g", "g", "u", "m"]
var wordsList = [word0, word1, word2, word3, word4, word5, word6, word7, word8, word9]
var currentWord = ""
// var wordArray = []
var secretWord=""

function pickWord() {
  wordPickerInt = Math.floor(Math.random() * wordsList.length);
  currentWord = wordsList[wordPickerInt]; //set as currentWord
  secretWord = new wordInclude.word(currentWord)
}

function prompt() {
  console.log('the theme is "birds"')
  inquirer.prompt([

    {
      type: "input",
      name: "guess",
      message: "Guess a letter"
    }]).then(function (input) {
    secretWord.checkWord(input.guess)
    currentWord.drawWord();
    prompt();
  })
  
}

pickWord();
  var currentWord= new wordInclude.word(currentWord)
  currentWord.makeWord();
  prompt();
