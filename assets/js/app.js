// Variables & Names:
const quizQuestion = [
  {
    question: "What is an element?",
    answers: [
      { text: "A component of an HTML document", correct: true },
      { text: "A p tag", correct: false },
      { text: "The start of a code", correct: false },
    ],
  },
  {
    question: "How does a title tag operate?",
    answers: [
      {
        text: "Title tags are crucial in naming your app and are important for SEO.",
        correct: true,
      },
      { text: "Title tags are not important.", correct: false },
      { text: "Title tags are headers.", correct: false },
    ],
  },
  {
    question: "What does DOM stand for?",
    answers: [
      { text: "Document Object Model", correct: true },
      { text: "Document Or Model", correct: false },
      { text: "Document Object Mouse", correct: false },
    ],
  },
  {
    question: "How to make an element clickable?",
    answers: [
      { text: "Add event listener", correct: true },
      { text: "Declare the variable again", correct: false },
      { text: "Hoist the element to another function", correct: false },
    ],
  },
];
const quizQuestionElement = document.getElementById("question");
const answerButton = document.getElementById("answer");
const restartButton = document.getElementById("restart");
const timerEl = document.getElementById("timer");
const saveButton = document.getElementById("save");
const textinput = document.getElementById("initials");
const highScoreElement = document.getElementById("score");
highScoreElement.style.visibility = "hidden";
//Declare index and score:
let currentQuestionIndex = 0;
let score = 0;

// Start Button declared - Event Listener and timer will start on click.
let startButton = document.getElementById("start");
const infoEl = document.getElementById("info");

let seconds = 30;
let timeInterval;

// Timer - Countdown 60 seconds for 4 questions
function timer() {
  timerEl.textContent = seconds + " seconds";
  timeInterval = setInterval(function () {
    if (seconds > 0) {
      seconds--;
      timerEl.textContent = seconds + " seconds";
    } else {
      timerEl.textContent = "Game Over";
      showScore();
      clearInterval(timeInterval);
    }
  }, 1000);
}

// Start function to begin quiz. Start button will dissapper.
// Questions, choices, and next button will appear.

function start() {
  startButton.style.visibility = "hidden";
  infoEl.style.display = "none";
  showquizQuestion();
  timer();
}

// Shows current question in quizquestionElement and adds a index numer with choices:
function showquizQuestion() {
  let currentQuestion = quizQuestion[currentQuestionIndex];
  let quizQuestionNo = currentQuestionIndex + 1;
  quizQuestionElement.textContent =
    quizQuestionNo + ". " + currentQuestion.question;

  answerButton.innerHTML = "";

  currentQuestion.answers.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.classList.add("choice");
    button.setAttribute("value", choice.correct);
    button.addEventListener("click", selectAnswer);
    answerButton.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedBtn = e.target;

  console.log(selectedBtn.value);
  if (selectedBtn.value === "true") {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
    seconds -= 10;
    timerEl.textContent = seconds;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex >= quizQuestion.length) {
    showScore();
    clearInterval(timeInterval);
    timerEl.style.visibility = "hidden";
  } else {
    showquizQuestion();
  }
}

function showScore() {
  answerButton.style.display = "none";
  if (score === 0) {
    quizQuestionElement.innerHTML = `You scored 0`;
  } else {
    let finalScore = Math.floor((score / currentQuestionIndex) * 100);
    quizQuestionElement.innerHTML = `You scored ${finalScore}`;
    highScoreElement.style.visibility = "visible";
  }
  restartGame();
}

saveButton.addEventListener("click", function (event) {
  event.preventDefault();
  let highScores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  let key = initials.value;
  let finalScore = Math.floor((score / currentQuestionIndex) * 100);
  let highScore = {
    initials: key,
    score: finalScore,
  };
  highScores.push(highScore);
  window.localStorage.setItem("highscores", JSON.stringify(highScores));
  highScoreElement.style.display = "none";  
  console.log(highScores);

});

// initialsForm.addEventListener('submit', function (event) {
//   event.preventDefault();
//   const initials = document.querySelector('#initials').value;
//   if (initials !== '') {
//       let initialsArray = JSON.parse(localStorage.getItem('quizInitials'));
//       let scoreArray = JSON.parse(localStorage.getItem('quizScores'));
//       if (!scoreArray || !initialsArray) {
//           initialsArray = [];
//           scoreArray = [];
//       }
//       initialsArray.push(initials);
//       scoreArray.push(score);
//       localStorage.setItem('quizScores', JSON.stringify(scoreArray));
//       localStorage.setItem('quizInitials', JSON.stringify(initialsArray));
//       window.location.href = './highScores.html';
//   }
//   else {
//       alert('Please enter your initials');
//   }
// })

// Old Code

// saveButton.addEventListener("click", function(event) {
//   event.preventDefault();
//   let key = initials.value;
//   let finalScore = (Math.floor((score/currentQuestionIndex) * 100));
//   let value = finalScore;
//   localStorage.setItem(key, value, JSON.stringify(initials));
//   highScoreElement.style.display = "none";
// });

function restartGame() {
  const restart = document.createElement("button");
  restart.textContent = "Play Again";
  restartButton.appendChild(restart);
}

startButton.addEventListener("click", start);
restartButton.addEventListener("click", function () {
  window.location.reload();
});
