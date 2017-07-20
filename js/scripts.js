//Back end
  // var allNumbers = []
  // var text = "";

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
console.log('pongBalls');
var returnedArray = pingPong(12);
console.log(returnedArray);

//FRONT END 
for(var paddeles = 0; paddeles<returnedArray.length; paddeles +=1) {
  $('#thelistitem').append(returnedArray[paddeles]);
}
//what do i want to do with i? make it equal to userInput.
  // if (i % 15 === 0) {
  //   $(allNumbers).push("pingpong");
  // }
  // else if (i % 5 === 0) {
  //   $(allNumbers).push("pong");
  // }
  // else if (i % 3 === 0) {
  // $(allNumbers).push("ping");
  // }
// }
  //  else if ((userInput % 15 === 0) || (userInput % 5 === 0) || (userInput % 3 === 0)) {
//Front End
// $(function()  {
//   $("#ping-pong").submit(function(event)  {
//       // console.log(allNumbers);
//       var userInput= parseInt($("#ping").val());
//       text.push(userInput);
//       console.log(text)
//       //how do i make this go through the for loop. I'm getting the userInput into a value.
//         $("#result").append(allNumbers);
//        event.preventDefault();
// pingpong(userInput)
//   });
// });
