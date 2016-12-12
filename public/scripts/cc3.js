console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  //start addJokeButton on click
  $( '#addJokeButton' ).on( 'click', function(){
    console.log( 'addJokeButton on click');
    postData();
    // getData();
  }); // end addJokeButton on click

  // start postData
  var postData = function(){
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
        console.log( 'back from post call:', response );
      // displayOnDom(response);
      },
      error: function(){
        console.log( 'error with ajax call...');
      }
    });
  }; // end postData

//   // start getJoke
//   var getJoke = function(){
//     console.log( 'in getJoke' );
//     $.ajax({
//       type: 'GET',
//       url: '/getJoke',
//       success: function( response ){
//         console.log( 'back from get call:', response);
// // need object from server side
//     },
//       error: function(){
//         console.log( 'error with ajax call...');
//       }
//     });
//   }; // end getJoke



}); // end doc ready
