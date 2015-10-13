var should = require( 'chai' )
  .should(),
  request = require( "superagent" ),
  helpers = require( "../helpers/helpers.js" )

describe( 'test suite for helpers', function ( done ) {
  before( function ( done ) {
    var server = require( '../app' )
    done();
  } );

  describe( 'makeSlug', function () {
    it( 'should turn a title into a slug with hyphens and lowercase', function ( done ) {
      var title = "Minnie is a super nice dog";
      var slug = helpers.makeSlug( title );
      slug.should.equal( "minnie-is-a-super-nice-dog" );

      done();
    } );
  } );

  describe( 'checkUniqueSlug is true', function () {
    it( 'should return true to show that slug  is unique and does not exist already', function ( done ) {
      var slug = "minnie-is-a-super-nice-cat";
      var unique = helpers.checkUniqueSlug( slug );
      unique.should.equal( true );

      done();
    } );
  } );

  describe( 'checkUniqueSlug is false', function () {
    it( 'should return false to show that slug is NOT unique and exists already', function ( done ) {
      var slug = "Minnie";
      var unique = helpers.checkUniqueSlug( slug );
      unique.should.equal( false );

      done();
    } );
  } );

} );