var letterInclude = require("./letter.js")

var secretWord=[]
var word0=["m","a","g","g","i","e"]
var word1=["m","a","r","g","e"]
var word2=["b","a","r","t"]
var word3=["h","o","m","e","r"]
var word4=["l","i","s","a"]
var word5=["m","i","l","l","h","o","u","s","e"]
var word6=["s","p","r","i","n","g","f","i","e","l","d"]
var word7=["f","l","a","n","d","e","r","s"]
var word8=["k","r","u","s","t","y"]
var word9=["w","i","g","g","u","m"]
var wordsList=[word0, word1, word2, word3, word4,word5,word6, word7, word8, word9]
// var currentWord=""

function word (New)
{
    this.New=New
}

var currentLetter=new letterInclude.letter("a", false)

function pickWord()
{
    var currentWord=""
    //pick random word from wordsList array
    wordPickerInt=Math.floor(Math.random() * wordsList.length);
    currentWord=wordsList[wordPickerInt]; //set as currentWord
    console.log(currentWord)
    for(i=0;i<currentWord.length;i++)
        {}
    }

// console.log(currentLetter.value)
currentLetter.show()

module.exports={
    word: word,
    pickWord: pickWord
}