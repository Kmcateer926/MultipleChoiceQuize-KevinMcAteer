// console.log("hello world"); connected
var welcomeContainer = document.getElementById("welcome-container");
var answerContainer = document.getElementById("answer-container");
var questionContainer = document.getElementById("question-container");
var correctAnswer = document.getElementById("correct-answer");
var button = document.getElementById("start-quiz");
var timerDisplay = document.getElementById("timer");

var secondsLeft = 75;
var penalty = 15;
var questionIndex = 0;
var quizQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within _______.",
    choices: ["quotes", "curly brackets", "parentheses", "squareBrackets"],
    correctAnswer: "curly brackets",
  },
  {
    question: "Arrays in JavaScript can be used to store _______.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the answers are true"],  
    answer: "all of the answers are true",
  },
  {
    question: "String values must be enclosed within ______ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer:  "quotes",
  },
  {
    question: "A very useful tool used during development and debugging for printing content tot the debugger is",
    choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
    answer: "console log",  
  }
];
var finalQuestion = quizQuestions[2];

function getQuizQuestions() {
  questionContainer.innerHTML = "";
  var question = document.createElement("h2");
  question.textContent = quizQuestions[questionIndex].question;
  question.setAttribute("style", "margin-top:30px; margin-bottom:20px");
  // console.log(question);
  questionContainer.append(question);
  renderChoices();
}

function renderChoices() {
  // console.log(choices);
  answerContainer.innerHTML = "";

  for (var i = 0; i <= quizQuestions[questionIndex].choices.length; i++) {
    var choiceButtons = document.createElement("button");
    choiceButtons.setAttribute(
      "style",
      "background-color: purple; color: white; margin: 5px"
    );
    choiceButtons.setAttribute(
      "data-value",
      quizQuestions[questionIndex].choices[i]
    );
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
  getQuizQuestions();
});
