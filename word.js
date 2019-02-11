var letterInclude = require("./letter.js")

var wordArray=[]

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
}
    this.checkWord=function(guess){
        console.log(wordArray)
        if(this.wordArray){
        for(i=0;i<this.wordArray.length;i++){a
            console.log(this.wordArray[i]+"test")
            if(guess===this.wordArray[i]){
              console.log(this.wordArray)
             this.wordArray[i].guessed=true
              console.log("correct!")
            }
          }
    }
}
// }

var tempWord=new word("test")
// console.log(tempWord)

module.exports = {
    word: word
}