export var js = {
  title: "JS",
  init: function() {
    var container = document.querySelector(".main-quiz-container")
    var button = document.createElement("button")
    button.addEventListener("click",startQuiz)
    button.innerHTML = this.title;
    container.append(button)
  },
}
function startQuiz() {
  console.log("JS quiz init")
}