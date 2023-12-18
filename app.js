// Variables & Names:
const quizQuestion = [
{
    question: "What is an element?",
    answers: [
        { text: "A component of an HTML document", correct: true},
        { text: "A p tag", correct: false},
        { text: "The start of a code", correct: false},
    ]
},
{
    question: "How does a title tag operate?",
    answers: [
        { text: "Title tags are crucial in naming your app and are important for SEO.", correct: true},
        { text: "Title tags are not important.", correct: false},
        { text: "Title tags are headers.", correct: false},
    ]
},
{
    question: "What does DOM stand for?",
    answers: [
        { text: "Document Object Model", correct: true},
        { text: "Document Or Model", correct: false},
        { text: "Document Object Mouse", correct: false},
    ]
},
{
    question: "How to make an element clickable?",
    answers: [
        { text: "Add event listener", correct: true},
        { text: "Declare the variable again", correct: false},
        { text: "Hoist the element to another function", correct: false},
    ]
}
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
startButton.addEventListener('click', start);
startButton.addEventListener('click', timer);

// Timer - Countdown 60 seconds for 4 questions
function timer(){
    let seconds = 60;
     const timeInterval = setInterval(function () {
         if (seconds > 0) {
             timerEl.textContent = seconds + " seconds";
             seconds--;
           } else {
             timerEl.textContent = "Incomplete";
             clearInterval(timeInterval);
           }
     }, 1000);
 };

// Start function to begin quiz. Start button will dissapper. 
// Questions, choices, and next button will appear.
function start(){
    startButton.style.visibility = 'hidden';
    currentQuestionIndex = 0;
    score = 0;
    // nextButton.innerHTML = "Next"
    // nextButton.addEventListener('click', showquizQuestion);
    showquizQuestion();
    }


// Shows current question in quizquestionElement and adds a index numer with choices:
function showquizQuestion(){
let currentQuestion = quizQuestion[currentQuestionIndex];
    let quizQuestionNo = currentQuestionIndex + 1;
    quizQuestionElement.innerHTML = quizQuestionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.classList.add('choice');
        answerButton.appendChild(button)
        quizQuestionElement.appendChild(button)
        if (choice.correct){
            button.dataset.correct = choice.correct;
        }
        button.addEventListener('click', selectAnswer);
        button.addEventListener('click', showquizQuestion);
    });
}

// function resetState(){
// nextButton.style.display = "none";
//     while(answerButton.firstChild){
//         answerButton.removeChild(answerButton.firstChild);
//     }
// }

function selectAnswer (e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add('correct');
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
        });
        currentQuestionIndex++;
            if(currentQuestionIndex < question.legnth){
                showquizQuestion();
            }else{
                showScore();
            }
        }
        // nextButton.style.display = "block;"

   
function showScore(){
    // resetState();
    quizQuestionElement.innerHTML = `You scored ${score} out of ${quizQuestion.length}`;
//     if (selectAnswer=3){
// };
}
    // function handleResetButton(){
    //     currentQuestionIndex++;
    //     if(currentQuestionIndex < question.legnth){
    //         showquizQuestion();
    //     }else{
    //         showScore();
    //     }
    // }

    // nextButton.addEventListener('click', ()=>{
    //     if(currentQuestionIndex < quizQuestion.length){
    //         handleNextButton();
    //     }else{
    //         start()
    //     }
    // });
// start();

// // // Next steps: Add event listeners, to each of the three remaining buttons. "Check answer", create a check answer function that calls current question function after you increment the index by 1. 
