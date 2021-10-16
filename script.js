$(".mole1").click(function(){
    $(".mole1").hide();
    $(".third-mole").show();
});
    
$(".mole-two").click(function(){
    $(".mole-two").hide();
});
    
$(".third-mole").click(function(){
    $(".third-mole").hide();
    $(".mole-two").show();
});

$(".square").click(function(){
    $(".game").hide();
});
    
$(".reset").click(function(){
    $(".game").show();
    $(".mole1").show();
    $(".mole-two").show();
    $(".third-mole").show();
});