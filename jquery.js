


$(document).ready(function()
{
    $("#sample .sample1").mouseenter(function()
    {
        $("#sample .saimg1").css({"opacity":"0.2"});
    });
    $("#sample .sample1").mouseleave(function()
    {
        $("#sample .saimg1").css({"opacity":"0.9"});
    });
});
$(document).ready(function()
{
    $("#sample .sample2").mouseenter(function()
    {
        $("#sample .saimg2").css({"opacity":"0.2"})
    });
    $("#sample .sample2").mouseleave(function()
    {
        $("#sample .saimg2").css({"opacity":"0.9"})
    });
});
$(document).ready(function()
{
    $("#sample .sample3").mouseenter(function()
    {
        $("#sample .saimg3").css({"opacity":"0.2"})
    });
    $("#sample .sample3").mouseleave(function()
    {
        $("#sample .saimg3").css({"opacity":"0.9"})
    });
});


  
/*trending image hovering*/

    /*trending image hovering ended*/


 $(document).ready(function()
 {
    $(".blogbtn1 button").mouseenter(function()
     {
         $(".blogbtn1 button").css({"background":"red","border":"none","padding":"7px 20px"});
     });
     $(".blogbtn1 button").mouseleave(function()
     {
         $(".blogbtn1 button").css({"background":"whitesmoke","border":"1px solid black","padding":"5px 20px"});
     });
});

$(document).ready(function()
{
    $(".blogbtn1 button").mouseenter(function()
        {
            $(".blogbtn1 i").show().css({"color":"white"});
        });
        $(".blogbtn1 button").mouseleave(function()
        {
            $(".blogbtn1 i").hide();
        });
});
$(document).ready(function()
 {
    $(".blogbtn2 button").mouseenter(function()
     {
         $(".blogbtn2 button").css({"background":"red","border":"none","padding":"7px 20px"});
     });
     $(".blogbtn2 button").mouseleave(function()
     {
         $(".blogbtn2 button").css({"background":"whitesmoke","border":"1px solid black","padding":"5px 20px"});
     });
});
$(document).ready(function()
{
    $(".blogbtn2 button").mouseenter(function()
        {
            $(".blogbtn2 i").show().css({"color":"white"});
        });
        $(".blogbtn2 button").mouseleave(function()
        {
            $(".blogbtn2 i").hide();
        });
});
$(document).ready(function()
 {
    $(".blogbtn3 button").mouseenter(function()
     {
         $(".blogbtn3 button").css({"background":"red","border":"none","padding":"7px 20px"});
     });
     $(".blogbtn3 button").mouseleave(function()
     {
         $(".blogbtn3 button").css({"background":"whitesmoke","border":"1px solid black","padding":"5px 20px"});
     });
});
$(document).ready(function()
{
    $(".blogbtn3 button").mouseenter(function()
        {
            $(".blogbtn3 i").show().css({"color":"white"});
        });
        $(".blogbtn3 button").mouseleave(function()
        {
            $(".blogbtn3 i").hide();
        });
});




$(document).ready(function()
{
    $(".notibtn button").mouseenter(function()
    {
        $(".notibtn button").html("CLICK").css({"background":"red","color":"white"});
    });
    $(".notibtn button").mouseleave(function()
    {
        $(".notibtn button").html("SUBSCRIBE").css({"background":"none","color":"black"});
    });
});