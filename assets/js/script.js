var timeEl = document.querySelector("#timer");
var startButton = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var questionNumber = 0;
var correctAnswer;
var userScore = 0;
// Array of objects and arrays to store the questions, answers and correct answer to be called upon
var allQuestions = [
  {
    question:
      "Which language is considered as the muscle out of these 3 languages?",
    answers: ["(a) HTML", "(b) JavaScript", "(c) CSS"],
    correctAnswer: "(b) Javascript",
  },
  {
    question: "What is CSS and abbreviation for?",
    answers: [
      "(a) Computer Science Style",
      "(b) Cascade Sheet Styles",
      "(c)  Cascading Style Sheets",
    ],
    correctAnswer: "(c) Cascading Style Sheets",
  },
  {
    question: "What is a class considered as in HTML?",
    answers: ["(a) an attribute", "(b) a method", "(c) a function"],
    correctAnswer: "(a) an attribute",
  },
  {
    question:
      "Which symbols out of these are used to assign items to an array?",
    answers: ["(a) []", "(b) {}", "(c) <>"],
    correctAnswer: "(a) []",
  },
  {
    question: "Which declaration can not be reassigned later in your code?",
    answers: ["(a) var", "(b) const", "(c) let"],
    correctAnswer: "(b) const",
  },
];
// Starts 2 minute timer when the start button is pressed
var timeLeft = 120;

function startTime() {
  var timer = setInterval(function () {
    // Subtracting time by 1
    timeLeft--;
    // Displaying the countdown on the page
    timeEl.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
    }
  }, 1000);
  return timeLeft;
}
startButton.addEventListener("click", startQuiz);

// Displays first question when the start button is pressed.
function displayQuestion() {
  // To hide the startButton after the click
  startButton.style.visibility = "hidden";

  // Displays a question
  questionEl.textContent = allQuestions[questionNumber[0]];

  // Displays the buttons for each answewr choice
  var answerChoices = document.createElement("button");
  for (var i = 0; i < allQuestions.length; index++) {
    var answerChoices = document.createElement("button");
    if (answerChoices === allQuestions[i].answers) {
      userScore++;
      alert("That is Correct!");
    } else {
      alert("Wrong this time! You will get the next one!");
    }
    alert("you got" + userScore + "/" + allQuestions.length);
  }
    function renderNewQuestion(allQuestions) {
      renderNewQuestion = allQuestions[questionNumber++].forEach(allQuestions);
    }
    if (answerChoices.length === correctAnswer) {
      allQuestions++;
    } else {
      timeLeft -= 10;
    }
    // Displays text on the answer buttons
    answerButton.textContent = answerChoices[index];
    questionEl.append(answerButton);
  }

function startQuiz() {
  startTime();
  displayQuestion();
}
