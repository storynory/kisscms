var exports = module.exports = {};

exports.apiCall = function ( callback, api, res, template ) {
  request = require( 'superagent' ),
  request.get( api )
    .end( function ( err, result ) {
      if ( result && typeof result.body[ 0 ] !== 'undefined' && result.body[ 0 ] !== null ) {
        return callback( template, result.body, res, 201 )
      } else {

        return callback( template, undefined, res, 404 )

      }

    } );
};

exports.sendRiot = function ( api, template, res ) {

  if ( api[ 0 ] === 'undefined' || api[ 0 ] == null ) {
    return res.status( 404 )
      .send( "not found" )
  } else {
    var riot = require( 'riot' ), // riot has to be called before postview
      postView = require( template ),
      Entities = require( 'html-entities' )
      .XmlEntities,
      entities = new Entities(),

      html = riot.render( postView, {
        posts: api[ 0 ]
      } );
    html = entities.decode( html )
    res.send( "<!doctype html>" + html );

  }

};

exports.howManySlugs = function ( api, callback ) {

  request = require( 'superagent' ),
  request.get( api )
    .end( function ( err, result ) {
      if ( err ) {
        return ( err.message )
      }

      if ( result && typeof result.body[ 0 ] !== 'undefined' && result.body[ 0 ] !== null ) {
        return callback( null, result.body[ 0 ] )

      }

    } );

};