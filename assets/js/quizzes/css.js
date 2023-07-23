import { app } from "../app.js"

export var css = { // todo
  title: "CSS", // todo
  qa: function() {
    return [
      {
        question:
          "What is the correct CSS syntax for making all the <p> elements bold?",
        correct: [
          "p {font-weight:bold;}",
        ],
        wrong: [
          "p style=\"text-size:bold;\"",
          "p {text-size:bold;}",
          "p {font:bold;}",
        ],
      },
      {
        question:
          "What is the correct CSS syntax for changing the background color of a <div> element?",
        correct: [
          "div {background-color:#000000;}",
        ],
        wrong: [
          "div {bgcolor:#000000;}",
          "div {color:#000000;}",
          "div {background:#000000;}",
        ],
      },
      {
        question:
          "What is the correct CSS syntax for changing the text color of a <h1> element?",
        correct: [
          "h1 {color:#000000;}",
        ],
        wrong: [
          "h1 {text-color:#000000;}",
          "h1 {foreground-color:#000000;}",
          "h1 {font-color:#000000;}",
        ],
      },
      {
        question:
          "What is the correct CSS syntax for making all <a> elements red?",
        correct: [
          "a {color:red;}",
        ],
        wrong: [
          "a {text-color:red;}",
          "a {foreground-color:red;}",
          "a {font-color:red;}",
        ],
      },
      {
        question:
          "What is the correct CSS syntax for making all <h1> elements center-aligned?",
        correct: [
          "h1 {text-align:center;}",
        ],
        wrong: [
          "h1 {align:center;}",
          "h1 {text-position:center;}",
          "h1 {position:center;}",
        ],
      },
      {
        question:
          "What is the correct CSS syntax for making all <p> elements with class=\"center\" center-aligned?",
        correct: [
            'p.center{text-align:center;}'
         ],
         wrong: [
           'p.center{align:center;}',
           'p.center{text-position:center;}',
           'p.center{position:center;}'
         ]
       },
       {
         question:
           "What is the correct CSS syntax for making all <img> elements with class=\"center\" center-aligned?",
         correct: [
             'img.center{display:block;margin:auto;}'
         ],
         wrong: [
             'img.center{display:block;margin-left:auto;margin-right:auto;}',
             'img.center{display:block;margin-left:auto;margin-right:auto;text-align:center;}',
             'img.center{display:block;margin-left:auto;margin-right:auto;text-position:center;}'
         ]
       },
       {
         question:
           "What is the correct CSS syntax for making all <li> elements with class=\"center\" center-aligned?",
         correct: [
             'li.center{text-align:center;}'
         ],
         wrong: [
             'li.center{align:center;}',
             'li.center{text-position:center;}',
             'li.center{position:center;}'
         ]
       },
       {
         question:
           "What is the correct CSS syntax for making all <table> elements with class=\"center\" center-aligned?",
         correct: [
             'table.center{margin-left:auto;margin-right:auto;}'
         ],
         wrong: [
             'table.center{text-align:center;}',
             'table.center{text-position:center;}',
             'table.center{position:center;}'
         ]
       },
       {
         question:
           "What is the correct CSS syntax for making all <input> elements with class=\"center\" center-aligned?",
         correct: [
             'input.center{display:block;margin-left:auto;margin-right:auto;}'
         ],
         wrong: [
             'input.center{text-align:center;}',
             'input.center{text-position:center;}',
             'input.center{position:center;}'
         ]
       }
    ];
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