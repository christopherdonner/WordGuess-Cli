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
                wordArray.push(currentLetter)
                // console.log(this.value[i])
            }
        }

    this.checkWord = function (guess) {
        console.log(`things are working! ${wordArray[0].value}, ${wordArray[0].guessed}`)
        console.log(`wordArray: ${wordArray.length}`)
        loop=wordArray.length
        // if (this.wordArray) {
            for (i = 0; i < loop; i++) {
                // console.log(wordArray[i].value + "test")
                // console.log(`${guess}, ${wordArray[i].value}`)
                if (guess === wordArray[i].value) {
                    //   console.log(this.wordArray)
                    wordArray[i].guessed = true
                    console.log(`${wordArray[i].value}, ${wordArray[i].guessed}`)
                    console.log("correct!")
                }
            }
        // }
    }
}
// }

var tempWord = new word("test")
// console.log(tempWord)

module.exports = {
    word: word
}