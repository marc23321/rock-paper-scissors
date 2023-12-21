

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
let userInput;
let playerScore;
let computerScore;
let drawScore;

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
    compareResults(result, userInput)
})

scissors.addEventListener('click', e=>{
    let userInput = "scissors";
    let result = generator();
    compareResults(result, userInput);
})



function compareResults(result, userInput){
        if(userInput == result){
            console.log("Its a Match");
      }else{
           console.log("No this time");
    }
 }
