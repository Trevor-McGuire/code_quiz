import { app } from "../app.js"

export var js = { // todo
  title: "JS", // todo
  qa: function() {
    return [
      {
        question:
          "What is the correct syntax for referring to an external script called 'xxx.js'?",
        correct: [
          "<script src='xxx.js'>",
        ],
        wrong: [
          "<script href='xxx.js'>",
          "<script name='xxx.js'>",
          "<script file='xxx.js'>",
        ],
      },
      {
        question:
          "How do you write 'Hello World' in an alert box?",
        correct: [
          "alert('Hello World');",
        ],
        wrong: [
          "msgBox('Hello World');",
          "alertBox('Hello World');",
          "msg('Hello World');",
        ],
      },
      {
        question:
          "How do you create a function in JavaScript?",
        correct: [
          "function myFunction() {}",
        ],
        wrong: [
          "function = myFunction() {}",
          "function:myFunction() {}",
          "function-myFunction() {}",
        ],
      },
      {
        question:
          "How do you call a function named 'myFunction'?",
        correct: [
          "myFunction()",
        ],
        wrong: [
          "call myFunction()",
          "call function myFunction()",
          "myFunction{}",
        ],
      },
      {
        question:
          "How do you write an IF statement in JavaScript?",
        correct: [
          "if (i == 5) {}",
        ],
        wrong: [
          "if i == 5 then {}",
          "if i = 5 then {}",
          "if i = 5 {}",
        ],
      },
      {
         question:
           "What is the output of the following code? \n var x = 10; \n function foo() { \n console.log(x); \n var x = 20; \n } \n foo(); ",
         correct: [
             'undefined'
         ],
         wrong: [
             '10',
             '20',
             'null'
         ]
       },
       {
         question:
           "What is the output of the following code? \n var x = { foo : 'bar' }; \n var y = { foo : 'bar' }; \n console.log(x === y); ",
         correct: [
             'false'
         ],
         wrong: [
             'true',
             'null',
             'undefined'
         ]
       },
       {
         question:
           "What is the output of the following code? \n var x = [1,2,3]; \n console.log(x[6]); ",
         correct: [
             'undefined'
         ],
         wrong: [
             'null',
             '0',
             'NaN'
         ]
       },
       {
         question:
           "What is the output of the following code? \n var x = [1,2,3]; \n console.log(x.length); ",
         correct: [
             '3'
         ],
         wrong: [
             '2',
             '4',
             'null'
         ]
       },
       {
         question:
           "What is the output of the following code? \n var x = [1,2,3]; \n console.log(x.pop()); ",
         correct: [
             '3'
         ],
         wrong: [
             '[1,2]',
             '[1,2,3]',
             '[2,3]'
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
    console.log(js.title + " quiz clicked") // todo
    app.quiz.init(js) // todo
  },
}
