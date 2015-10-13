var exports = module.exports = {};

exports.apiCall = function ( callback, api, res, template ) {
  request = require( 'superagent' ),
  request.get( api )
    .end( function ( err, result ) {
      if ( result && typeof result.body[ 0 ] !== 'undefined' && result.body[ 0 ] !== null ) {
        callback( template, result.body, res, 201 )
      } else {

        callback( template, undefined, res, 404 )

      }

    } );
};

exports.sendRiot = function ( template, result, res, status ) {
  if ( status === 404 ) {
    res.status( 404 )
      .send( "Page not found" )

  } else {
    var riot = require( 'riot' ), // riot has to be called before postview
      postView = require( template ),
      Entities = require( 'html-entities' )
      .XmlEntities,
      entities = new Entities(),

      html = riot.render( postView, {
        posts: result[ 0 ]
      } );
    html = entities.decode( html )
    res.send( "<!doctype html>" + html );

  }

};