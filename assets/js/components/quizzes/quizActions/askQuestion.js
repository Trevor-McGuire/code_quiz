export function askQuestion(quiz) {
  if (quiz.qAndA.length == 0) {
    quizEnd()
  } else {
    var questionContainer = document.querySelector(".question")
    var answersContainer = document.querySelector(".answers")

    var rand = Math.floor(Math.random() * quiz.qAndA.length)

    var question = quiz.qAndA[rand].question
    questionContainer.textContent = question

    var correct = quiz.qAndA[rand].correct
    for (var i = 0 ; i < correct.length ; i++) {
      var answers = document.createElement("li")
      answers.textContent = correct[i]
      answers.classList.add("correct")
      answersContainer.append(answers)
    }

    var wrong = quiz.qAndA[rand].wrong
    for (var i = 0 ; i < wrong.length ; i++) {
      var answers = document.createElement("li")
      answers.textContent = wrong[i]
      answers.classList.add("wrong")
      answersContainer.append(answers)
    }
  }
}