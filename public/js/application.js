$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});

// sample ajax

  // $(".post-container").on('submit', '.vote', function(event){
  //    event.preventDefault();
  //    var artId = $(this).parent().attr('id')
  //    var postId = $(this).attr('action')
  //    $.ajax({
  //      method: "POST",
  //      url: postId,
  //    })
  //    .done(function(msg){
  //      $("#" + artId + " p .points").text(msg)
  //      $("#" + artId + " form button").css("color", "red")
  //    })
  //  })
  //  $('.post-container').on('click','.delete', function(event){
  //    event.preventDefault();
  //    var delId = $(this).attr('href')
  //    $.ajax({
  //      method: "DELETE",
  //      url: delId,
  //    })
  //    .done(function(index){
  //      $("article#"index).remove()
  //    })
  //  })
 
  //  $("body").on('submit', '#posts', function(event){
  //    event.preventDefault();
  //    var info = $("#posts input").serialize();
  //    $("#title-field").val("")
  //    $.ajax({
  //      method: "POST",
  //      url: "/posts",
  //      data: info
  //    })
  //    .done(function(add){
  //      $(".post-container").append(add);
 
  //    })
  //    .fail(function() {
  //      alert( "Title Required." );
  //    });
  //  })


//example for json parcing

	// 	  $(document).ready(function(){
 //   $("button").click(function(event){
 //     event.preventDefault();
 //   $.ajax({
 //     method: "get",
 //     url: "/colors/random",
 //     dataType: "json",
 //     contentType: "application/json" // not required but commonly added -Kelson
 //  	}).done(function(hash){
 //     console.log(hash)
 //     $("li").eq(hash.cell).css("background-color", hash.color);
 //   })
 //   })
 
 // });