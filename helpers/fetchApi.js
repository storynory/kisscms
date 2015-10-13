var exports = module.exports = {};

exports.apiCall = function ( req, res, api, template, callback ) {
  request = require( 'superagent' ),
  request.get( api )
    .end( function ( err, result ) {
      if ( result && typeof result.body[ 0 ] !== 'undefined' && result.body[ 0 ] !== null ) {
        callback( template, result.body[ 0 ], res, 201 )
      } else {

        callback( template, result.body[ 0 ], res, 404 )

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
        posts: result
      } );
    html = entities.decode( html )
    res.send( "<!doctype html>" + html );

  }

};