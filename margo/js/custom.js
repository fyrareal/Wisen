$(document).ready(function(){
    $(".no1").hover(function(){
        $(".sbmptn").show();
        $(".un").hide();
        $(".materi").hide();
        
    });
    $(".no2").hover(function(){
        $(".sbmptn").hide();
        $(".un").show();
        $(".materi").hide();
    });
    $(".no3").hover(function(){
        $(".sbmptn").hide();
        $(".un").hide();
        $(".materi").show();
    });
});