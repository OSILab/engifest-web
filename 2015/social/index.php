<!DOCTYPE html>
<html lang="nl" xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://developers.facebook.com/schema/">


<head>
    <meta charset="utf-8">
    <!-- Page Info -->
    <title>Social-Wall</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta property="og:image" content=""/>
    <meta property="og:url" content=""/>
    <meta property="og:title" content=""/>
    <meta property="og:description" content=""/>
    <meta name="google-play-app" content="app-id=be.appstrakt.extremanl">
    <link rel="shortcut icon" href=""><!-- 32x32 px -->
    <link rel="stylesheet" href="./css/bootstrap.min2.css">
    <link rel="stylesheet" href="./js/social-feed/dcsns_light.css">

    <link rel="stylesheet" href="./css/XONL.css">
    <link rel="stylesheet" href="./css/prettyPhoto.css">
    <link rel="stylesheet" href="./js/social-feed/dcsns_wall.css">


    <script type="text/javascript" src="./js/jquery.js"></script>
    <script type="text/javascript" src="./js/social-feed/jquery.social.stream.wall.1.3.js"></script>
    <script type="text/javascript" src="./js/social-feed/jquery.social.stream.1.5.1.js"></script>
    <script type="text/javascript" src="./js/instafeed.min.js"></script>
    
</head>

<body style="background-color: black; ">

    <div id="fb-root"></div>

    <script>
      window.fbAsyncInit = function() {
        // init the FB JS SDK
        FB.init({
          appId      : '562452420439270',                        // App ID from the app dashboard
          channelUrl : '//www.xofestival.nl/channel.html', // Channel file for x-domain comms
          status     : true,                                 // Check Facebook Login status
          xfbml      : true                                  // Look for social plugins on the page
        });
    
        // Additional initialization code such as adding Event Listeners goes here
      };
    
      // Load the SDK asynchronously
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "http://connect.facebook.net/en_US/all.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    </script>

    
    <script>
    $(document).ready(function(){
    /* -------------------------- */
    /* 00 Instellingen variabelen */
    var color = "#afafaf";
    var color_border = "#afafaf";
    var color_border_banner = "#e40d62";


    /* ---------------------------- */
    /* 01 Menu Position & animation */
    $(".move_to_top").hide();
    var heightLogoBanner = $(".banner_container").height();
    var heightNav = $("header").height();
    var minHeight = (heightLogoBanner - heightNav);
    if($(window).width() > 767){
        $(window).scroll(function() {
            var positie_top = $(this).scrollTop();
            if(positie_top > (minHeight - 3)) {
              $(".move_to_top").fadeIn();
              $("header").css({ borderBottomColor: color_border_banner });
            }
            else {
              $(".move_to_top").fadeOut();
              $("header").css({ borderBottomColor: color_border });
            }
        });
    }
});
</script>

<div class="" style="width:1000px; margin-left:auto; margin-right:auto;">
    <section class="large_container">
        <div id="xolive">
        
        </div>  
    </section>
</div>


<div id="lightbox"></div>

        <script>
              
              function postToFeed(titel, content, img) {
              
                var obj = {
                  method: 'feed',
                  redirect_uri: 'http://xofestival.nl',
                  link: 'http://xofestival.nl/nl/home',
                  picture: img,
                  name: titel,
                  caption: '',
                  description: content
                };
        
                function callback(response) {
                    /* document.getElementById('msg').innerHTML = "Post ID: " + response['post_id']; */
                }
        
                FB.ui(obj, callback);
              }
              
        </script>

    
    <script type="text/javascript" src="./js/jquery.prettyPhoto.js"></script>
    <script type="text/javascript" src="./js/jquery-ui-1.10.0.custom.min.js"></script>

    <script type="text/javascript" src="./js/main.js"></script>
    
</body>
</html>