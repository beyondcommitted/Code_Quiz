// Declarations
var userScore = 0;
var questionNumber = 0;
var setTime = document.querySelector("#setTime");
var clock = document.querySelector("#start");
var questions = document.querySelector("#questions");
var container = document.querySelector("#container");

// 20 seconds per question:
var timeLeft = 101;
// Holds interval time
var holdInterval = 0;
// Holds and applies penalty when assigned
var penalizeTime = 15;
// Creates an element of an ordered list
var createOl = document.createElement("ol");
// Decalring an array with objects as questions and  possible answers stored in arrays.
var allQuestions = [
  {
    question:
      "Which language is considered as the muscle out of these 3 languages?",
    possibleAnswer: ["HTML", "JavaScript", "CSS"],
    correctAnswer: "JavaScript",
  },
  {
    question: "What is CSS and abbreviation for?",
    possibleAnswer: [
      "Computer Science Style",
      "Cascade Sheet Styles",
      "Cascading Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question: "What is a class considered as in HTML?",
    possibleAnswer: ["an attribute", "a method", "a function"],
    correctAnswer: "an attribute",
  },
  {
    question:
      "Which symbols out of these are used to assign items to an array?",
    possibleAnswer: ["brackets", "parenthesis", "curly brackets", "quotes"],
    correctAnswer: "brackets",
  },
  {
    question: "Which declaration can not be reassigned later in your code?",
    possibleAnswer: ["var", "let", "const"],
    correctAnswer: "const",
  },
];

// Starts the clock on button click and shows the user a countdown on the screen
clock.addEventListener("click", function () {
  // This checking 0 because the clock is originally set at 0 then it subtracts the interval of 1
  if (holdInterval === 0) {
    holdInterval = setInterval(function () {
      timeLeft--;
      setTime.textContent = "Time: " + timeLeft;
      // If and when clock hits 0 this will end the quiz
      if (timeLeft <= 0) {
        clearInterval(holdInterval);
        endQuiz();
        setTime.textContent = "Aww your time is up!";
      }
    }, 1000);
  }
  renderQuestion(questionNumber);
});

// Renders questions and choices to page
function renderQuestion(questionNumber) {
  questions.innerHTML = "";
  createOl.innerHTML = "";
  // references object and items in array to render questions in order
  for (var i = 0; i < allQuestions.length; i++) {
    // Appends question to page
    var userQuestion = allQuestions[questionNumber].question;
    var userResponse = allQuestions[questionNumber].possibleAnswer;
    questions.textContent = userQuestion;
  }
  // For each new question and choices
  userResponse.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questions.appendChild(createOl);
    createOl.appendChild(listItem);
    // Listens for the correct response on the button click
    listItem.addEventListener("click", compare);
  });
}
// Event to compare choices with answer
function compare(e) {
  var e = e.target;

  if (e.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
    // Right answer
    if (e.textContent == allQuestions[questionNumber].correctAnswer) {
      userScore++;
      createDiv.textContent =
        "That is Correct! Your answer is:  " +
        allQuestions[questionNumber].correctAnswer;
      // Wrong or undefined condition
    } else {
      // Subtracts 15 seconds from the time left on the clock
      timeLeft = timeLeft - penalizeTime;
      createDiv.textContent =
        "Unfortunately your answer is wrong! The correct answer is:  " +
        allQuestions[questionNumber].correctAnswer;
    }
  }
  // Question Number determines which question user is on
  questionNumber++;

  if (questionNumber >= allQuestions.length) {
    // endQuiz will append last page with user stats
    endQuiz();
    createDiv.textContent =
      "You have reached the end of the Quiz!" +
      " " +
      "You answered  " +
      userScore +
      "/" +
      allQuestions.length +
      " of the questions correctly!";
  } else {
    renderQuestion(questionNumber);
  }
  questions.appendChild(createDiv);
}
// All done will append last page
function endQuiz() {
  questions.innerHTML = "";
  setTime.innerHTML = "";

  
  }
