

//laying out the starting variables
var startGameBtn = document.querySelector("#start-game");
var startPrompt = document.querySelector("#start-prompt")
var startDirect = document.querySelector("#directions");
var questionPrompt = document.querySelector("#question-prompt")
var questionText = document.querySelector("#question-text");
var questionOptions = document.querySelector(".question-options")
var timerContainer = document.querySelector(".timer-container");
var timeSpan = document.querySelector("#time");
var questionIndex = 0;
var time = 75;
var timer;
var questions = [



    {
        text: "Commonly used data types do NOT include:",
        options: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts",
    },
    {
        text: "The condition in an if/else statement is enclosed within:",
        options: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
        answer: "Parenthesis",
    },

    {
        text: "Arrays in Javascript can be used to store:",
        options: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
        answer: "All of the above",
    },

    {
        text: "String valuse must be enclosed in ____ when being assigned to variables:",
        options: ["Commas", "Curly Brackets", "Quotation Marks", "Parenthesis"],
        answer: "Quotation Marks",
    },

    {
        text: "A very useful tool during devlopment and debugging for printing content to the debugger is:",
        options: ["Javascript", "Terminal/Bash", "For Loops", "console.log"],
        answer: "console.log",
    }
]

startGameBtn.addEventListener("click", function (e) {
    startPrompt.style.display = "none";
    startDirect.style.display = "none";
    startGameBtn.style.display = "none";
    questionPrompt.style.display = "block";
    timerContainer.style.display = "block";
    renderQuestion();
    startTimer();

});

function renderQuestion() {
    var question = questions[questionIndex];
    questionText.textContent = questions[questionIndex].text;
    questionOptions.innerHTML = "";

    for (var i = 0; i < question.options.length; i++) {
        var btn = document.createElement("button");
        btn.setAttribute("class", "btn-primary");
        btn.setAttribute("Value", question.options[i]);
        btn.textContent = question.options[i];
        questionOptions.append(btn);
        
    }

}

function startTimer() {

    timer = setInterval(function () {
        time--;
        timeSpan.textContent = time;
        if (time === 0) {
            endGame();
        }
    }, 1000)
}



document.body.addEventListener("click", function (e) {
    e.preventDefault;
    if (!e.target.matches(".question-option")) return;

    var value = e.target.value;
    if (questions[questionIndex.answer] === value) {
        console.log("Correct!");

    } else {
        console.log("You were wrong!");
        time -= 10;
        timeSpan.textContent = time;
    }
    questionIndex++;
    renderQuestion()

     if (questionIndex > 3 || time === 0) {
       endGame()
}
});

endGame()


function endGame() {
    if (questionIndex > 3 || time === 0) {
        clearInterval(timer);
        questionPrompt.style.display = "none";
        questionOptions.style.display = "none";
       var p = document.createElement("p")
       p.setAttribute("Style", "text-align: center");
       p.textContent = ("Please Submit Your Score. Try to get a higher score each time. Thanks for playing!")        
        textContent.append(p)
        var h1 = document.createElement("h1")
        h1.setAttribute("Style", "font-weight: bold, text-align: center");
        h1.textContent = ("Game Over!")
        textContent.append(h1)
        



    }
}
