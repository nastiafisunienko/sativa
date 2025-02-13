 $(window).on("load", function(){
        $("#back").fadeOut("slow", function(){
            $("#wrapper").fadeIn("slow")
        })
    })
$(document).ready(function(){

        //burger plugin
        $.fatNav();

    $("#main-contacto h2").animate({left: "15%",opacity: 1}, "slow");



    let allElements = document.querySelector(".elem-item");

   window.addEventListener("scroll", function(){
        let size = this.window.scrollY.toFixed(0);
        if (size > 1000) {
            allElements.style.left = -10 + "%" ;
            allElements.style.opacity = 1;
            allElements.style.fontWeight = "bold";
        } else if (size < 1200) {
            allElements.style.left = -50 + "%" ;
            allElements.style.fontWeight = "100";
            
        } 

        if (size > 2000) {
            allElements.style.left = -50 + "%" ;
            allElements.style.fontWeight = "100";
        }
    })


    //sello 
    let sello = document.querySelector("#sello");
    window.addEventListener("scroll", function(elemento){
        let proportions = sello.getBoundingClientRect();
        if (proportions.top < 200) {
            sello.style.fontWeight = "bolder"
            sello.style.color = "white"
        } else {
            sello.style.fontWeight = "200"
            sello.style.color = "green"
        }


    })

    //contactar box

    let contactarBox = document.querySelector("#contactar");
let link = document.querySelector("#link");


window.addEventListener("scroll", function() {
 let positionOfBox = contactarBox.getBoundingClientRect();

 if (positionOfBox.top < 500) {

     link.style.fontWeight = "bolder";
     link.style.color = "black"

 } else {

     link.style.fontWeight = 100;
     link.style.color = "green"
 }
})

//ajax fotos

$("#foto1").hover(
    function(){
    $("#info-ajax").load("info.html #info-ajax>*")

})


$("#foto2").hover(function(){
    $("#info-ajax-2").load("info2.html #info-ajax-2>*")
});

$("#foto3").hover(function(){
    $("#info-ajax-3").load("info3.html #info-ajax-3>*")
})
$("#foto4").hover(function(){
    $("#info-ajax-4").load("info4.html  #info-ajax-4>*")
})


//ajax position element

let elem = document.querySelector("#info-ajax");




 

})