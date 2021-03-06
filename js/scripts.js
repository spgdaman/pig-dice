var Players = function(name) {
  this.name = name;
  this.scoreBoard = 0;
  this.tempScore = 0;
  this.cumulativeScore = [];
};

var playerOne = new Players("Player 1");
var playerTwo = new Players("Player 2");


Players.prototype.tempScore = function() {
  return this.tempscore;
};

Players.prototype.scoreBoard = function() {
  return this.scoreBoard;
};

Players.prototype.hold = function() {
  this.scoreBoard += this.tempScore;
};

Players.prototype.clear = function() {
  this.tempScore = 0;
  this.cumulativeScore = [];
};

Players.prototype.roll = function() {
  var random = Math.floor(Math.random() * 6) + 1;
  this.tempScore += random;
  this.cumulativeScore.push(random);
};

Players.prototype.winner = function() {
  if(this.scoreBoard >= 100) {
    alert(this.name + "! You won the game!");
  }
};

// jQuery code
$(document).ready(function() {
  $("button#roll-1").click(function() {
    function readyPlayerOne() {
      playerOne.roll();
      var cumulativeScore = function() {
        return playerOne.cumulativeScore;
      };

      var cumScoreArray = cumulativeScore();
      var reverseArray = cumScoreArray.reverse();
      var checkIfOne = reverseArray[0];

      if (checkIfOne == 1) {
        playerOne.clear();
        alert("You lose your points, it's Player 2's turn to play");
      }
      return checkIfOne;
    }

    var insertScore = readyPlayerOne();
    if (insertScore == 1) {
      $("span#dice").empty();
    } else {
      $("span#dice").text(insertScore);
    }
  });

  $("button#roll-2").click(function() {
    function readyPlayerTwo() {
      playerTwo.roll();
      var cumulativeScore = function() {
        return playerTwo.cumulativeScore;
      };

      var cumScoreArray = cumulativeScore();
      var reverseArray = cumScoreArray.reverse();
      var checkIfOne = reverseArray[0];

      if (checkIfOne == 1) {
        playerTwo.clear();
        alert("You lose your points, it's Player 1's turn to play");
      }
      return checkIfOne;
    }

    var insertScore = readyPlayerTwo();
    if (insertScore == 1) {
      $("span#dice").empty();
    } else {
      $("span#dice").text(insertScore);
    }
  });

  $("button#hold-1").click(function() {
    playerOne.hold();
    $("span#p1-score").text(playerOne.scoreBoard);
    $("span#dice").empty();
    playerOne.tempScore = 0;

    alert("It is Player 2's turn to play");
    playerOne.winner();
  });

  $("button#hold-2").click(function() {
    playerTwo.hold();
    $("span#p2-score").text(playerTwo.scoreBoard);
    $("span#dice").empty();
    playerTwo.tempScore = 0;

    alert("It is Player 1's turn to play");
    playerTwo.winner();
  });
});
