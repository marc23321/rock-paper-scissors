

// let images = document.querySelectorAll('.clickableImage');

// images.forEach(function(image) {
//     image.addEventListener("click", handleImageClick);
// });


// function generator(){
//    let randomName = Math.floor(Math.random() * names.length);
//    let result = names[randomName];
//    return result
// }


// function compareResults(result, userInput){
//     if(userInput == result){
//         console.log("Its a Match");
//     }else{
//         console.log("No this time");

//     }
// }


// function handleImageClick(event) {
//     let clickedImage = event.target;
//     let result = clickedImage.getAttribute('data-result');
//     let userInput = prompt("Enter your play");
//     compareResults(userInput, result);
// }



const rock = document.getElementById('rockImage')
const paper = document.getElementById('paperImage')
const scissors = document.getElementById('scissorsImage')
let names = ["rock","paper","scissors"];
let playerScore = 0;
let computerScore =0;
let drawScore = 0;

function generator(){
    let randomName = Math.floor(Math.random() * names.length);
    let result = names[randomName];
    return result;
 }

rock.addEventListener('click',e => {
    let userInput = "rock";
    let result = generator();
    compareResults(result, userInput);
})

paper.addEventListener('click', e =>{
    let userInput = "paper";
    let result = generator();
    compareResults(result, userInput);

})

scissors.addEventListener('click', e=>{
    let userInput = "scissors";
    let result = generator();
    compareResults(result, userInput);
})

// function gamePlay(count){
//     while(count < 5 ){
//         compareResults(result, userInput)
//     }
//     count  = count +1;

// }

function compareResults(result, userInput){
            if(userInput == result){
                    console.log("Its a Match");
                    drawScore = drawScore  + 1; // or any other value
                    document.getElementById('drawscoreValue').textContent = drawScore;
            }else if(userInput == "rock" && result == "scissors"){
                    console.log("You Won");
                    playerScore = playerScore + 1 ; // or any other value
                    document.getElementById('playerscoreValue').textContent = playerScore;
            }else if(userInput == 'paper' && result == 'scissors'){
                    console.log("You Lost");
                    computerScore = computerScore + 1 ; // or any other value
                    document.getElementById('computerscoreValue').textContent = computerScore;
            }else if(userInput == 'paper' && result == 'rock'){
                    console.log("You Won");
                    playerScore = playerScore + 1 ; // or any other value
                    document.getElementById('playerscoreValue').textContent = playerScore;
            }else if(userInput == "rock" && result == "paper"){
                    console.log("You Lost");
                    computerScore = computerScore + 1 ; // or any other value
                    document.getElementById('computerscoreValue').textContent = computerScore;
                }else if (userInput == 'scissors' && result == 'paper'){
                    console.log("You Won");
                    playerScore = playerScore + 1 ; // or any other value
                    document.getElementById('playerscoreValue').textContent = playerScore;
                }else if (userInput == 'scissors' && result == 'rock'){
                    console.log("You Lost");
                    computerScore = computerScore + 1 ; // or any other value
                    document.getElementById('computerscoreValue').textContent = computerScore;
                }else{
                console.log(userInput);
                console.log(result);
            }
            if (computerScore == 5 || playerScore == 5) {
                if (computerScore == 5){
                    let LoseCopy = "You Lost This Round!n"
                    console.log(computerScore)
                    console.log(playerScore)
                    document.getElementById('finalresult').textContent = LoseCopy;
                    resetScores();

                }else{
                    let WinCopy = "You Won this Round!"
                    console.log(computerScore)
                    console.log(playerScore)
                    document.getElementById('finalresult').textContent = WinCopy;
                    resetScores();
                    document.getElementById('finalresults').textContent =''
                }s
            }
 } 


 function resetScores() {
    // Reset scores after someone reaches 5 points
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;

    document.getElementById('playerscoreValue').textContent = playerScore;
    document.getElementById('computerscoreValue').textContent = computerScore;
    document.getElementById('drawscoreValue').textContent = drawScore;
}


function resetMessage(){
    
}