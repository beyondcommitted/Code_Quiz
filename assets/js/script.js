
var timeEl = document.querySelector("#timer");
var startButton = document.querySelector("#start");
var questionEl = document.querySelector("#question")
var questionNumber = 0
var correctAnswer = true
var allQuestions = [
  {
    question: "Question1",
    answers: ["Answer1", "Answer2", "Answer3"],
    correctAnswer: "Answer1",
  },
  {
    question: "Question2",
    answers: ["Answer1", "Answer2", "Answer3"],
    correctAnswer: "Answer3",
  },
  {
    question: "Question3",
    answers: ["Answer1", "Answer2", "Answer3"],
    correctAnswer: "Answer2",
  },
  {
    question: "Question4",
    answers: ["Answer1", "Answer2", "Answer3"],
    correctAnswer: "Answer3",
  },
  {
    question: "Question5",
    answers: ["Answer1", "Answer2", "Answer3"],
    correctAnswer: "Answer1",
  },
];
// Starts 2 minute timer when the start button is pressed
var timeLeft = 120;

function startTime() {
  var timer = setInterval(function () {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
    }
  }, 1000);
}
startButton.addEventListener("click", startQuiz);
// Displays first question when the start button is pressed.
function displayQuestion() {
    questionEl.textContent = allQuestions[questionNumber].question;
    var answerChoices = allQuestions[questionNumber].answers;
    for (let index = 0; index < answerChoices.length; index++) {
        var answerButton = document.createElement("button");
        answerButton.textContent = answerChoices[index]
        questionEl.append(answerButton); 
 
      
    }
}
function startQuiz() {
    startTime();
    displayQuestion();
};

