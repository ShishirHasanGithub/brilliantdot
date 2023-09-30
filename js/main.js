$(document).ready(function(){



  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.main-menu',
    meanScreenWidth: "991",
    meanMenuCloseSize: "16px",
    meanRevealPositionDistance: "",
    meanDisplay: "block"
  });
  // ------------------------elevate zoom

    // ---------------------- Magnific Popup
    $('.popup-img').magnificPopup({
      type: 'image'
      // other options
    });


  // ---------------------------



  // ---------------------------
  $('#shishir').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 250,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function() {
      //I get fired when the animation is starting
    },
    end: function() {
      //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
      //I get fired when you enter a section and I pass the list item of the section
    }
  });


  // -----------------

  $('.fact-counter').counterUp({
    delay: 10,
    time: 1000
});


  // --------------- slick slider
  $('.trusted-brand').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
    prevArrow: '<a class="icon-right" href="#"><i class="fas fa-arrow-right"></i></a>',
    nextArrow:'<a class="icon-left" href="#"><i class="fas fa-arrow-left"></i></a>',
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });


  // ----------------- slider end
  // --------------- slick slider 2
  $('.colsultency').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows:true,
    prevArrow: '<a class="icon-rightt" href="#"><i class="fas fa-arrow-right"></i></a>',
    nextArrow:'<a class="icon-leftt" href="#"><i class="fas fa-arrow-left"></i></a>',
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });


  // -----------------

  $(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
     $(".sticky").removeClass("scroll-header");
    }else{
     $(".sticky").addClass("scroll-header");
    }
   });
  //  ------------------



  $('#bar1').barfiller({ barColor: 'linear-gradient(to left, #F62E6C , #863456)'});

  $('#bar2').barfiller({ barColor: 'linear-gradient(to left, #F62E6C , #863456)'});

  $('#bar3').barfiller({ barColor: 'linear-gradient(to left, #F62E6C , #863456)'});



  $('#bar4').barfiller({ barColor: 'linear-gradient(to left, #F62E6C , #863456)'});
  $('#bar5').barfiller({ barColor: 'linear-gradient(to left, #F62E6C , #863456)'});
  $('#bar6').barfiller({ barColor: 'linear-gradient(to left, #F62E6C , #863456)'});


  // -------------- Map start

function basicmap() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 11,
      scrollwheel: false,
      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(40.6700, -73.9400), // New York
      // This is where you would paste any style found on Snazzy Maps.
      styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": .2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
  };
  // Get the HTML DOM element that will contain your map 
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('contact-map');

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.6700, -73.9400),
      map: map,
      title: 'Cryptox'
  });
}
if ($('#contact-map').length != 0) {
  google.maps.event.addDomListener(window, 'load', basicmap);
}
  // --------------- Map end
});



new WOW().init();