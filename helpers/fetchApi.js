module.exports = function fetchApi( req, res, api, template ) {
  var riot = require('riot')
  , request = require('superagent')
  , postView = require(template)
  , Entities = require('html-entities').XmlEntities
  , entities = new Entities()


  request.get( api )
    .end(function(err, result){
      if  (result.ok && typeof result.body[0] !== 'undefined' && result.body[0] !== null ) {

    var html = riot.render( postView, { posts: result.body[0]  } );

    html = entities.decode(html)

    res.send("<!doctype html>" + html );

  }

  else {

    res.status(404)        // HTTP status 404: NotFound
   .send('404 Page Not found');


    }


  });
};





