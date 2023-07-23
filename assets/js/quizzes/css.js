import { app } from "../app.js"

export var css = { // todo
  title: "CSS", // todo
  qa: function() {
    return [ // todo vvvv
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
      }, // todo ^^^^
    ]
  },
  init: function() {
    var btn = document.createElement("button")
    btn.addEventListener("click",this.clicked)
    btn.innerHTML = this.title;
    btn.classList.add("button-27")
    return btn
  },
  clicked: function() {
    console.log(css.title + " quiz clicked") // todo
    app.quiz.init(css) // todo
  },
}