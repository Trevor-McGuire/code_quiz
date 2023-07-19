import {init} from "../../components/init.js"
import { quizStart } from "../quizzes/quizActions/quizStart.js"

export var reset = {
  title: "Reset",
  init: function() {
    var container = document.querySelector(".main-controls")
    var control = document.createElement("button")
    control.classList.add("reset-control")
    control.addEventListener("click",function() {
      init()
    })
    control.innerHTML = this.title;
    control.style.display = "none"
    container.append(control)
  },
}

