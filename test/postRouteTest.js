'use strict';

var should = require( 'chai' )
  .should(), //actually call the function
  request = require( "superagent" ),
  fetch = require( "../helpers/fetchApi.js" ),
  post_id = "none"

describe( 'test routes', function () {

  before( function ( done ) {
    var server = require( '../app' )

    done();

  } );

  describe( 'get a post', function ( done ) {

    it( ' should get a http://localhost:8080/post/Minnie  and return 200', function ( done ) {

      var post = "http://localhost:8080/post/Minnie "

      request
        .get( post )
        .end( function ( err, result ) {

          result.status.should.equal( 200 )

          done();

        } );

    } );

  } );

  describe( 'count posts', function ( done ) {

    it( ' should return a callback with   number more than -1', function ( done ) {

      var api = "http://localhost:8080/api/posts/?slug=Minnie";

      fetch.howManySlugs( api, function ( err, result ) {

        console.log( result )
        done();

      } )

    } );

  } );
} );