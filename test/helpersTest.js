var should = require( 'chai' )
  .should(),
  request = require( "superagent" ),
  helpers = require( "../helpers/helpers.js" ),
  fetch = require( "../helpers/fetchApi.js" )

describe( 'test suite for helpers', function ( done ) {
  before( function ( done ) {
    var server = require( '../app' )
    done();
  } );

  describe( 'makeSlug', function () {
    it( 'should turn a title into a slug with hyphens and lowercase', function ( done ) {
      var title = "Minnie   is a super nice dog";
      var slug = helpers.makeSlug( title );
      slug.should.equal( "minnie-is-a-super-nice-dog" );

      done();
    } );
  } );

  describe( 'Post Exists', function () {
    it( 'should return 201 to show post already exists in api', function ( done ) {
      var api = "http://localhost:8080/api/posts/?slug=Minnie",
        callback = function ( template, result, res, status ) {
          status.should.equal( 201 );
          done();

        }
      fetch.apiCall( callback, api )

    } );
  } );

  describe( 'Post does not Exist', function () {
    it( 'should return 404 to show post does NOT exist in api', function ( done ) {
      var api = "http://localhost:8080/api/posts/?slug=Minn",
        callback = function ( template, result, res, status ) {
          status.should.equal( 404 );
          done();

        }
      fetch.apiCall( callback, api )

    } );
  } );

  describe( 'Get the number of existing posts', function () {
    it( 'should show that there are more than 0 posts in api', function ( done ) {
      var api = "http://localhost:8080/api/posts/?slug=Minnie",
        callback = function ( template, result, res, status ) {
          result.should.have.length.above( 0 );
          done();

        }
      fetch.apiCall( callback, api )

    } );
  } );

  describe( 'Make Unique Slug', function () {
    it( 'should get the number of posts with same slug and append to this one.', function ( done ) {
      var api = "http://localhost:8080/api/posts/?slug=Minni",
        callback = function ( template, result, res, status ) {
          status.should.equal( 404 );
          done();

        }
      fetch.apiCall( callback, api )

    } );
  } );

} );