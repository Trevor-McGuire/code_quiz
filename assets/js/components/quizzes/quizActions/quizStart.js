import { askQuestion } from "./askQuestion.js"

export function quizStart(quiz) {
  console.log(quiz.title + " quiz started")

  var mainTitle = document.querySelector(".main-title")
  mainTitle.textContent = quiz.title

  var mainQuizContainer = document.querySelector(".main-quiz-container")
  mainQuizContainer.textContent = ''
  
  var container = document.querySelector(".main-quiz-container")
  container.textContent = "";
  
  var timer = document.createElement("div")
  timer.classList.add("timer")
  timer.textContent = 60
  var timerInterval = window.setInterval(() => {
    var timer = document.querySelector(".timer")
    timer.textContent -= 1;
    
    var reset = document.querySelector(".reset-control")
    reset.addEventListener("click", function() {
      clearInterval(timerInterval)
    })
  }, 1000);
  
  var qAndAContainer = document.createElement("div")
  qAndAContainer.classList.add("q-and-a-container")

  var question = document.createElement("div")
  question.classList.add("question")
  question.textContent = "question"
  
  var answers = document.createElement("ul")
  answers.classList.add("answers")

  qAndAContainer.append(question,answers)
  container.append(timer,qAndAContainer)

  askQuestion(quiz)
  
  var resetButton = document.querySelector(".reset-control")
  resetButton.style.display = "inline"
}
