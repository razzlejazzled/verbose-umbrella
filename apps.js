

//laying out the starting variables
var startGameBtn = document.querySelector("#start-game");
var startPrompt = document.querySelector("#start-prompt")
var startDirect = document.querySelector("#directions");
var questionPrompt = document.querySelector("#question-prompt")
var questionText = document.querySelector("#question-text");
var questionOptions = document.querySelector(".question-options")
var timerContainer = document.querySelector(".timer-container");
var timeSpan = document.querySelector("#time");
var response = document.querySelector("#response")
var end = document.querySelector(".Game-Over")
var subBox = document.querySelector(".submission-box")
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
        btn.setAttribute("class", "btn-primary question-options");
     
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
    var value = e.target.value;
    if (questions[questionIndex].answer === value) {
        response.textContent = "You are correct!"

    } else {
        response.textContent = "You are wrong!"
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
        //clear out screen
        clearInterval(timer);
        questionPrompt.style.display = "none";
        questionOptions.style.display = "none";
        response.textContent = "";

        //create Game Over Messarge Header
        var h1 = document.createElement("h1")
        h1.setAttribute("Style", "font-weight: bold, text-align: center");
        h1.textContent = ("Game Over!")
        end.append(h1)
        end.textContent.append(h1)
        
        //Create Game Over Message
       var p = document.createElement("p")
       p.setAttribute("Style", "text-align: center");
       p.textContent = ("Please Submit Your Score. Try to get a higher score each time. Thanks for playing!")   
       end.append(p)     
        p.textContent.append(end)
       
        //Create Submission Box
        var box = document.createElement("input")
        box.textContent = ("Your Initials")
        box.append(subBox)



        //And Submission button
        var subBtn = document.createElement("button")
        subBtn.textcontent = "Submit"
        subBtn.append(subBox)


    }
}

//save submission in local file
document.body.addEventListener("click", function(e){
    var score = (subBtn.userInput +) //figure out a way to make the remaining time populate here
    
    JSON.stringify(score)
    localStorage.setItem("score", JSON.stringify(score))

    ///make it so that the high score is empty until this functino is run, then append it with the new data. 
})

