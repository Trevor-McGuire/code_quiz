export var about = {
  title: "About",
  init: function() {
    var container = document.querySelector(".main-controls")
    var control = document.createElement("button")
    control.classList.add("reset-control")
    control.addEventListener("click",startControl)
    control.innerHTML = this.title;
    container.append(control)
  },
}
function startControl() {

}

