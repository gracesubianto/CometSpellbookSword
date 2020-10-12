const userScore = 0;
const wizScore = 0;
const userScore_span = document.getElementById("user-score");
const wizScore_span = document.getElementById("wizard-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const comet_div = document.getElementById("c");
const book_div = document.getElementById("b");
const sword_div = document.getElementById("s");

function getWizChoice() {
    const choices = ['c', 'b', 's'];
    const randomNumber = console.log(Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

console.log(getWizChoice());

function game(userChoice) {

}

function main() {
    comet_div.addEventListener('click', function() {
        game("c");
    })
    
    book_div.addEventListener('click', function() {
        game("b");
    })
    
    sword_div.addEventListener('click', function() {
        game("s");
    })
}

main();
