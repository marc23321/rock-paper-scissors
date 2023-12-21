
// let names = ["rock","paper","scissors"];
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

rock.addEventListener('click',e => {
    console.log("rock")
})

paper.addEventListener('click', e =>{
    console.log("paper")
})

scissors.addEventListener('click', e=>{
    console.log("Scissors")
})