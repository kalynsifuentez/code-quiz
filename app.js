const quizQuestion = [
{
    question: "What is an element?",
    answer: [
        { text: "A compnent of an HTML document", correct: true},
        { text: "A p tag", correct: fasle},
        { text: "The start of a code", correct: false},
    ]
},
{
    question: "How does a title tag operate?",
    answer: [
        { text: "Title tags are crucial in naming your app and are important for SEO.", correct: true},
        { text: "Title tags are not important.", correct: fasle},
        { text: "Title tags are headers.", correct: false},
    ]
},
{
    question: "What does DOM stand for?",
    answer: [
        { text: "Document Object Model", correct: true},
        { text: "Document Or Model", correct: fasle},
        { text: "Document Object Mouse", correct: false},
    ]
},
]
const quizQuestionElement = getElementbyId("question");
const answerButton = document.getElementById('answer');
const nextButton = document.getElementById('next');

let currentQuestionIndex = 0;
let score = 0;


function start(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.Button.innerHTML = "Next";
}

function showquizQuestion(){
    let currentQuestion = quizQuestion[currentQuestionIndex];
    let quizQuestionNo = currentQuestionIndex =1;
    quizQuestionElement.innerHTML = quizQuestionNo + "." + currentQuestion.question;
    nextButton.Button.innerHTML = "Next";
}
    currentquizQuestion.answer.forEach(choice => {
        const button = document.createElement('button');
        button.innerhtml = answer.txt;
        button.classList.add('btn');
        answerButton.appendChild(button)
    });

start();