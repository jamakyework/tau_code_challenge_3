var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
// create 'urlEncodedParser' in case we want to inject it for post calls:
var urlEncodedParser = bodyParser.urlencoded( { extended: true } );
// use bodyParser.urlencoded throughout the app with this:
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( express.static( 'public' ) );

// initial jokes provided by the client
jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Twofish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs"
  }
];

// spin up server
app.listen( 3333, function(){
  console.log( 'server up on 3333' );
}); // end spin up server

app.get( '/', function( req, res ){
  // base url
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url

// testPost
app.post( '/postJoke', urlEncodedParser, function( req, res ){
  console.log( 'postJoke url hit req.body:', req.body );
jokes.push(req.body);
console.log("This is in jokes:", jokes);
  // do work here
  // assemble object to return
  var objectToReturn =
  {
    field0: 'I came from postJoke on server'
  }; // end object to return
  // return objectToReturn
  res.send( objectToReturn );
}); // end testPost


// testGet
app.get( '/getJoke', function( req, res ){
  console.log( 'getJoke url hit' );
  // do work here
  // assemble object to return
  var objectToReturn =
  {
    field0: 'I came from getJoke on server'
  }; // end object to return
  // return objectToReturn
  res.send( jokes );
}); // end testGet
