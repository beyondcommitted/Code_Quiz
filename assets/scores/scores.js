// Declarations
var score = document.querySelector("#score");
var clear = document.querySelector("#clear");

// Clears scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// // Grabs the initials and scores from the local storage 
// // var quizScores = localStorage.getItem("quizScores");
// // quizScores = JSON.parse(quizScores);
// // if (quizScores !== null) {
    //var createListItem = document.createElement("li");
// // createListItem.textContent = quizScores[i].initials + 
    //" " + quizScores[i].score; score.append(createListItem);

//     }
// }
