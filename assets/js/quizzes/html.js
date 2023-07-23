import { app } from "../app.js"

export var html = { // todo
  title: "HTML", // todo
  qa: function() {
    return [
      {
        question:
          "What is the correct HTML for creating a hyperlink?",
        correct: [
          '<a href="example.com">example.com</a>',
        ],
        wrong: [
          '<a>example.com</a>',
          '<a name="example.com">example.com</a>',
          '<a url="example.com">example.com</a>',
        ],
      },
      {
        question:
          "What is the HTML tag for inserting a line break?",
        correct: [
          "<br>",
        ],
        wrong: [
          "<break>",
          "<lb>",
          "<nl>",
        ],
      },
      {
        question:
          "What is the HTML tag for making text bold?",
        correct: [
          "<strong>",
        ],
        wrong: [
          "<bold>",
          "<b>",
          "<important>",
        ],
      },
      {
        question:
          "What is the HTML tag for creating an unordered list?",
        correct: [
          "<ul>",
        ],
        wrong: [
          "<ol>",
          "<li>",
          "<list>",
        ],
      },
      {
        question:
          "What is the HTML tag for creating a table?",
        correct: [
          "<table>",
        ],
        wrong: [
          "<t>",
          "<tab>",
          "<tbl>",
        ],
      },
      {
        question:
          "What is the HTML tag for creating a form?",
        correct: [
          "<form>",
        ],
        wrong: [
          "<input>",
          "<button>",
          "<submit>",
        ],
      },
      {
        question:
          "What is the HTML tag for creating a text input field?",
        correct: [
          '<input type="text">',
        ],
        wrong: [
          '<text>',
          '<input type="input">',
          '<input type="textbox">',
        ],
      },
       {
         question:
           "What is the HTML tag for creating a drop-down list?",
         correct: [
             "<select></select>"
         ],
         wrong: [
             "<dropdown></dropdown>",
             "<list></list>"
         ]
       },
       {
         question:
           "Which of these tags are all <table> tags?",
         correct: [
             "<table><tr><td></td></tr></table>"
         ],
         wrong: [
             "<table><head><tfoot></tfoot></head><body><tr><td></td></tr></body></table>",
             "<thead><body><tr><td></td></tr></body></thead>"
         ]
       }
    ];
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