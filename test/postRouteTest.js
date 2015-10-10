'use strict';

var should = require('chai').should() //actually call the function
,request = require("superagent")
,post_id = "none"

describe('test routes', function() {


  before(function(done) {
    var server = require('../app')

    done();

  });





  describe('get a post', function() {

    it(' should get a http://localhost:8080/post/  and return 200', function (done) {


        var post = "http://localhost:8080/post/"

         request
        .get(post)
        .end(function(err, result){

        result.status.should.equal(200)



          done();

        });



      });

    });

  });

