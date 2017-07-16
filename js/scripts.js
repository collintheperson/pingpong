
$(function()  {
  $("#ping-pong").submit(function(event)  {

    var text = "";
    var userInput= parseInt($("#ping").val());
    alert(userInput)
    for (var i= 0; userInput > i; i -= 1 ) {
      if ( userInput > i)   {

      } break = 0
      text += i + "<br>";
      alert (userInput)
    }

      // if ( userInput % 3 ) {
      //
      // }
    event.preventDefault();
  });
});
