// content.js
var flag = 0;
$(document).ready(function(){
    $(".notices").append($("<div class='col-sm-12 text-center'></div>").append($("<img class='preloader' src='assets/connect.gif'>")));
    var delay=1500; //1.5 second
    setTimeout(function() {
        $.get("http://210.212.85.155/", function(data, status){
            if(status == "success") {
                $(".notices img").remove();
                var content = $("li.modal-index", data);
                $.each(content, function( index, value ) {
                    if(index%2==0)
                        var col = $("<div></div>").addClass("col-sm-12 odd notice-data");
                    else
                        var col = $("<div></div>").addClass("col-sm-12 notice-data");
                   var notice = $("div.col", value).html();
                   var t = $("<p></p>").text(notice);
                   col.append(t);
                   $(".notices").append(col);
                });
                var col = $("<div class='text-center' ></div>").addClass("col-sm-12 link-col");
                var link = $("<a href='http://210.212.85.155/' class='link' target='_blank'></a>").text("Read more Notices");
                col.append(link);
                $(".notices").append(col);
            }
        });
    }, delay);

    $(".button").click(function() {
        // $(".sidebar").toggle();
        $(".sidebar").css({"width":"180px"});
        if($(".sidebar-layer").hasClass("show"))
        {
            $(".sidebar-layer").hide();
            $(".sidebar-icon img").hide();
            $(".sidebar-name p").hide();
            $(".sidebar-layer").removeClass("show");
            $(".sidebar").css({"width": 0});
        }
        else
        {
            $(".sidebar-layer").show();
            $(".sidebar-icon img").show();
            $(".sidebar-name p").show();
            $(".sidebar-layer").addClass("show");
        }
    });

});