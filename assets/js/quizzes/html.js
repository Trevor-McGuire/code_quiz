import { app } from "../app.js"

export var html = { // todo
  title: "HTML", // todo
  qa: function() {
    return [ // todo vvvv
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
      }, // todo ^^^^
    ]
  },
  init: function() {
    var btn = document.createElement("button")
    btn.classList.add(this.title.toLowerCase(),"quiz")
    btn.addEventListener("click",this.clicked)
    btn.innerHTML = this.title;
    btn.classList.add("button-27")
    return btn
  },
  clicked: function() {
    console.log(html.title + " quiz clicked") // todo
    app.quiz.init(html) // todo
  },
}