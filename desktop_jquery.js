$(document).ready(function(){
  var z = 1;
  var url = window.location.href;
  var pathname = window.location.pathname;

  // var windowH = $(window).height();
  // $("#names").height(windowH * 0.83);

  // var nameH = $("#names").height();
  // var lineH = nameH / 33;
  // $("#names").css("line-height", lineH + "px");

  // $( window ).resize(function() {
  //   var windowH = $(window).height();
  //   $("#names").css("height", windowH * 0.83 + "px");
  //   var nameH = $("#names").height();
  //   var lineH = nameH / 33;
  //   $("#names").css("line-height", lineH + "px");
  //   $("#value").text(nameH + "   -   " + lineH)
  // });


  $(".fourD, .threeD, .twoD, .xD").each(function(){
      target = $(this).data("target");
      $("#profiles").append("<div id='" + target + "' class='profilePage'></div>");
  });

  $("input").keyup(function() {
    var input = $(this).val().replace(/\s+/g, '');
    var inputLC = input.toLowerCase();
    if(!input){
      $(".columns span").css("display", "inline-block");
    } else {
      $(".columns span").css("display", "none");
      $("span[data-target*="+inputLC+"], span:contains("+input+")").css("display", "inline-block");
      $(".twoD, .threeD, .fourD, .xD").filter( function() {
        return $(this).html().toLowerCase().replace(/\s+/g, '').indexOf(inputLC) > -1;
      }).css("display", "inline-block");
    }
  });
  
  $("html").on({
    click: function() {
      $(".imgHover").hide();
      $(".columns span").css("color", "black");
      z++;
      $(".slideInMaps").addClass("slideOutMaps");
    }
  });
  
  $("p, h1").on({
    click: function(event) {
      event.stopPropagation()
    }
  });
  
  $(".footerRight:not(#info, #maps, #search)").on({ 
    mouseenter: function() {
      var target = $(this).data("hover");
      $(".columns span").css("color", "#D3D3D3");
      $("." + target).css("color", "black");
    }
  });
  
  $(".footerRight:not(#search), .fourD, .threeD, .twoD, .xD").on({ 
    click: function() {
      var target = $(this).data("target");
      console.log(target);
      window.history.pushState(null, null, "#page" + target);
      if($("#" + target).css("z-index") < z){
        z++;
        $("#" + target).css("z-index", z);
        $("#" + target).removeClass("slideOut");
        $("#" + target).removeClass("slideIn");
        setTimeout(function() {
          $("#" + target).addClass("slideIn");
        }, 2);
      };
    }
  });
  
  $(".fourD, .threeD, .twoD, .xD").one({
    click: function() {
      var target = $(this).data("target");
      $.get( "profile_pages/" + target + ".html", function( data ) {
        $("#" + target).html(data);
      });
    }
  });
  
  $(".fourD, .threeD, .twoD, .xD, .listGroup").on({
    mouseenter : function(){  
      $(this).css("text-decoration", "underline");
    },

    mousemove: function(e) {
      var target = $(this).data("target");
      var img = $("#hoverIMG" + target);

      if (img !== undefined){
        var imgH = img.get(0).clientHeight;
        var imgW = img.get(0).clientWidth;
        var wH = $(window).height();
        var wW = $(window).width();

        if(e.pageY > imgH){
          img.css("bottom", (wH - e.pageY - 10) + "px")
          } else {
          img.css("bottom", "auto")
        }

        if(e.pageX + imgW > wW){
          img.css("left", (e.pageX - imgW - 10) + "px")
        } else {
          img.css("left", (e.pageX + 10) + "px")
        }
        setTimeout( function(){
          img.show();
        }, 1);
        img.fadeIn("fast");
        img.css("z-index", z)
        z++;
      }
    },

    mouseleave: function() {
      var target = $(this).data("target")
      $(this).css("text-decoration", "none");
      $(".imgHover").hide();
    }
  });

  $(".listGroup").on({
    click: function(){
      var target = $(this).data("target");
      $("#" + target)[0].click();
    }
  })

  $("h1.room, .floor").on({
    click: function() {
      var src = this.id;
      $("h1.room, .floor").css("color", "black");
      $(this).css("color", "blue")
      $("#imgMaps").attr("src", "website_fonts_img/maps/" + src + ".png");
    },
  })

  $(document).on("click", "span.room", function(){
      var src = $(this).data("target");
      if($(".mapsSlide").css("z-index") < z){
        z++;
        $(".mapsSlide").removeClass("slideOutMaps slideInMaps");
        $(".mapsSlide").css("z-index", z);
        $("#mapsSlide").attr("src", "website_fonts_img/maps/" + src + ".png");
        setTimeout(function() {
          $(".mapsSlide").addClass("slideInMaps");
        }, 2);
      }
    }
  );
  
  $(".footerLeft").on({
    click: function() {
      z++;
      var target = $(this).data("target");
      var pageName = url.split("html").pop();
      window.history.pushState(null, null, url.replace( pageName, ""));
      $(".columns span").css("color", "black");
      $(".slideIn").addClass("slideOut");
      $(".slideInMaps").addClass("slideOutMaps");
    }
  });
  
  $(document).on("click", ".back", function() {
      $(".footerLeft")[0].click();
    }
  );
  
  $(document).keydown(function(e) {
    if (e.which == 27 || e.which == 8) {
      $(".footerLeft")[0].click();
    }
  });
  
  var deg = 90;
  
  setTimeout(function(){
    $(".search").show();
  }, 1000);
  
  $("#search").on({
    click: function(){
      deg = deg + 90;
      $(".search").css("transform", "rotateY(" + deg + "deg)");
    }
  })

  if (url!=="http://localhost:8000" + pathname){
    var urlcut = url.replace("http://localhost:8000" + pathname + "#page", "")
    $(".footerRight, .twoD, .threeD, .fourD, .xD").filter( function() {
      return $(this).data("target") === urlcut;
    })[0].click();
  }

});