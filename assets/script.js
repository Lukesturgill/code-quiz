const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
const openQuestion = document.getElementById("openQues")
const timerDisplay = document.getElementById("timerDisplay")

var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

var totalTime = 45;
function startGame() {
    startButton.classList.add("hide")
    openQuestion.classList.add("hide")
    timerDisplay.classList.remove("hide")
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < question.length - 1) {
                gameOver();
            }
        }
    },1000);
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }
  
function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    //const correct = selectedButton.dataset.correct
   // setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
       // setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
    nextButton.classList.remove("hide")
}

const question = [
    {
        question: 'What does HTML stand for?',
        answers: [
          { text: 'Hypertype Markup Language', correct: false },
          { text: 'Hypertext Markup Language', correct: true },
          { text: 'Home Text Markup Language', correct: false },
          { text: 'How To Make Lasagna', correct: false }
        ]
      },
      {
        question: 'What year did JavaScrpit come out?',
        answers: [
          { text: '1985', correct: false },
          { text: '1999', correct: false },
          { text: '2008', correct: false },
          { text: '1995', correct: true }
        ]
      },
      {
        question: 'Who created JavaScript?',
        answers: [
          { text: 'Brendan Eich', correct: true },
          { text: 'Bill Gates', correct: false },
          { text: 'Elon Musk', correct: false },
          { text: 'Steve Jobs', correct: false }
        ]
      },
      {
        question: 'What is node.js an example of?',
        answers: [
          { text: 'An API', correct: false },
          { text: 'A server-side JavaScript', correct: true },
          { text: 'A Front-End Development software', correct: false },
          { text: 'A CSS Framework', correct: false }
        ]
      }
]