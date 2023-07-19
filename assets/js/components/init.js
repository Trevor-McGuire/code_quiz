import { html } from '../components/quizzes/html.js';
import { css } from '../components/quizzes/css.js';
import { js } from '../components/quizzes/js.js';
import { reset } from '../components/controls/reset.js'
import { about } from '../components/controls/about.js'
import { highscore } from '../components/controls/highscore.js'

export function init() {
  // clear body
  var body = document.querySelector("body")
  body.textContent = ""

    // build main container
    var mainContainer = document.createElement("div")
    mainContainer.classList.add("main-container")

      // build main title
      var mainTitle = document.createElement("div")
      mainTitle.textContent = "Quiz"
      mainTitle.classList.add("main-title")

      // build main quiz container
      var mainQuizContainer = document.createElement("div")
      mainQuizContainer.classList.add("main-quiz-container")

      // build main controls
      var mainControls = document.createElement("div")
      mainControls.classList.add("main-controls")


  // append and set listeners for buttons
  mainContainer.append(mainTitle,mainQuizContainer,mainControls)
  body.append(mainContainer)

  html.init()
  css.init()
  js.init()
  
  reset.init()
  about.init()
  highscore.init()
}