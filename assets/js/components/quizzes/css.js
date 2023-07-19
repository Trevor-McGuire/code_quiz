import {quizStart} from "./quizActions/quizStart.js"

export var css = {
  title: "CSS",
  qAndA: [
    {
      question:
        "What does CSS stand for?",
      correct: [
        "Cascading Style Sheets",
      ],
      wrong: [
        "Computer Style Sheets",
        "Colorful Style Sheets",
        "Creative Style Sheets",
      ],
    },

  ],
  init: function() {
    var container = document.querySelector(".main-quiz-container")
    var button = document.createElement("button")
    button.addEventListener("click",function() {
      quizStart(css)
    })
    button.innerHTML = this.title;
    container.append(button)
  },
}