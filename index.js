boxesColores = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];
levelCounter = 0;

$(document).one("keypress",function(){
    nextSequence();
    
})

$(".btn").on("click", handleClick);

function handleClick() {
    userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    $(this).fadeTo(100, 0.3, function () { $(this).fadeTo(300, 1.0); })
    playSound(userChosenColor);
    generateAnimation(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("sucsess");
        if (userClickedPattern.length === gamePattern.length){
    
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    }
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
        startOver();  
        console.log("wrong");
    
      }      }
      

function startOver(){
$("#level-title").text("Press Any Key to Start");
gamePattern = [];
userClickedPattern = [];
levelCounter = 0;
$(document).one("keypress",function(){
    nextSequence();
    
})
}   


function nextSequence() {
        userClickedPattern=[];
        levelCounter++;
        $("#level-title").text("Level  "+levelCounter);


        randomNumber = Math.floor((Math.random() * 4));
        randomChosenColor=boxesColores[randomNumber];
        gamePattern.push(randomChosenColor);
        chosenColor = $("#" + randomChosenColor);
        chosenColor.fadeTo(100, 0.3, function () { $(this).fadeTo(300, 1.0); });
        playSound(randomChosenColor);

    }


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

  function generateAnimation(currentColor){
    $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 150);
  }

