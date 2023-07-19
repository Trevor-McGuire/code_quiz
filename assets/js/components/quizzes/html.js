import {quizStart} from "./quizActions/quizStart.js"

export var html = {
  title: "HTML",
  qAndA: [
    {
      question:
        "What does HTML stand for?",
      correct: [
        "Hyper Text Markup Language",
      ],
      wrong: [
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
      ],
    },
    {
      question:
        "Who is making the Web standards?",
      correct: [
        "The World Wide Web Consortium",
      ],
      wrong: [
        "Microsoft",
        "Mozilla",
        "Google",
      ],
    },
  ],
  init: function() {
    var container = document.querySelector(".main-quiz-container")
    var button = document.createElement("button")
    button.addEventListener("click",function() {
      quizStart(html)
    })
    button.innerHTML = this.title;
    container.append(button)
  },
}