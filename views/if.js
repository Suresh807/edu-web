
var gameOver = "<h1>Result</h1>";
    gameOver += "<h2 id = 'score'> Your score is " + quiz.score + " out of 10! Thank you for playing, " + name + "!</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOver;
    clearInterval(downloadTimer);
    document.getElementById("countdowntimer").innerHTML = "<h1>Game Over</h1>";
    showCurrentScore();