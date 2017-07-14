


$(document).ready(function()  {
  $("#ping-pong").submit(function(event)  {
      alert("test1");
      for( var index= 0; index <= 10 ; index += 1)  {
        alert("hi")
      }
      //   alert("hi")
      // }

      event.preventDefault()

  });
});
