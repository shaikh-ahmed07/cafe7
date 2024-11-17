$(".btn").click(function(){
    event.preventDefault();
    var currentopacity = $(this).css("opacity")
    if(currentopacity==1){
        $(this).animate({opacity:0.5},500);
    } else{
        $(this).animate({opacity:1},500);
    }
})
