 request = require( "superagent" )

 exports.makeSlug = function ( title ) {

   var slug = title.replace( /\s+/g, "-" )
     .toLowerCase();
   slug = encodeURI( slug );
   return slug;

 }

 exports.checkUniqueSlug = function ( slug ) {
   var request = require( "superagent" ),
     api = "http://localhost:8080/api/posts/?slug=" + slug;

 };