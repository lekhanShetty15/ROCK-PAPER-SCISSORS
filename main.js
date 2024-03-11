const box = document.getElementById("box")
const cut = document.getElementById("cut")
const ruleBtn = document.getElementById("ruleBtn")
const gameInstruction = document.getElementById("gameInstruction");

const choice = document.getElementById("choice");
const gameArea = document.getElementById("gameArea")
const stone = document.getElementById("stone");
const scissor = document.getElementById("scissor");
const paper = document.getElementById("paper");
const againBtn = document.getElementById("againBtn")
const yourImage = document.getElementById("yourImage");





            //  rule button toogle


ruleBtn.addEventListener("click", () =>{
    box.style.display = "block";
});

cut.addEventListener("click",() => {
    box.style.display="none"
})



        //    user selection for option



stone.addEventListener("click", ()=>{
    document.getElementById("yourImage").innerHTML='<img src="./images/stone.png" alt="stone">'
        choice.style.display="none"
        gameArea.style.display="block"
        gameArea.style.marginTop="-400px";
        gameInstruction.style.marginLeft="980px";
        
        
    
});
paper.addEventListener("click", ()=>{
    document.getElementById("yourImage").innerHTML='<img src="./images/paper.png" alt="paper">'
        choice.style.display="none"
        gameArea.style.display="block"
        gameArea.style.marginTop="-400px";
        gameInstruction.style.marginLeft="980px";


});
scissor.addEventListener("click", ()=>{
    document.getElementById("yourImage").innerHTML='<img src="./images/scissor.png" alt="scissor">'
        choice.style.display="none"
        gameArea.style.display="block"
        gameArea.style.marginTop="-400px";
        gameInstruction.style.marginLeft="980px";


});


    // play again button\

againBtn.addEventListener("click", ()=>{
    choice.style.display="block";
    gameArea.style.display="none";
    gameArea.style.margin = null;
    gameInstruction.style.marginLeft=null;
})


            // for computer random pick





let image = ["stone", "paper", "scissor"];
    let randomIndex = Math.floor(Math.random()*image.length);
    let computerImage = document.getElementById("computerImage")
    let  computerRandomImage = image[randomIndex]
    console.log(computerRandomImage);

    if(computerRandomImage== "stone"){
        computerImage.innerHTML='<img src="./images/stone.png" alt="stone">'
    }
    else if(computerRandomImage == scissor){
        computerImage.innerHTML='<img src="./images/scissor.png" alt="scissor">'
    }
    else if(computerRandomImage == paper){
        computerImage.innerHTML='<img src="./images/paper.png" alt="paper">'
    }
    else
    {

    }







    // let compicked = ['pickedRock', 'pickedPaper', 'pickedScissor'];

    // compickedIndex = Math.floor(Math.random()* compicked.length);
    
    // let comDisplay = document.getElementById('Pc-picked');
    // let compickedRandom = compicked[compickedIndex];

    // if(compickedRandom == 'pickedRock'){
    //     comDisplay.innerHTML = '<img src="Images/Group 6.png" alt="stone" srcset="">';
    // }else if(compickedRandom == 'pickedPaper'){
    //     comDisplay.innerHTML = '<img src="Images/Group 7.png" alt="paper" s
