// creating the scrolling pages feel
var inputs = document.querySelectorAll('input') // select all inputs
var checkedInput = document.querySelector("#quizzes-section") // current expanded section
for (i=0 ; i<inputs.length ; i++) {
    inputs[i].addEventListener("change", swapInputs)
}
function swapInputs() {
    checkedInput.style.animation = "shrink-section .3s linear forwards" // shrink current section
    checkedInput = document.getElementById(event.target.dataset.section); // use input dataset to reassign current section var
    checkedInput.style.animation = "expand-section .3s linear forwards" // expand current section
}

// Generating the quizzes
var quizInputs = document.querySelectorAll("input[name='quiz-selector']")
for (i=0 ; i<quizInputs.length ; i++) {
    quizInputs[i].addEventListener("change" , startQuizMain)
}
function startQuizMain() {
    //startTutorial variables, function, and eventlistener
    var section = document.querySelector("#blank-section")
    var time = section.children[0].children[0]
    var timeFeedback = section.children[0].children[1]
    var question = section.children[1]
    var answers = section.children[2]
    var feedback = section.children[3]
    var tutorial = quizMaster.quizTutorial.slice()
    var tutorialBtn = section.children[4]
    var footer = document.querySelector("footer")
    var tutorialTimeout = []
    var quizStartTimeout = ''
    var startTime = 0
    startTutorial()
    function startTutorial() {
        // replace footer with end button
        button = document.createElement("button")
        button.textContent = "End Quiz"
        button.addEventListener("click", function() {location.reload();})
        footer.textContent = ""
        footer.append(button)

        time.textContent = ""
        feedback.textContent = ""
        timeFeedback.textContent = ""
        tutorialBtn.addEventListener("click", endTutorial);
        for (var i = 0; i < tutorial.length; i++) {
            tutorialTimeout[i] = setTimeout(runTutorial, i * 500);// todo change this value to a resonalbe one
            if (i==tutorial.length - 1) {
                quizStartTimeout = setTimeout(quizStart, i * 500); // todo change this value to a resonalbe one
            }
        }
    }
    function endTutorial() {
        tutorialBtn.remove()
        for (var i = 0; i < tutorialTimeout.length; i++) {
            window.clearTimeout(tutorialTimeout[i])
            console.log(1)
        }
        clearTimeout(quizStartTimeout)
        quizStart()
        question.textContent = "Good Luck!"
    }
    function runTutorial() {
        question.textContent = tutorial[0]
        tutorial.shift();
    }
    // start the quiz
    
    var quiz = quizMaster[event.target.id]
    var questionsShuffled = quiz.shift();
    questionsShuffled = shuffleArray(quiz)
    endQuiz = false
    function quizStart() {
        tutorialBtn.remove();
        startTime = 5;
        var quizStartInterval = setInterval(function() {
            time.textContent = startTime
            startTime--
            if(startTime == -1) {
                if(endQuiz == true) {
                    clearTimeout(quizStartInterval)
                    return
                }
                startTime = questionsShuffled.length * 10
                giveQuestion();
                endQuiz = true
            }
        },1000) //todo set this back to 1000
    }
    function giveQuestion() {
        question.textContent = questionsShuffled[0][0]
        questionsShuffled[0].shift()
        answers.textContent = ""
        for(i=0 ; i<questionsShuffled[0].length ; i++) {
            console.log(i)
            var li = document.createElement("li")
            li.textContent = questionsShuffled[0][i]
            if (i==0) {
                li.dataset.correct = true;
            } else {
                li.dataset.correct = false;
            }
            if (Math.random()>0.5) {
                answers.append(li)
            } else {
                answers.prepend(li)
            }
            li.addEventListener("click",guessMade)
        }
        questionsShuffled.shift();
    }
    function guessMade() {
        if (event.target.dataset.correct == true) {
            giveQuestion()
        } else {
            startTime -= 5
            giveQuestion()
        }
    }
}
var quizMaster = {
    quizTutorial: [
        "Welcome to the quiz.",
        "Here is a tutorial.",
        "Questions appear here.",
        "Multiple choice answers appear below.",
        "There is one right answer.",
        "Click the correct answer.",
        "Wrong answers deduct time.",
        "Correct answers do not.",
        "There is 10 seconds per question.",
        "There are XXXX questions total.",
        "Win by answering all questions.",
        "This gets you on the highscore board.",
        "Highscore are ranked by remaining time.",
        "Timer is in the top right.",
        "Quiz will start then the timer reaches zero",
        "Good Luck!",
    ],
    quizHTML: [
        ["HTML Quiz","Welcome to the HTML Quiz. This quiz will test your knowledge of HTML. You will be given 10 seconds per question. This quiz has 15 questions. Every wrong answer will deduct 10 seconds. Your final score is the amount of time remaining once the final question is answered. Good luck!"],
        ["question","correct answer1","correct answer1","correct answer1",],
        ["question","correct answer2","correct answer1","correct answer1",],
        ["question","correct answer3","correct answer1","correct answer1",],
        ["question","correct answer4","correct answer1","correct answer1",],
        ["question","correct answer5","correct answer1","correct answer1",],
    ],
    quizCSS: [
        ["CSS Quiz","Welcome to the CSS Quiz. This quiz will test your knowledge of CSS. You will be given 10 seconds per question. This quiz has 15 questions. Every wrong answer will deduct 10 seconds. Your final score is the amount of time remaining once the final question is answered. Good luck!"],
        ["question","correct answer","wrong answer",],
    ],
    quizJS: [
        ["JavaScript Quiz","Welcome to the JavaScript Quiz. This quiz will test your knowledge of JavaScript. You will be given 10 seconds per question. This quiz has 15 questions. Every wrong answer will deduct 10 seconds. Your final score is the amount of time remaining once the final question is answered. Good luck!"],
        ["question","correct answer","wrong answer","wrong answer",],
    ],
}

// array shuffle function with credit going to:
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
  }