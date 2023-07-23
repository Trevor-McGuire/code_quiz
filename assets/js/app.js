// list of all quizes
import { css } from "./quizzes/css.js"
import { html } from "./quizzes/html.js"
import { js } from "./quizzes/js.js"

// global variables
var clockInterval = ''
var timerVal = 60
var penaltyVal = 5
var correctAnswersVal = 0
var wrongAnswersVal = 0
var activeQuiz = ''
var activeQuizArray = [css.title,html.title,js.title] // todo

// main app
export var app = {
  // runs once at the start of the app
  init: () => {
    console.log(this)

    // create elements and deconstruct along the way
    app.main = document.createElement("main")
    var { main } = app
    main.header = document.createElement("header")
    main.section = document.createElement("section")
    main.footer = document.createElement("footer")
    var { header, section, footer } = main
    header.h1 = document.createElement("h1")
    section.quizzesList = document.createElement("div")
    section.quizStarted = document.createElement("div")
    section.quizFinished = document.createElement("div")
    section.scoreboard = document.createElement("div")
    section.about = document.createElement("div")
    footer.aboutBtn = document.createElement("button")
    footer.scoreboardBtn = document.createElement("button")
    footer.backBtn = document.createElement("button")
    footer.restartBtn = document.createElement("button")
    var { h1 } = header
    var { quizzesList, quizStarted, quizFinished, scoreboard, about } = section
    var { aboutBtn, scoreboardBtn, backBtn, restartBtn } = footer

    // add class names
    h1.classList.add("h1")
    quizzesList.classList.add("quizzesList")
    quizStarted.classList.add("quizStarted")
    quizFinished.classList.add("quizFinished")
    scoreboard.classList.add("scoreboard")
    about.classList.add("about")
    aboutBtn.classList.add("aboutBtn", "button-17")
    scoreboardBtn.classList.add("scoreboardBtn", "button-17")
    backBtn.classList.add("backBtn", "button-17")
    restartBtn.classList.add("restartBnt", "button-17")

    //add Text
    
    aboutBtn.textContent = "About"
    scoreboardBtn.textContent = "Scoreboard"
    backBtn.textContent = "Back"
    restartBtn.textContent = "Restart"
 
    // append all elemnts to the page
    document.body.append(main)
    main.append(header,section,footer)
    header.append(h1)
    section.append(quizzesList,quizStarted,quizFinished,scoreboard,about)
    footer.append(aboutBtn,scoreboardBtn,backBtn,restartBtn)

    // add event listeners to footer buttons
    aboutBtn.addEventListener("click",function() {console.log("aboutBtn clicked");app.footerControls("About","about")})
    scoreboardBtn.addEventListener("click",function() {console.log("scoreboardBtn clicked");app.footerControls("Scoreboard","scoreboard")})
    backBtn.addEventListener("click",function() {console.log("backBtn clicked");app.reset()})
    restartBtn.addEventListener("click",function() {console.log("restartBtn clicked");app.reset()})

    // call app.reset() for the first time
    app.reset()

    // bring in buttons for quizzesList
    quizzesList.append(css.init(),html.init(),js.init())
  },
  // runs to get app back to starting state
  reset: function() {
    console.log("app.reset()")
    var { main } = app
    var { header, section, footer } = main
    var { h1 } = header
    var { quizzesList, quizStarted, quizFinished, scoreboard, about } = section
    var { aboutBtn, scoreboardBtn, backBtn, restartBtn } = footer

    h1.textContent = "Quiz"
    quizzesList.style.display = "grid"
    quizStarted.style.display = "none"
    quizFinished.style.display = "none"
    scoreboard.style.display = "none"
    about.style.display = "none"
    aboutBtn.style.display = "block"
    scoreboardBtn.style.display = "block"
    backBtn.style.display = "none"
    restartBtn.style.display = "none"

    timerVal = 60
    app.quiz.timer.stop()
  },
  // controls what the footer buttons do
  footerControls: function(title,display) {
    // deconstruct
    var { main } = app
    var { header, section, footer } = main
    var { h1 } = header
    var { quizzesList, quizStarted, quizFinished, scoreboard, about } = section
    var { aboutBtn, scoreboardBtn, backBtn, restartBtn } = footer

    // print title
    h1.textContent = title
    
    // display only the relivant sub-section
    quizzesList.style.display = "none"
    scoreboard.style.display = "none"
    about.style.display = "none"
    aboutBtn.style.display = "none"
    scoreboardBtn.style.display = "none"
    backBtn.style.display = "none"
    restartBtn.style.display = "none"
    switch(display) {
      case "quizzesList":
        quizzesList.style.display = "block"
        aboutBtn.style.display = "block"
        scoreboardBtn.style.display = "block"
        break;
      case "scoreboard":
        scoreboard.style.display = "grid"
        aboutBtn.style.display = "block"
        backBtn.style.display = "block"
        app.quiz.scoreboardSelector()
        break;
      case "about":
          about.style.display = "block"
          scoreboardBtn.style.display = "block"
          backBtn.style.display = "block"
          app.about()
        break;
      default:
        console.log("error in app.footerControls switch statement!")
    }
  },
  // contains everything to run the quiz
  quiz: {
    init: function(quiz) {
      console.log(quiz.title + " quiz started")

      // clear global variables
      timerVal = 60
      penaltyVal = 5
      correctAnswersVal = 0
      wrongAnswersVal = 0
      activeQuiz = quiz.title

      // deconstruct
      var { main } = app
      var { header, section, footer } = main
      var { h1 } = header
      var { quizzesList, quizStarted, quizFinished, scoreboard, about } = section
      var { aboutBtn, scoreboardBtn, backBtn, restartBtn } = footer
      
      // create  section>quizstarted sub-containers, deconstruct, and add classNames
      quizStarted.textContent = ''
      quizStarted.question = document.createElement("div")
      quizStarted.answers = document.createElement("div")
      quizStarted.clock = document.createElement("div")
      var {question,answers,clock} = quizStarted
      question.classList.add("question")
      answers.classList.add("answers")
      clock.classList.add("clock")
  
      // set displays and append sub-containers
      h1.textContent = quiz.title + " Quiz"
      quizzesList.style.display = "none"
      quizStarted.style.display = "block"
      quizFinished.style.display = "none"
      scoreboard.style.display = "none"
      about.style.display = "none"
      aboutBtn.style.display = "none"
      scoreboardBtn.style.display = "none"
      backBtn.style.display = "none"
      restartBtn.style.display = "block"
      quizStarted.append(question, answers, clock)
      
      // start timer and ask question
      app.quiz.timer.init()
      app.quiz.askQuestion(quiz.qa())
      
      // // display reset button
      // main.footer.reset.style.display = "inline"
    },
    askQuestion: function(qa) {
      // check if quiz is done
      if(qa.length === 0) {
        console.log("app.quiz.askQuestion() => no more questions")
        app.quiz.timer.stop()
        app.quiz.stop()
      } else {
        // select rand qa and deconstruct
        console.log("app.quiz.askQuestion() => question generation")
        var rand = Math.floor(Math.random() * qa.length)

        var question = app.main.section.quizStarted.question
        var answers = app.main.section.quizStarted.answers

        // clear question and answer then print question
        question.textContent = ''
        answers.textContent = ''
        question.textContent = qa[rand].question
        
        // add correct and wrong answers to answerArray[]
        var answersArray = []
        function answersArrayAppend(answer,val){
          for (var i=0;i<answer.length;i++) {
            var j = document.createElement("button")
            j.classList.add(val)
            j.textContent = answer[i]
            answersArray.push(j)
          }
        }
        answersArrayAppend(qa[rand].correct,"correct")
        answersArrayAppend(qa[rand].wrong,"wrong")

        // randomize the answerArray
        function randomizer(arr) {
          var currentIndex = arr.length;
          var temporaryValue;
          var randomIndex;
        
          // While there remain elements to shuffle...
          while (currentIndex !== 0) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
          }
        
          return arr;
        }
        answersArray = randomizer(answersArray)

        // remove the rand index from the qa array
        function sliceArray(array,rand) {
          var oldArray = array
          var newArray = []
          
          for(var i=0 ; i<oldArray.length ; i++) {
            if (i !== rand) {
              newArray.push(oldArray[i])
            }
          }
          return newArray
        }
        qa = sliceArray(qa,rand)

        // event listener to triggar that a guess was made
        answers.addEventListener("click", function eventHandler() {
          app.quiz.guessMade(qa)
          console.log(event.target.className)
          if (event.target.className !== "answers") this.removeEventListener('click',eventHandler)
        })

        // append the new answer buttons
        for (var i=0 ; i<answersArray.length ; i++) {
          answersArray[i].style.display = "block"
          answersArray[i].classList.add("button-78")
          answers.append(answersArray[i])
        }
      }
    },
    guessMade: function(qa) {
      console.log(event.target.className)
      if (event.target.className === "correct button-78") {
        console.log(`app.quiz.quessMade() => correct: ${correctAnswersVal}`)
        correctAnswersVal++
      } else if (event.target.className === "wrong button-78") {
        console.log(`app.quiz.quessMade() => wrong ${wrongAnswersVal}`)
        wrongAnswersVal++
        app.quiz.timer.penalty()
      } else {
        console.log("app.quiz.quessMade() => error")
        return
      }
      this.askQuestion(qa)
    },
    stop: function() {
      console.log("app.quiz.end()")

      // deconstuct
      var { quizStarted, quizFinished } = app.main.section

      // display correct sub-section
      quizStarted.style.display = "none"
      quizFinished.style.display = "block"

      // clear quizFinsished
      quizFinished.textContent = ''

      // create new elements
      quizFinished.correct = document.createElement("div")
      quizFinished.wrong = document.createElement("div")
      quizFinished.timer = document.createElement("div")
      quizFinished.input = document.createElement("input")
      quizFinished.submit = document.createElement("button")

      // deconstuct new elements
      var { correct, wrong, timer, input, submit } = app.main.section.quizFinished

      // append the new elements to the sub-section
      quizFinished.append(correct, wrong, timer, input, submit)

      correct.textContent = `Correct Answers: ${correctAnswersVal}`
      wrong.textContent = `Wrong Answers: ${wrongAnswersVal}`
      timer.textContent = `Remaining Time: ${timerVal}`
      input.placeholder = "Enter Initials"
      input.maxLength = "3"
      submit.textContent = "Submit"
      submit.addEventListener("click", function submitClicked() {
        app.quiz.scoreboardSubmition(input.value,timerVal, correctAnswersVal, wrongAnswersVal)
      })
    },
    scoreboardSubmition: function(initials,correct, wrong, timer) {
      if (initials.length < 2) {
        console.log("app.quiz.scoreboardSubmition() => error: not enough characters")
        alert("Please enter at least 2 characters for a valid entry.")
      } else {
 
        var newScore = { initials: initials,correct: correctAnswersVal, wrong: wrongAnswersVal, time: timerVal};
        var highscores = JSON.parse(localStorage.getItem(activeQuiz)) || [];
        highscores.push(newScore);
        highscores.sort((a, b) => b.correct - a.correct || b.time - a.time);
        if (highscores.length > 10) highscores.pop()
        localStorage.setItem(activeQuiz, JSON.stringify(highscores));

        app.quiz.scoreboard(true)

      }
    },
    scoreboard: function() {
      console.log("app.quiz.scoreboard()")

      // get highscores from local
      var highscores = JSON.parse(localStorage.getItem(activeQuiz)) || [];

      // deconstruct
      var {quizFinished,scoreboard} = app.main.section

      // set displays
      app.main.header.h1.textContent = `${activeQuiz} Scoreboard`
      app.main.header.h1.style.color = "#5468ff"
      scoreboard.textContent = ''
      quizFinished.style.display = "none"
      scoreboard.style.display = "grid"

      // create table of highscores
      var table = document.createElement("table")
      table.innerHTML = `<th>Place</th><th>Initials</th><th>Correct Answers</th><th>Wrong Answers</th><th>Time Remaining</th>`
      for (var i = 0 ; i < highscores.length ; i++) {
        var tr = document.createElement("tr")
        tr.innerHTML = `<td>${i+1}</td><td>${highscores[i].initials}</td><td>${highscores[i].correct}</td><td>${highscores[i].wrong}</td><td>${highscores[i].time}</td>`
        table.append(tr)
      }

      // button that resets the highscores
      var reset = document.createElement("button")
      reset.textContent = "Reset"
      reset.addEventListener("click",function() {
        localStorage.setItem(activeQuiz, JSON.stringify([]));
        app.quiz.scoreboard()
      })

      var empty = document.createElement("div")
      empty.textContent = `There are currently to scores saved for the ${activeQuiz} quiz.`

      if (highscores.length === 0) {
        scoreboard.append(empty)
      } else {
        scoreboard.append(table,reset)
      }

      
    },
    scoreboardSelector: function() {
      console.log("app.quiz.scoreboardSelector()")

      var {scoreboard} = app.main.section

      // set displays
      scoreboard.textContent = ''
      scoreboard.style.display = "grid"

      for (var i=0 ; i<activeQuizArray.length ; i++) {
        var button = document.createElement("button")
        button.textContent = activeQuizArray[i]
        
        var title = activeQuizArray[i]
        button.addEventListener("click", function(e) {
          activeQuiz = e.target.innerHTML
          app.quiz.scoreboard()
        })
        button.classList.add("button-29")
        scoreboard.append(button)
        
      }
    },
    timer: {
      init: function() {
        console.log("app.quiz.timer.inti()")
        
        // deconstruct
        var { clock} = app.main.section.quizStarted

        // set clock time and begin countdown
        clock.textContent = timerVal
        // console.log("clockInterval " + timerVal)
        clockInterval = window.setInterval(function() {
          if (timerVal > 0) {
            timerVal--
            clock.textContent = timerVal
          } else {
            app.quiz.timer.stop()
          }
          // console.log("clockInterval " + timerVal)
        }, 1000);
      },
      stop: function() {
        console.log("app.quiz.timer.stop()")
        clearInterval(clockInterval)
        if(timerVal <= 0) app.quiz.stop()
      },
      penalty: function() {
        console.log("app.quiz.timer.penalty()")

        // deconstruct
        var { clock} = app.main.section.quizStarted
        
        // check remaining time and reduce or stop timer
        if (timerVal > 5) {
          timerVal -= penaltyVal
          clock.textContent = timerVal
        } else {
          app.quiz.timer.stop()
        }
        // console.log("clockInterval " + timerVal)
      },
    },
  },
  about: function() {
    console.log("app.about()")

    var {about} = app.main.section

    about.append("Test you Knowledge by completing the available quizzes as fast as you can. Beware, wrong answers will cost you valuable time. When completed, submit your initials for a change to dominate the scoreboard. Take your knowledge even further and try adding a quiz of your own. Good Luck!")
  },
  
}
app.init()