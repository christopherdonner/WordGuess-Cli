var inquirer = require("inquirer");

var letterInclude = require("./letter.js")
var wordInclude = require("./word.js")


var secretWord = []
var word0 = ["m", "a", "g", "g", "i", "e"]
var word1 = ["m", "a", "r", "g", "e"]
var word2 = ["b", "a", "r", "t"]
var word3 = ["h", "o", "m", "e", "r"]
var word4 = ["l", "i", "s", "a"]
var word5 = ["m", "i", "l", "l", "h", "o", "u", "s", "e"]
var word6 = ["s", "p", "r", "i", "n", "g", "f", "i", "e", "l", "d"]
var word7 = ["f", "l", "a", "n", "d", "e", "r", "s"]
var word8 = ["k", "r", "u", "s", "t", "y"]
var word9 = ["w", "i", "g", "g", "u", "m"]
var wordsList = [word0, word1, word2, word3, word4, word5, word6, word7, word8, word9]
// var currentWord=""
var currentWord = ""
var wordArray = []
var secretWord=""

function pickWord() {
  wordPickerInt = Math.floor(Math.random() * wordsList.length);
  currentWord = wordsList[wordPickerInt]; //set as currentWord
  console.log(currentWord)
  secretWord = new wordInclude.word(currentWord)
  console.log(secretWord.value)
}

// if(currentWord){
// }
console.log(secretWord)
function prompt() {
  inquirer.prompt([

    {
      type: "input",
      name: "guess",
      message: "Guess a letter"
    }]).then(function (input) {
      // console.log(input.guess)
      console.log(secretWord)
      // console.log(secretWord.value)
    // secretWord = new wordInclude.word(currentWord)
    console.log()
    console.log(input.guess)
    secretWord.checkWord(input.guess)
    // secretWord.makeWord();  
    currentWord.drawWord();
    prompt();
  })
  
}

// wordInclude.pickWord();


// console.log(currentWord)
//   // wordInclude.pickWord();
//   function pickWord()
// {
//     //pick random word from wordsList array
//     var wordPickerInt=Math.floor(Math.random() * wordsList.length);
//     wordInclude.currentWord=wordsList[wordPickerInt]; //set as currentWord
//     console.log(currentWord)
    

// }w


pickWord();
// console.log(wordInclude.word)
  var currentWord= new wordInclude.word(currentWord)
  currentWord.makeWord();
  // currentWord.drawWord();
  prompt();
