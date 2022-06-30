$("#menu").click(function(){
    $(this).toggleClass("active");
    $("#menuContent").toggleClass("active");
});
$(".main-nav a").click(function(){
    $("#menu, #menuContent").removeClass("active");
})
AOS.init();
var rellax = new Rellax('.rellax');
$(".step-gear").click(function(){
    $(this).toggleClass("active")
})