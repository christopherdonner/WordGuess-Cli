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
        var counter
            for (i = 0; i < wordArray.length; i++) {
                if (guess === wordArray[i].value) {
                    wordArray[i].guessed = true
                    counter++;
                    return;
                }
            }
        if(counter===wordArray.length){
            
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