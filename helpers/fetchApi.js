module.exports = function fetchApi( req, res, api, template ) {
  var riot = require( 'riot' ),
    request = require( 'superagent' ),
    async = require( 'async' ),
    postView = require( template ),
    Entities = require( 'html-entities' )
    .XmlEntities,
    entities = new Entities()

  var apiCall = function ( req, res, api, callback ) {
    request.get( api )
      .end( function ( err, result ) {
        if ( result && typeof result.body[ 0 ] !== 'undefined' && result.body[ 0 ] !== null ) {
          sendRiotTemplate( postView, result.body[ 0 ], res )
        } else {

          res.status( 404 ) // HTTP status 404: NotFound
          .send( '404 Page Not found' );
        }

      } );
  };

  var sendRiotTemplate = function ( postView, result, res ) {
    var html = riot.render( postView, {
      posts: result
    } );
    html = entities.decode( html )
    res.send( "<!doctype html>" + html );

  };

  apiCall( req, res, api, sendRiotTemplate );

};