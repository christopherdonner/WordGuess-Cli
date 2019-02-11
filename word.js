var letterInclude = require("./letter.js")

var wordArray = []

function word(value) {
    this.value = value,
        this.makeWord = function () {
            for (i = 0; i < value.length; i++) {
                var currentLetter = new letterInclude.letter(value[i], false)
                currentLetter.show()
                wordArray.push(currentLetter)
            }
        }

    this.checkWord = function (guess) {
        loop=wordArray.length
            for (i = 0; i < loop; i++) {
                if (guess === wordArray[i].value) {
                    wordArray[i].guessed = true
                    return;
                }
            }
    }

    this.drawWord=function(){
        for(i=0;i<wordArray.length; i++){
            var currentLetter = new letterInclude.letter(wordArray[i].value, wordArray[i].guessed)
            currentLetter.show()
        }
    }
}
// }

var tempWord = new word("test")

module.exports = {
    word: word
}