console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  //start addJokeButton on click
  $( '#addJokeButton' ).on( 'click', function(){
    console.log( 'addJokeButton on click');
    postJoke();
    // getJoke();
  }); // end addJokeButton on click

  // start postData
  var postJoke = function(){
    console.log( 'in postData?' );

    // assemble object to send
    var newJoke =
      {
        whoseJoke: $("#whoseJokeIn").val(),
        jokeQuestion: $("#questionIn").val(),
        punchLine: $("#punchlineIn").val()
      };
   // end object to send

   console.log("in newJoke:", newJoke);

    $.ajax({
      type: 'POST',
      url: '/postJoke',
      data: newJoke,
      success: function( response ){
        console.log( 'back from post call1:', response );
        console.log( 'back from post call2:', response[0]);
        console.log( 'back from post call3:', response[0].whoseJoke, response[0].jokeQuestion, response[0].punchLine);
        for( var i = 0 ; i < response.length; i++ ){
          $("#outputDiv").empty();
          $("#outputDiv").html(response[i].whoseJoke + " " + response[i].jokeQuestion + " "+ response[i].punchLine );
      }
      },// end success
      error: function(){
        console.log( 'error with ajax call...');
      }//end error
    });
  }; // end postData

  // start getJoke
  var getJoke = function(){
    console.log( 'in getJoke' );
    $.ajax({
      type: 'GET',
      url: '/getJoke',
      success: function( response ){
        console.log( 'back from get call:', response);
// need object from server side
    },
      error: function(){
        console.log( 'error with ajax call...');
      }
    });
  }; // end getJoke

}); // end doc ready



// //start display
// var displayOnDOM = function(response){
//   $("#outputDiv").empty();
//   for( var i = 0 ; i < response.length; i++ ){
//     $( "#outputDiv").html( "<p><b>" + response[ i ].whoseJoke + "</b> (" + response[ i ].jokeQuestion + ") </b> (" + response[ i ].jokeQuestion + ")</p>");
// }
// };
// //end display

// var displayOnDom = function(potato){
//   $("#outputDiv").empty();
//     console.log("In displayOnDom:", potato);
//     $( "#outputDiv").html("<p>" + potato + "</p>");
// };
