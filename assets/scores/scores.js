// Declarations
var score = document.querySelector("#score");
var clear = document.querySelector("#clear");

// Clears scores
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
// Grabs the initials and scores from the local storage
var quizScores = localStorage.getItem("quizScores");
quizScores = JSON.parse(quizScores);
console.log(quizScores);
if (quizScores !== null) {
  for (let i = 0; i < quizScores.length; i++) {
    var createListItem = document.createElement("li");
    createListItem.textContent =
      quizScores[i].initials + " " + quizScores[i].userScore;
    score.append(createListItem);
  }
};

document.getElementById('returnBack').addEventListener('click', (event) => {
    event.preventDefault();
    window.location.replace("../../index.html");
  });
