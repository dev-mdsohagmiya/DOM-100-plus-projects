class randomNumber{
    constructor(colorName){
        this.colorName = Math.floor(Math.random()*255)
        
    }
}
document.querySelector(".btn").addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor = `rgb(${ new randomNumber().colorName},${new randomNumber().colorName},${new randomNumber().colorName})`
})

