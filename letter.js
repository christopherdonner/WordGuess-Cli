function letter (value, guessed, character) 
{
    this.value=value,
    this.guessed=guessed,
    this.character=character
    this.show=function()
    {
        if(this.guessed){
            console.log(value)
        }
        if(this.guessed===false)
        {
            console.log("_")
        }
    }
    this.checkWord=function(character)
    {
        
        if(value===character){
            this.guessed=true;
            this.show();
        }
    }
}


module.exports={
    letter: letter
}