// server.js
var feathers = require( 'feathers' ),
  bodyParser = require( 'body-parser' ),
  nedbService = require( 'feathers-nedb' );
var router = feathers.Router();

// Create a feathers instance.
var app = feathers()
  // Setup the public folder.
  .use( feathers.static( __dirname + '/public' ) )
  // Enable Socket.io
  .configure( feathers.socketio() )
  // Enable REST services
  .configure( feathers.rest() )
  // Turn on JSON parser for REST services
  .use( bodyParser.json() )
  // Turn on URL-encoded parser for REST services
  .use( bodyParser.urlencoded( {
    extended: true
  } ) )

// Connect to the db, create and register a Feathers service.

app.use( feathers.static( 'views/public' ) );

app.use( 'api/posts', new nedbService( 'posts' ) );
app.use( 'api/tags', new nedbService( 'tags' ) );
app.use( 'api/users', new nedbService( 'users' ) );

router.use( '/post/', require( './routes/publicRoutes' )
  .post );
router.use( '/posts/', require( './routes/publicRoutes' )
  .posts );
router.use( '/admin/newpost', require( './routes/adminRoutes' )
  .newpost );

app.use( '/', router );

// Start the server.
var port = 8080;
app.listen( port, function () {
  console.log( 'KissCMS listening on port ' + port );
} );

module.exports = app;