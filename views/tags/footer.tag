<footer>


    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="http://rawgit.com/feathersjs/feathers-client/release/dist/feathers.js"></script>
    <script src="/socket.io/socket.io.js"></script>

    <!-- include riot.js  -->
    <script src="//cdn.jsdelivr.net/riot/2.2/riot.min.js"></script>
    <script src="/js/riotscripts.js"> </script>
    <script src="/js/scripts.js"> </script>
   <sidebar class="js-sidebar-right fixed front width-250 trans-medium trans-right  gray-light box-mini " style="top:36px">
   </sidebar>

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

</footer>

