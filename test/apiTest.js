var should = require('chai').should()
  , request = require("superagent")
  , post_id = "none"
describe('test suite for posts api', function() {
  before(function(done) {
    var server = require('../app')
    done();
  });
  describe('create a post', function() {
    it('should create a post and return status 201, result.body should be an object', function(done) {
      var posts = "http://localhost:8080/api/posts"
      request
        .post(posts)
        .send({
          name: 'Minnie'
          , species: 'bitch'
        })
        .end(function(err, result) {
          post_id = result.body._id;
          result.body.should.be.an("object")
          result.status.should.equal(201)
          console.log("created post with id " + result.body._id)
          done();
        });
    });
    describe('update a post', function() {
      it('change minnie to perl', function(done) {
        var post = "http://localhost:8080/api/posts?_id=" + post_id
        done();
      });
    });
    describe('get a post', function() {
      it('should get the post  we just created', function(done) {
        var post = "http://localhost:8080/api/posts?_id=" + post_id
        request
          .get(post)
          .end(function(err, result) {
            result.body.should.be.an("array")
            result.status.should.equal(200)
            result.body[0].name.should.equal("Minnie")
            console.log("got post with _id " + result.body[0]._id)
            done();
          });
      });
    });
  });
});