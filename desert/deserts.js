$(".btn").click(function(){
    event.preventDefault();
    var currentOpacity = $(this).css("opacity");
    if(currentOpacity==1){
        $(this).animate({opacity:0.3},500);
    }else{
        $(this).animate({opacity:1},500);
    }

})