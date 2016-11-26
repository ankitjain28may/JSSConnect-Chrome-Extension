// content.js
$(document).ready(function(){
        $(".notices").append($("<div class='col-sm-12'></div>").append($("<img class='preloader' src='connect.gif'>")));
    $.get("http://210.212.85.155/", function(data, status){
        if(status == "success") {
            $(".notices img").remove();
            var content = $("li.modal-index", data);
            $.each(content, function( index, value ) {
                var col = $("<div></div>").addClass("col-sm-12");
               var notice = $("div.col", value).html();
               var t = $("<p></p>").text(notice);
               col.append(t);
               $(".notices").append(col);
            });
            var col = $("<div class='text-center' ></div>").addClass("col-sm-12");
            var link = $("<a href='http://210.212.85.155/' class='link' target='_blank'></a>").text("Read more Notices");
            col.append(link);
            $(".notices").append(col);
        }
    });
});