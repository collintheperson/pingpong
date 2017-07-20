//Back end
  var allNumbers = []
  var text = "";




//Front End
$(function()  {
  $("#ping-pong").submit(function(event)  {
    var userInput= parseInt($("#ping").val());
    alert(userInput)

    for (; userInput > 0; userInput -= 1)  {
      alert(userInput);
      text += "The number is " + userInput + "<br>";};
    }

      //   userInput -= 1
      //   console.log(allNumbers);
      //   console.log(userInput)
      //   console.log(i);
      //   alert (i)
      //
      //
      // };
    //
    //   } break = 0
      // text += i + "<br>";
    // };

      // if ( userInput % 3 ) {
      //
      // }
    event.preventDefault();
  });
});
