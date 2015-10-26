exports.post = function ( req, res ) {
  var send = require( "../helpers/fetchApi" ),
    api = "http://localhost:8080/api/posts/?slug=" + req.url.slice( 1 ),
    template = '../views/templates/page.tag',
    request = require( "superagent" );

  request.get( api )
    .end( function ( err, result ) {
      if ( err ) {
        return ( err.message )
      } else {
        send.sendRiot( result.body, template, res );
      }
    } );
};

exports.posts = function ( req, res ) {

};