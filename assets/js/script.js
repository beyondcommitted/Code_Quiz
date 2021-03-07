// Declarations
var userScore = 0;
var questionNumber = 0;
var setTime = document.querySelector("#setTime");
var clock = document.querySelector("#start");
var questions = document.querySelector("#questions");
var container = document.querySelector("#container");

// 20 seconds per question:
var timeLeft = 100;
// Holds and applies penalty when assigned
var penalizeTime = 15;
// Creates an element of an ordered list
var createOl = document.createElement("ol");
// Declaring an array with objects as questions and  possible answers stored in arrays.
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

// Starts the clock on button click and shows the user a countdown on the screen other wise would render first question without start button
clock.addEventListener("click", function () {
  // Subtracts 1 second from the clock for the countdown
  setInterval(function () {
    timeLeft--;
    // Pushes countdown and time to display on the page
    setTime.textContent = "Countdown: " + timeLeft;
    // If and when clock hits 0 this will end the quiz
    if (timeLeft <= 0) {
      endQuiz();
      // If and when the clock reaches 0 this will display on the screen.
      setTime.textContent = "Aww your time is up!";
    }
  }, 1000);
  renderQuestion(questionNumber);
});

// Renders questions and choices to page
function renderQuestion(questionNumber) {
  questions.innerHTML = "";
  createOl.innerHTML = "";
  // references object and items in array to render questions in order
  for (var i = 0; i < allQuestions.length; i++) {
    // Appends question to page without you only get answers
    var userQuestion = allQuestions[questionNumber].question;
    var userResponse = allQuestions[questionNumber].possibleAnswer;
    questions.textContent = userQuestion;
  }
  // For each new question and appends element to the page so the possible answer can be chosen
  userResponse.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questions.appendChild(createOl);
    createOl.appendChild(listItem);
    // Listens for the correct response on the button click without user can not chose and get to the next question
    listItem.addEventListener("click", compare);
  });
return questionNumber;
}
// Event to compare choices with answer
function compare(e) {
  var e = e.target;

  if (e.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
    // Right answer
    if (e.textContent === allQuestions[questionNumber].correctAnswer) {
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
// endQuiz will append last page
function endQuiz() {
  questions.innerHTML = "";
  setTime.innerHTML = "";

  // Title for the end of the quiz
  // uses a h1 tag for the text
  var createPageTitle = document.createElement("h1");
  createPageTitle.setAttribute("id", "createPageTitle");

  // places the text on the page
  createPageTitle.textContent = "End of Quiz!";
  questions.appendChild(createPageTitle);
  var createP = document.createElement("p");
  createP.setAttribute("id", "createP");

  questions.appendChild(createP);

  // Calculates time remaining and replaces it with score
  if (timeLeft >= 0) {
    var timeRemaining = timeLeft;
    var createP2 = document.createElement("p");
    clearInterval();
    createP.textContent = "You received a  final score of: " + timeRemaining;

    questions.appendChild(createP2);
  }

  // Label to inform user what to do with the input form
  var createTag = document.createElement("label");
  createTag.setAttribute("id", "createTag");
  createTag.textContent = "Input your initials here: ";

  questions.appendChild(createTag);

  // Input form for submission of intials
  var createForm = document.createElement("input");
  createForm.setAttribute("id", "initials");
  createForm.textContent = "";

  questions.appendChild(createForm);

  // Renders a submit button
  var createSubmit = document.createElement("button");
  createSubmit.setAttribute("id", "Submit");
  createSubmit.textContent = "Submit";

  questions.appendChild(createSubmit);

  // Event listener to that listens for click that sends initials to local storage for initials and score
  createSubmit.addEventListener("click", function () {
    var initials = createForm.value;

    if (initials === null) {
    } else {
      var storeUserScore = {
        initials: initials,
        userScore: timeRemaining,
      };
      var quizScores = localStorage.getItem("quizScores");
      if (quizScores === null) {
        quizScores = [];
      } else {
        quizScores = JSON.parse(quizScores);
      }
      quizScores.push(storeUserScore);
      var newUser = JSON.stringify(quizScores);
      localStorage.setItem("quizScores", newUser);
      // Redirects user to  highscore page
      window.location.replace("assets/scores/scores.html");
    }
  });
}
