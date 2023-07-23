import { app } from "../app.js"

export var js = { // todo
  title: "JS", // todo
  qa: function() {
    return [ // todo vvvv
      {
        question:
          "What does JS stand for?",
        correct: [
          "JavaScript",
        ],
        wrong: [
          "JunkStuff",
          "JollyScreen",
          "JourneyScamp",
        ],
      },
    ] // todo ^^^^
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
    console.log(js.title + " quiz clicked") // todo
    app.quiz.init(js) // todo
  },
}
