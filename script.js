// console.log("hello world"); connected
var welcomeContainer = document.getElementById("welcome-container");
var answerContainer = document.getElementById("answer-container");
var questionContainer = document.getElementById("question-container");
var correctAnswer = document.getElementById("correct-answer");

var questions = 0;

var quizQuestions = 0; [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
]

function renderQuestions() {
    questionContainer.innerHTML ="";
    var question = document.createElement("h2");
    question.textContent = questions[quizQuestions].question;
    console.log(Questions[quizQuestions].question);
    questionContainer.append(question)
    renderChoices();
}


function highScore(score) {
  var saved = 0;
  try {
    saved = parseFloat(localStorage.highScore);
  } catch (e) {
    saved = 0;
  }
  if (!(typeof score === "undefined")) {
    try {
      score = parseFloat(score);
    } catch (e) {
      score = 0;
    }
    if (score > saved) {
      saved = score;
      localStorage.highScore = "" + score;
    }
  }
  if (isNaN(saved)) {
    saved = 0;
    localStorage.highScore = "0";
  }
  return saved;
}
