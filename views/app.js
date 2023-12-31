

// Countdown clock
var timeleft = 90;
var downloadTimer = setInterval(function () {
    timeleft--;
    document.getElementById("countdowntimer").textContent = "The quiz will end in " + timeleft + " Seconds";
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        showScores();
    }

}, 1000);

// Handling of questions
function codeQuiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

// Pulling the questions
codeQuiz.prototype.getjsQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

// When the quiz is over
codeQuiz.prototype.isEnded = function () {
    return this.questions.length === this.questionIndex;
}

// Scoring the guesses
codeQuiz.prototype.guess = function (answer) {
    if (this.getjsQuestionIndex().correctAnswer(answer)) {
        this.score++;
        
    }

    else {
        
        this.score--;
        timeleft -= 10;
    }

    this.questionIndex++;
}
// Items needed for array
function jsQuestion(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// Answer is correct
jsQuestion.prototype.correctAnswer = function (choice) {
    return choice === this.answer;
}

//    Starting the game
function populate() {
    if (quiz.isEnded()) {
        showScores();
    }

    else {
        // show Question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getjsQuestionIndex().text;

        // show Choices
        var choices = quiz.getjsQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("button" + i, choices[i]);
        }

        // Run progress bar
        showProgress();
    }
};

// Answering the question
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}

// Show current score
function showCurrentScore() {
    var currentScore = quiz.score;
    var element = document.getElementById("playerScore");
    // element.innerHtml = currentScore;
    console.log(currentScore);
}

// Progress bar at bottom of quiz
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

// Scoring page
function myFunction() {
    var x = document.getElementById("frm1");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}

//   Grabbing score an name for leaderboard
function showScores() {
    var scoreObject = {
        name: name,
        score: quiz.score
    }

    // When game is over
    var gameOver = "<h1>Test has been submitted </h1>";
    
    var element = document.getElementById("quiz");
    element.innerHTML = gameOver;
    clearInterval(downloadTimer);
    document.getElementById("countdowntimer").innerHTML = "<h1>Game Over</h1>";
    showCurrentScore();

    // Storing names to local storage
    if (name !== "") {
        var scores =
            JSON.parse(window.localStorage.getItem("scores")) || [];
        scores.push(scoreObject);
        window.localStorage.setItem("scores", JSON.stringify(scores));
    }

    document.addEventListener('DOMContentLoaded', () => {
        var elements = []
        var container = document.querySelector('#container')
        // Add each row to the array
        container.querySelectorAll('.row').forEach(el => elements.push(el))
        // Clear the container
        container.innerHTML = ''
        // Sort the array from highest to lowest
        elements.sort((a, b) => b.querySelector('quiz.score').textContent - a.querySelector('quiz.score').textContent)
        // Put the elements back into the container
        elements.forEach(e => container.appendChild(e))
        var result = name + scores;
        function Redirect() {
            window.location = "./wall-of-fame.html";
        }
        document.write("You will be redirected to a new page in 5 seconds");
        setTimeout('Redirect()', 5000);

    });
};

// Questions
var questions = [
    new jsQuestion("1. What does javaScript provide to code?", ["a. Curb Appeal", "b. Functionality", "c. The Foundation", "d. None of the above"], "b. Functionality"),
    new jsQuestion("2. What is a simple defintion of javaScript?", ["a. JavaScript gives web pages interactive elements that engage a user.", "b. JavaScript gives structure and style to web pages.", "c. JavaScript defines rules for the construction of a document.", "d. None of the Above"], "a. JavaScript gives web pages interactive elements that engage a user."),
    new jsQuestion("3. What are commonly used in computer programs to organize data so that a related set of values can be easily sorted or searched?", ["a. Functions", "b. Objects", "c. Arrays", "d. None of the above"], "c. Arrays"),
    new jsQuestion("4. The following is an example of what? for (var i=0, i < userlength, i++)", ["a. Function", "b. Array", "c. Object", "d. For Loop"], "d. For Loop"),
    new jsQuestion("5. In the index of an array is 5, how many items are inside the array?", ["a. 7", "b. 4", "c. -1", "d. 6"], "d. 6"),
    new jsQuestion("6. What is a variable?", ["a. A request made by a program or script that performs a predetermined function.", "b. A block of code designed to perform a particular task.", "c. A container for storing data values.", "d. None of the Above"], "c. A container for storing data values."),
    new jsQuestion("7. What is a function call?", ["a. A request made by a program or script that performs a predetermined function.", "b. A special variable, which can hold more than one value at a time.", "c. A method.", "d. None of the Above"], "a. A request made by a program or script that performs a predetermined function."),
    new jsQuestion("8. If you had the string var txt = (ABCDEFGHIJKLMNOPQRSTUVWXYZ), var sln would equal what?", ["a. txt", "b. (ABCDEFGHIJKLMNOPQRSTUVWXYZ)", "c. txt.length", "d. 26"], "c. txt.length"),
    new jsQuestion("9. How do you call the function showScore??", ["a. showScore()", "b. Undefined", "c. function ()", "d. function showScore(score)"], "a. showScore()"),
    new jsQuestion("10. Strict equality means values which we are comparing must have the same type, and is represented by which operator?", ["a. =", "b. ===", "c. ==", "d. >="], "b. ==="),
];

var quiz = new codeQuiz(questions);

populate();