// console.log("hello world"); connected
var welcomeContainer = document.getElementById("welcome-container");
var answerContainer = document.getElementById("answer-container");
var questionContainer = document.getElementById("question-container");
var correctAnswer = document.getElementById("correct-answer");
var button = document.getElementById("start-quiz");
var timerDisplay = document.getElementById("timer")

var questionIndex = 0;

var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        question: "The condition in an if / else statement is enclosed within _______.",
        choices: ["quotes", "curly brackets", "parentheses", "squareBrackets"],
        answer: "curly brackets", 
    }
]

function renderQuizQuestions() {
    questionContainer.innerHTML = "";
    var question = document.createElement("h2");
    question.textContent = quizQuestions[questionIndex].question;
    console.log(quizQuestions[questionIndex].question);
    questionContainer.append(question)
    renderChoices();
}

function renderChoices() {
    console.log(choices);
    for (var i = 0; i <= quizQuestions[questionIndex].choices.length; i++) {
        var choiceButtons =document.createElement("button");
        choiceButtons.setAttribute("style", "background-color: purple; color: white; margin: 5px");
        choiceButtons.setAttribute("data-value", quizQuestions[questionIndex].choices[i]);
        choiceButtons.textContent = quizQuestions[questionIndex].choices[i];
        answerContainer.append(choiceButtons);


    }
}


button.addEventListener("click", function () {
    welcomeContainer.style.display = "none";
    questionContainer.setAttribute("style", "display:block");
    questionContainer.textContent = quizQuestions.questions;
    answerContainer.setAttribute("style", "display:block");
    answerContainer.textContent = quizQuestions.choices;
    renderQuizQuestions();
});


