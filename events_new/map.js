var e = .7;
var g = -1;
var u = 10;
var t;
var freq = 50;

function resetParams() {
    e = .7;
    g = -1;
    u = 10;
}

function bounce(y, ty) {
    var stop = false;
    u += g;
    ty -= u;
    $("#map_blob").css("top", ty +"px");
    if (ty >= y) {
        u = -1 * e * u;
        if (Math.abs(u) < .2)
            stop = true;
    }

    if (!stop) t =setTimeout(function() {
        bounce(y, ty);  
    }, freq);
}

function mapify(backg, locn, dirn) {

    if (!dirn) {
        $("#map-container, #map-container_overlay, #map_blob").css("left", "600px");
    } else {
        $("#map-container, #map-container_overlay, #map_blob").css("left", "-45px");
    }

    document.getElementById('map').style.backgroundImage = "url(" +backg +")";
    $("#map-container, #map-container_overlay").fadeIn();
    $("#map-container").css("background-size", "100% 100%");

    setTimeout(function() {
        var position = "center center";
        var left = parseInt($("#map_blob").css("left"));
        var top = 120;

        if (locn == "oat") {
            position = '-180px -67px';
            left += 327;
            top += 105;
        } else if (locn == "sportscomplex") {
            position = '-130px -47px';
            top += 69;
            left += 207;
        } else if (locn == "brambedkar") {
            position = '-152px -86px';
            top += 133;
            left += 285;
        } else if (locn == "admin") {
            position = '-141px -65px';
            top += 115;
            left += 245;
        }

        $("#map-container").css("background-size", "150% 150%");
        $("#map-container").css("background-position", position);

        setTimeout(function() {
            $("#map_blob").show();
            $("#map_blob").css("width", "60px").css("height", "60px");
            $("#map_blob").css("top", top +"px").css("left", left +"px");

            resetParams();
            bounce(top, top);
        }, 1000);
        
    }, 100);
}

function demapify() {
    $("#map-container, #map-container_overlay").hide();
    $("#map-container").css("background-size", "100% 100%");
    $("#map-container").css("background-position", "0px 0px");
    $("#map_blob").hide();
    $("#map_blob").css("width", "0xp").css("height", "0px");

    clearTimeout(t);
}


$(document).ready(function() {
    var _HIDDEN_SCROLLTOP = 0;

    $(".more").on('click', function() {
        $(this).prev('.see-more').click();
    });

    $('.see-more').click(function(){
        _HIDDEN_SCROLLTOP = $(document).scrollTop();
        $("#big-container").clearQueue();

        document.getElementById('wrapper').style.opacity = '0';

        var $this = $(this);
        setTimeout(function() {
            $('#wrapper').css("z-index", "-100");
        }, 500);

        setTimeout(function() {
            mapify($this.attr('event-banner'), $this.attr('event-location'), posn % 2);
        }, 500);

        var posn = parseInt($(this).attr("data-locn")) - 1;

        if(posn % 2 == 0) {
            $("#big-container").css("left", "85px");
        } else {   
            $("#big-container").css("left", "700px"); 
        }

        $("#big-container").css("display", "block");  
        $("#big-container").css("top", "85px").css("opacity", "1");

        $('.desc').html($(this).attr('event-details'));
        $('.co').html($(this).attr('ename'));
        $('.date').html($(this).attr('date'));
        $('#inrImg').attr("src", $(this).attr('event-banner'));
    });

    var _TRANSITION_TIME = 500;
    $('#bc').click(function() {
        $("#big-container").css("top", "-900px").css("opacity", "0");;

        setTimeout(function() {
            if($('#big-container').hasClass('expandLeft')) {
                $("#big-container").removeClass('expandLeft');
            } else {
                $("#big-container").removeClass('expandRight'); 
            }

            $(".co").empty();
            $(".date").empty();
            $(".desc").empty();

        }, _TRANSITION_TIME);

        // $("#wrapper").show();
        $('#wrapper').css("z-index", "0");
        document.getElementById('wrapper').style.opacity = '1';
        
        // zoomout();
        demapify();
        $('html,body').animate({
            scrollTop: _HIDDEN_SCROLLTOP},
            _TRANSITION_TIME);

    });

    $('.header').slideDown(500);
});
