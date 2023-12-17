const quizQuestion = [
{
    question: "What is an element?",
    answer: [
        { text: "A component of an HTML document", correct: true},
        { text: "A p tag", correct: false},
        { text: "The start of a code", correct: false},
    ]
},
{
    question: "How does a title tag operate?",
    answer: [
        { text: "Title tags are crucial in naming your app and are important for SEO.", correct: true},
        { text: "Title tags are not important.", correct: false},
        { text: "Title tags are headers.", correct: false},
    ]
},
{
    question: "What does DOM stand for?",
    answer: [
        { text: "Document Object Model", correct: true},
        { text: "Document Or Model", correct: false},
        { text: "Document Object Mouse", correct: false},
    ]
}
];
// Button Variables & Names:
const quizQuestionElement = document.getElementById("question");
const answerButton = document.getElementById("answer");
// console.log(answerButton)
const nextButton = document.getElementById("next");
const startButton = document.getElementById("start");

//Declare index and score:
let currentQuestionIndex = 0;
let score = 0;

// Start Button Event Listener
startButton.addEventListener('click', 
start)

// Start function to begin quiz. Start button will dissapper. Questions, choices, and next button will appear.
function start(){
    startButton.style.visibility = 'hidden';
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showquizQuestion();
    }

    // showquizQuestion shows current question in quizquestionElement
function showquizQuestion(){
    resetState();
let currentQuestion = quizQuestion[currentQuestionIndex];
    let quizQuestionNo = currentQuestionIndex = 1;
    quizQuestionElement.innerHTML = quizQuestionNo + "." + currentQuestion.question;

    currentQuestion.answer.forEach(choice => {
        const button = document.createElement('button');
        console.log(currentQuestion)
        button.innerHTML = choice.text;
        button.classList.add('choice');
        answerButton.appendChild(button)
        quizQuestionElement.appendChild(button)
        if(choice.correct){
            button.dataset.correct = choice.correct
        }
        button.addEventListener("click", selectchoice)
    });
}

function resetState(){
    nextButton.style.display = 'none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectchoice (e){
    const selectedBtn = e.target;
    // console.log(selectedBtn)
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
        nextButton.style.display = 'block;'
    }

function showScore(){
    resetState();
    quizQuestionElement.innerHTML = `You scored ${score} out of ${question.length}`;
    nextButton.innerHTML = "Restart"
}
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.legnth){
            showquizQuestion();
        }else{
            showScore();
        }
    }

    nextButton.addEventListener('click', ()=>{
        if(currentQuestionIndex < quizQuestion.length){
            handleNextButton();
        }else{
            start()
        }
    });

// start();

// // Next steps: Add event listeners, to each of the three remaining buttons. "Check answer", create a check answer function that calls current question function after you increment the index by 1. 
