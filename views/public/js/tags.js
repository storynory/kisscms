riot.tag('adminpost', '<div class="box-tiny one-whole gray-light cf"><a href="/admin">←</a> <a href="#" class=" right cf txt-right box-tiny-left-right js-menu-right">Menu</a> </div> <div class="page white box cf"> <ul class="list-bare"> <li id="title" class="box-mini note one-whole space-top-half " contenteditable >New Post Title</li> <li id="Summeary" class="box-mini note one-whole space-top-half " contenteditable >Summary of Post</li> <li id="bodytext" class="box-mini note one-whole space-top-half textarea" contenteditable>The text of the post</li> </ul> <a href="#" class="js-create">Create</a> </div> <sidebar class="js-sidebar-right fixed front width-250 trans-medium trans-right gray-light box-mini " style="top:36px"> </sidebar> <footer></footer>', function(opts) {


});
riot.tag('footer', '<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> <script src="http://rawgit.com/feathersjs/feathers-client/release/dist/feathers.js"></script> <script src="/socket.io/socket.io.js"></script>  <script src="//cdn.jsdelivr.net/riot/2.2/riot.min.js"></script> <script src="/js/riotscripts.js"> </script> <script src="/js/scripts.js"> </script> <sidebar class="js-sidebar-right fixed front width-250 trans-medium trans-right gray-light box-mini " style="top:36px"> </sidebar>', function(opts) {

    if (typeof io != 'function'  | typeof $ != 'function' ) {
      console.log("Na Na Na NA!")
     return
    }

    else {
      console.log("Yeah for Jquery!!!")
    }
      var socket = io();
      var socket = io();
      var app = feathers()
      .configure( feathers.socketio( socket ) );
      var posts = app.service( 'api/posts' );

      posts.on( 'created', function ( post ) {
      alert( 'post created', post.text );
      } );



    this.on('mount', function(){

       $( ".js-menu-right" ).click( function ( ev ) {

          $( ".js-sidebar-right" )
          .toggleClass( "trans-0" )

          ev.preventDefault();
          });

     });


    var newpost = {}
    $(".js-create").on("click", function() {

    newpost.title = $("#title").html()
    newpost.text = $("#bodytext").html()
    posts.create(newpost)

    });


});


riot.tag('head', '<meta charset="utf-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <title>KissCMS</title> <link rel="stylesheet" href="/css/style.css"> <link href="http://fonts.googleapis.com/css?family=Merienda+One" rel="stylesheet" type="text/css"> <link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css"> <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> <meta name="HandheldFriendly" content="True"> <meta name="viewport" content="width=device-width, initial-scale=1.0">', function(opts) {

});
riot.tag('main', '<h1>Admin Posts</h1> <article id="posts" class="cf one-whole box-mini-bottom" each="{ post, i in opts.posts }" > <h2>{ post.title }</h2> <p>{ post.excerpt }</p> <a onclick="{ trash }" href="#" class="right js-delete box-mini" data-id="{post._id }">TRASH</a> </article>', function(opts) {
        this.trash = function(e) {
        console.log(e)
        alert(e)
        }.bind(this);


});
riot.tag('sidebar', '<ul class="list-bare"> <li class="box-tiny-top-bot"> <b>Status: </b> <select> <option>Draft</option> <option>Published</option> <option>Private</option> <option>Trash</option> </select> </li> <li class="box-tiny-top-bot"> <b>Published</b> <span contenteditable>Not Yet</span> </li> <li class="box-tiny-top-bot"> <b>Updated</b> <span>14 Feb</span> </li> <li class="box-tiny-top-bot"> <b>Slug</b> <span contenteditable> new-post-title</span> </li> <li class="box-tiny-top-bot"> <b>Author</b> <span > Bertie</span> </li> </ul>', function(opts) {
      if (typeof io != 'function'  | typeof $ != 'function' ) {
      console.log("Na Na Na NA!")
     return
    }
     this.on('mount', function(){
       console.log("io io io")
     });

});