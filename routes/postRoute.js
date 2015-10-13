exports.post = function ( req, res ) {
  var controller = require( "../helpers/fetchApi" ),
    api = "http://localhost:8080/api/posts/?slug=" + req.url.slice( 1 ),
    template = '../views/templates/page.tag'

  controller.apiCall( controller.sendRiot, api, res, template )

};

exports.posts = function ( req, res ) {
  var controller = require( "../helpers/fetchApi" ),
    api = "http://localhost:8080/api/posts/?slug=" + req.url.slice( 1 ),
    template = '../views/templates/posts.tag'

  controller.apiCall( res, api, template, controller.sendRiot )

};