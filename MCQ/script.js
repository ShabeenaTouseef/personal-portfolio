const quizDB = [{
    questions: "1: The ratio of two number is 4:7 and their HCF is 6. Find out their LCM",
    a: "164",
    b: "168",
    c: "174",
    d: "184",
    ans: "ans2"
},
{
    questions: "2: Half percent, written as a decimal, is",
    a: "0.2",
    b: "0.02",
    c: "0.005",
    d: "0.05",
    ans: "ans3"
},
{
    questions: "3: The average of the first five multiples of 9 is",
    a: "20",
    b: "27",
    c: "28",
    d: "30",
    ans: "ans2"
},
{
    questions: "4: The sum of ages of 5 children born at the intervals of 3 years each is 50 years.What is the age of the youngest child?",
    a: "4",
    b: "8",
    c: "10",
    d: "None of these",
    ans: "ans1"
},
{
    questions: "5: What was the day of the week on 28th May,2006?",
    a: "Friday",
    b: "Saturday",
    c: "Monday",
    d: "Sunday",
    ans: "ans4"
},

];

const questions = document.querySelector('.questions');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestions = () => {
const questionList = quizDB[questionCount];

questions.innerText = questionList.questions;

option1.innerText = questionList.a;
option2.innerText = questionList.b;
option3.innerText = questionList.c;
option4.innerText = questionList.d;
}

loadQuestions();

const getCheckAnswer = () => {
let answer;

answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
        answer = curAnsElem.id;
    }
});
return answer;
};

const deselectAll = () => {
answers.forEach((curAnsElem) => curAnsElem.checked = false);
}


submit.addEventListener('click', () => {
const checkedAnswer = getCheckAnswer();
console.log(checkedAnswer);
if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
};

questionCount++;

deselectAll();

if (questionCount < quizDB.length) {
    loadQuestions();
} else {

    showScore.innerHTML = `
    <h3> you scored ${score}/${quizDB.length} 😀<h3>
    <button class="btn" onclick="location.reload()">Play Again</button>
    `;
    showScore.classList.remove('scoreArea');
}



});