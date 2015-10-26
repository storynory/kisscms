  var request = require( "superagent" ),
    send = require( "../helpers/fetchApi" ),
    riot = require( 'riot' ) // riot has to be called before postview

  exports.post = function ( req, res ) {
    var slug = req.url.slice( 1 ),
      api = "http://localhost:8080/api/posts/?slug=" + slug
    template = '../views/templates/admin/editpost.tag'

    request.get( api )
      .end( function ( err, result ) {
        if ( err ) {
          return ( err.message )
        } else {

          send.sendRiot( result.body, template, res );
        }
      } );
  };

  exports.newpost = function ( req, res ) {

    template = require( '../views/templates/admin/editpost.tag' )
    html = riot.render( template );
    res.send( "<!doctype html>" + html );

  };