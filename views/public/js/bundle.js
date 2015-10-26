var request = require( 'superagent' );
var tags = require( './tags.js' );
var posts = 'http://localhost:8080/api/posts';

request.get( posts )
  .end( function ( err, result ) { // don't use res as already defined in exports

    if ( result.ok ) {
      var html = result.body;

      riot.mount( '*', {
        posts: html
      } )

    } else {
      console.log( "not ok " + err )
    }
  } );