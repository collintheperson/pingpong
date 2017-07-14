
$(function()  {
  $("#ping-pong").submit(function(event)  {

    var text = "";
    var userInput= parseInt($("#ping").val());
    alert(userInput)
    for (var i= 0; userInput > i; userInput -=1 ) {
      alert(i)
      text += i + "<br>";
      alert (userInput)
    }

      // if ( userInput % 3 ) {
      //
      // }
    event.preventDefault();
  });
});
