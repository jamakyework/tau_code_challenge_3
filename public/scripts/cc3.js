console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  //start addJokeButton on click
  $( '#addJokeButton' ).on( 'click', function(){
    console.log( 'addJokeButton on click');
  }); // end addJokeButton on click

  // postData function
  var postData = function(){
    console.log( 'in postData' );
    // assemble object to send
    var newJoke = [
      {
        whoseJoke: $("#whoseJokeIn").val(),
        jokeQuestion: $("#questionIn").val(),
        punchLine: $("#punchlineIn").val()
      }];
   // end object to send

    $.ajax({
      type: 'POST',
      url: '/sendJoke',
      data: newJoke,
      success: function( response ){
        console.log( 'back from post call:', response );
      // displayOnDom(response);
      },
      error: function(){
        console.log( 'error with ajax call...');
      }
    });
  }; // end postData function







}); // end doc ready
