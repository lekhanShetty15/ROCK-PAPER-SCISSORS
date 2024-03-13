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
let VS = document.getElementById("VS");



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
        gameResult()
    
});
paper.addEventListener("click", ()=>{
    document.getElementById("yourImage").innerHTML='<img src="./images/paper.png" alt="paper">'
        choice.style.display="none"
        gameArea.style.display="block"
        gameArea.style.marginTop="-400px";
        gameInstruction.style.marginLeft="980px";
        gameResult()

});
scissor.addEventListener("click", ()=>{
    document.getElementById("yourImage").innerHTML='<img src="./images/scissor.png" alt="scissor">'
        choice.style.display="none"
        gameArea.style.display="block"
        gameArea.style.marginTop="-400px";
        gameInstruction.style.marginLeft="980px";
        gameResult()

});


    // play again button\

againBtn.addEventListener("click", ()=>{
    choice.style.display="block";
    gameArea.style.display="none";
    gameArea.style.margin = null;
    gameInstruction.style.marginLeft=null;
    green1.style.display=null;
    green2.style.display=null;


})


            // for computer random pick




let image = ['stone', 'paper', 'scissor'];
    let randomIndex = Math.floor(Math.random()*image.length);
    let computerImage = document.getElementById("computerImage")
    let  computerRandomImage = image[randomIndex];

    if(computerRandomImage == "stone"){
        computerImage.innerHTML='<img src="./images/stone.png" alt="stone">'

        
    }
    else if(computerRandomImage == "scissor"){
        computerImage.innerHTML='<img src="./images/scissor.png" alt="scissor">'

    }
    else if(computerRandomImage == "paper"){
        computerImage.innerHTML='<img src="./images/paper.png" alt="paper">'
    }
   

            // win and loose comparison


    function gameResult() {
        let winLoose = document.getElementById("winLoose");
        let yourChoice = document.getElementById("yourImage").querySelector('img').alt;
        let computerChoice = computerRandomImage;
        let green1 = document.getElementById("green1")
        let green2 = document.getElementById("green2")

    
        if (yourChoice === computerChoice) {
            winLoose.innerText = "TIE UP";
            againBtn.innerText="REPLAY"
            console.log("tie");
        } else if (
            (yourChoice === 'stone' && computerChoice === 'scissor') ||
            (yourChoice === 'paper' && computerChoice === 'stone') ||
            (yourChoice === 'scissor' && computerChoice === 'paper')
        ) {
            winLoose.innerText = "YOU WIN";
            console.log("win");
            green1.style.display="block"
            nextBtn.style.display="block"
            user++;
            yournum.innerText= user;
            againBtn.innerText="PLAY AGAIN"
            VS.innerText="AGAINST PC"


         
           

        } else {
            winLoose.innerText = "YOU LOOSE";
            console.log("loose");
            green2.style.display="block"
            green2.style.marginLeft="727px"
            com++;
            comnum.innerHTML = com;
            againBtn.innerText="PLAY AGAIN"
            VS.innerText="AGAINST PC"


            
        }
        updateScores();
    }


            //    user and computer score 



let user = 0;
let com = 0;
let comnum = document.getElementById("comnum");
let yournum = document.getElementById("yournum");
let nextBtn = document.getElementById("nextBtn");
let main = document.getElementById("main")
let final= document.getElementById("final")
let playAgain = document.getElementById("playAgain")

nextBtn.addEventListener("click", ()=>{
    main.style.display="none"
    final.style.display="block"
    final.style.display="flex"

})

playAgain.addEventListener("click", ()=>{
    main.style.display="block"
    final.style.display="none"
    updateScores();
    location.reload(); 
   
})

againBtn.addEventListener("click", ()=>{
    updateScores();
    location.reload(); 

   

})








function updateScores() {
    localStorage.setItem('userScore', user);
    localStorage.setItem('computerScore', com);
}

// Function to retrieve scores from local storage and update variables
function retrieveScores() {
    user = parseInt(localStorage.getItem('userScore')) || 0;
    com = parseInt(localStorage.getItem('computerScore')) || 0;
    comnum.innerHTML = com;
    yournum.innerText = user;
}

window.addEventListener('load', retrieveScores);

