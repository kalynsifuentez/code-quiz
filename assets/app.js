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

//Declare index and score:
let currentQuestionIndex = 0;
let score = 0;

// Start Button declared - Event Listener and timer will start on click.
const startButton = document.getElementById("start");

let seconds = 60;
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
  }, 100);
}

// Start function to begin quiz. Start button will dissapper.
// Questions, choices, and next button will appear.
function start() {
  startButton.style.visibility = "hidden";
  // currentQuestionIndex = 0;
  // score = 0;
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

  if (currentQuestionIndex === quizQuestion.length) {
    showScore();
    timerEl.style.visibility = "hidden";
  } else {
    showquizQuestion();
  }
}

function showScore() {
  quizQuestionElement.innerHTML = `You scored ${score} out of ${quizQuestion.length}`;
  answerButton.style.visibility = "hidden";

}


startButton.addEventListener("click", start);