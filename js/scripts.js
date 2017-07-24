//Back end
function pingPong(balls) {
  var pongBalls = [];
    for (var i = 1; i <= balls; i++) {
      if (i % 15 === 0){
        pongBalls.push("pingpong");
      } else if (i % 3 === 0) {
        pongBalls.push("ping")
      } else if (i % 5 === 0) {
        pongBalls.push('pong');
      } else {
        pongBalls.push(i);
      };

    };
  return pongBalls;
};
//FRONT END

$(function()  {
  $("#ping-pong").submit(function(event) {
    event.preventDefault();
      var userInput = parseInt($("#ping").val());
      var outPut = pingPong(userInput);
      for(var paddles = 0; paddles<outPut.length; paddles += 1) {
      $('#result').prepend("<li>" + outPut[paddles]);
    };
    return outPut;



  });
  $("#reseting").click(function(event){
    $("#result").empty();
  })
});
