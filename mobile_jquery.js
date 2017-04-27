$(document).ready(function(){
  var z = 1;

  $(".footer").on({
    tap: function() {
      var target = $(this).data("target");
      $(".footer").css("text-decoration", "none");
      $(this).css("text-decoration", "underline");
      $(".landingPage, .profilePage, .groupPage, #names, .mapsSlide").css("display", "none");
      $("#locations, #" + target).css("display", "block");
      $("input").attr("placeholder", " ");
    }
  });

  $(".floor").on({
    tap: function() {
      var target = $(this).data("target");
      $("." + target).toggle();
    }
  })

  $(".room").on({
    tap: function() {
      var src = this.id;
      $("#mapsSlide").attr("src", "website_fonts_img/maps/" + src + ".png");
      $(".mapsSlide, #locations").toggle();
    }
  })

//  $("input").keydown(function(e) {
//    if(e.which == 13 ){
//      var text = $(this).val();
//      text = text.toLowerCase();
//      $(".twoD, .threeD, .fourD, .xD").css("display", "none");
//      $("p[data-target*="+text+"]").css("display", "block");
//      console.log(text);
//    }
//  })
//  .keyup();
  
  
  $(".fourD, .threeD, .twoD, .xD").on({ 
    tap: function() {
      var target = $(this).data("target");
      var name = $(this).text();
      //console.log(target);
      $(".landingPage, .profilePage, .groupPage, #names, .mapsSlide").css("display", "none");
      $("#" + target).css("display", "block");
      $("img." + target).lazyload({event: "load"});
      $("img." + target).trigger("load");
      $("input").attr("placeholder", name);
    }
  });
  
//  $(".back").on({
//    tap: function() {
//      var target = $(this).data("target");
//      $("#" + target).css("z-index", z-1);
//      $("#" + target).addClass("slideOut");
//      $(".mapsSlide").addClass("slideOutMaps");
//    }
//  });
//
//  $(".floor").on({
//    tap: function() {
//      var src = this.id;
//      $("#imgMaps").attr("src", "website_fonts_img/maps/" + src + ".png");
//    }
//  })
//
//  $("span.room").on({
//    tap: function() {
//      var src = $(this).data("target");
//      if($(".mapsSlide").css("z-index") < z){
//        z++;
//        $(".mapsSlide").removeClass("slideOutMaps slideInMaps");
//        $(".mapsSlide").css("z-index", z);
//        $("#mapsSlide").attr("src", "website_fonts_img/maps/" + src + ".png");
//        setTimeout(function() {
//          $(".mapsSlide").addClass("slideInMaps");
//        }, 2);
//      }
//    }
//  });
//  
//  $(".footerLeft").on({
//    tap: function() {
//      $(".slideIn, .slideInMaps").filter(function() {
//        return $(this).css("z-index") == z;
//      }).css("z-index", z-1);
//      $(".twoD, .threeD, .fourD, .xD").css("color", "black");
//      $(".slideIn").addClass("slideOut");
//      $(".slideInMaps").addClass("slideOutMaps");
//    }
//  });
//  
//  $(document).keydown(function(e) {
//    console.log(e.which);
//    if (e.which == 27 || e.which == 8) {
//      $(".slideIn, .slideInMaps").filter(function() {
//        return $(this).css("z-index") == z;
//      }).css("z-index", z-1);
//      $(".twoD, .threeD, .fourD, .xD").css("color", "black");
//      $(".slideIn").addClass("slideOut");
//      $(".slideInMaps").addClass("slideOutMaps");
//    }
//  });
//
});