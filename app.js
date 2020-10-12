let userScore = 0;
let wizScore = 0;
const userScore_span = document.getElementById("user-score");
const wizScore_span = document.getElementById("wizard-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const comet_div = document.getElementById("c");
const book_div = document.getElementById("b");
const sword_div = document.getElementById("s");

function getWizardChoice() {
    const wiz_choice = ['c', 'b', 's'];
    const randNum = Math.floor(Math.random() * 3);
    return wiz_choice[randNum];
}

function win(user, wizard) {
    userScore++;
    userScore_span.innerHTML = userScore;
    wizScore_span.innerHTML = wizScore;
}

function lose() {
    //wizScore++;

}

function draw() {

}

function game(userChoice) {
    const wizardChoice = getWizardChoice();

    switch (userChoice + wizardChoice){
        case "cs":
        case "bc":
        case "sb":
            win(userChoice, wizardChoice);
            break;
        case "sc":
        case "cb":
        case "bs":
            lose(userChoice, wizardChoice);
            break;
        case "ss":
        case "cc":
        case "bb":
            draw(userChoice, wizardChoice);
            break;
    }
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
