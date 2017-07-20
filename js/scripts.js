//Back end
  var allNumbers = []
  var text = "";
//Front End
$(function()  {
  $("#ping-pong").submit(function(event)  {
    var userInput= parseInt($("#ping").val());

    for (; userInput > 0; userInput -= 1)  {
      console.log(userInput);
      // userInput = allNumbers
       $("#result").append(userInput);
       if (userInput % 15) {
         $("#result").append("pingpong");
       }
       else if (userInput % 3) {
         $("#result").append("ping");
       }
       else if (userInput % 5) {
         $("#result").append("pong");
       };

       };
       event.preventDefault();

  });
});
