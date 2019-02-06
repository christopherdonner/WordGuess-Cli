var letterInclude = require("./letter.js")

function word (New)
{
    this.New=New
}

var currentLetter=new letterInclude.letter("a", false)

console.log(currentLetter.value)