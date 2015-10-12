exports.post = function ( req, res ) {
  var controller = require( "../helpers/fetchApi" ),
    api = "http://localhost:8080/api/posts/?name=" + req.url.slice( 1 ),
    template = '../views/templates/page.tag'

  controller.apiCall( req, res, api, template, controller.sendRiot )

};