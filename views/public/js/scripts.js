$( ".js-delete" )
  .click( function ( ev ) {
    var id = $( this )
      .attr( 'data-id' );
    posts.remove( id );
    ev.preventDefault();

  } );