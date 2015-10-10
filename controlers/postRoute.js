exports.post = function ( req, res) {
  var fetchApi = require("../helpers/fetchApi")
  , api = "http://localhost:8080/api/posts/?name=" + req.url.slice(1)
  , template = '../views/templates/page.tag'

  fetchApi(req,res, api , template)

};