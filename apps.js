

//laying out the starting variables
var startGameBtn = document.querySelector("#start-game");
var startPrompt = document.querySelector("#start-prompt")
var startDirect = document.querySelector("#directions");
var questionPrompt = document.querySelector("#question-prompt")
var questionText = document.querySelector("#question-text");
var questionOptions = document.querySelector(".question-options")
var questions = [
    { 
        text:"Commonly used data types do NOT include:",
        options: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts",
    },
    { 
        text:"The condition in an if/else statement is enclosed within:",
        options: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
        answer: "Parenthesis",
    },
    
    { 
        text:"Arrays in Javascript can be used to store:",
        options: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
        answer: "All of the above",
    },
    
    { 
        text:"String valuse must be enclosed in ____ when being assigned to variables:",
        options: ["Commas", "Curly Brackets", "Quotation Marks", "Parenthesis"],
        answer: "Quotation Marks",
    },
    
    { 
        text:"A very useful tool during devlopment and debugging for printing content to the debugger is:",
        options: ["Javascript", "Terminal/Bash", "For Loops", "console.log"],
        answer: "console.log",
    }
]
var questionIndex = 0;


startGameBtn.addEventListener("click", function(e){
    startPrompt.style.display = "none";
    startDirect.style.display = "none";
    startGameBtn.style.display = "none";
    questionPrompt.style.display = "block";
    renderQuestion();
 
});



function renderQuestion(){
    var question =questions[questionIndex];
    questionText.textContent = questions[questionIndex].text;
    console.log(questions[questionIndex].text)
    questionOptions.innerHTML = "";
    for (var i = 0; i < question.options; i++) {
        var btn = document.createElement("button");
        btn.setAttribute("style", "display: initial")
        btn.setAttribute("class", "btn btn-primary");
        btn.setAttribute("Value", question.options[i]);
        btn.textContent = question.options[i];
        questionOptions.append(btn);
    }

}




document.body.addEventListener("click", function (e){
    if (!e.target.matches(".question-option")) return;

    var value =e.target.value;
    if (questions[questionIndex.answer] === value){
        console.log("Correct!");
        timer++;
    } else {
        console.log("You were wrong!");
        timer--
    }
    questionIndex++;
    renderQuestion()
});

var seconds=75;
var timer;
function Countdown() {
  if(seconds < 75) {
    document.getElementById("timer").innerHTML = seconds;
  }
     if (seconds >0 ) {
         seconds--;
     } else {
         clearInterval(timer);
        //kick it to the ending screen;
     }
} 