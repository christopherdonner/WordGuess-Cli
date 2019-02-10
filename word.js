var letterInclude = require("./letter.js")


function word(value) {
    this.value = value,
    // this.wordArray=wordArray
    this.makeWord = function () {
        for (i = 0; i < value.length; i++) {
            var currentLetter = new letterInclude.letter(value[i], false)
            var wordArray=[]
            currentLetter.show()
            // console.log(currentLetter)
            wordArray.push(currentLetter)
            // console.log(value[i])
        }
    }
}

var tempWord=new word("test")
// console.log(tempWord)

module.exports = {
    word: word
}