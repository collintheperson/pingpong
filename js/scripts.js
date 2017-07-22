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
      }

    }
    return pongBalls;
}
var returnedArray = pingPong("");

//FRONT END

$(function()  {
  $("#ping-pong").submit(function(event) {
    event.preventDefault();
    console.log(returnedArray);
      // $("#result").text(returnedArray);
      var userInput = parseInt($("#ping-pong").val());
      console.log(userInput);
      for(var paddeles = 0; paddeles<returnedArray.length; paddeles +=1) {
        $('#thelistitem').append(returnedArray[paddeles]);
}
  });
  // ("#ping-pong").reset();
});
