var letterInclude = require("./letter.js")

var wordArray = []

function word(value) {
    this.value = value,
        // this.wordArray=wordArray
        this.makeWord = function () {
            for (i = 0; i < value.length; i++) {
                var currentLetter = new letterInclude.letter(value[i], false)

                currentLetter.show()
                // console.log(currentLetter)
                // if(wordArray[i]===this.value)
                wordArray.push(currentLetter)
                // console.log(this.value[i])
            }
        }

    this.checkWord = function (guess) {
        loop=wordArray.length
            for (i = 0; i < loop; i++) {
                if (guess === wordArray[i].value) {
                    wordArray[i].guessed = true
                    console.log("correct!")
                    return;
                }
                else {
                    console.log("incorrect")
                }
            }
    }

    this.drawWord=function(){
        // console.log("drawWord")
        for(i=0;i<wordArray.length; i++){
            var currentLetter = new letterInclude.letter(wordArray[i].value, wordArray[i].guessed)
            currentLetter.show()
        }
    }
}
// }

var tempWord = new word("test")
// console.log(tempWord)

module.exports = {
    word: word
}