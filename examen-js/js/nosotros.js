$(window).on("load", function(){
    $("#back").fadeOut("slow", function(){
        $("#wrapper").fadeIn("slow")
    })
})
 
 
 $(document) .ready(function(){



         //burger plugin
         $.fatNav();

         
     //text shadow SOBRE MI
     let sectionh2 = document.querySelector("#nosotros-h2");
     document.addEventListener("mousemove", function(event){
     let x =  event.clientX;
     let y = event.clientY;
     const rect = sectionh2.getBoundingClientRect();
     const puntoX = rect.left + rect.width / 2;
     const puntoY = rect.top + rect.height / 2;
     const offsetX = (x - puntoX) / 40;
     const offsetY = (y - puntoY) / 40;
     sectionh2.style.textShadow = `${offsetX}px ${offsetY}px 12px #74be1e`;
 })





 //jquery plugin
 $(".demo").champ({
     plugin_type :  "basic"
   });

   $(".accordion_example").champ({
     side : "left", // or right
   });



   //plugin transitions

let plugin = document.querySelector("#plugin");
let colorText = document.querySelector(".tab_wrapper")


window.addEventListener("scroll", function(){
 let positionOfPlugin = plugin.getBoundingClientRect();

if (positionOfPlugin.top < 500) {
 plugin.style.width = 75 + "%";
 plugin.style.opacity = 1;
 colorText.style.color = "white";
} else if (positionOfPlugin.top > -200 && positionOfPlugin.top > 600 ) {
 plugin.style.width = 25 + "%";
 plugin.style.opacity = 0.2;
 colorText.style.color = "green";
}
})

//transition h3 of plugin 

let element = document.querySelector("#plugin-section >h3");

window.addEventListener('scroll', function(){
 let positionOfElement = element.getBoundingClientRect();

 if (positionOfElement.top < 400) {
     element.style.color = "white"
 } else if (positionOfElement.top > -100) {
     element.style.color = "green"
 }
})

//CONTACTA ME
let contactarBox = document.querySelector("#contactar");
let link = document.querySelector("#link");




window.addEventListener("scroll", function() {
 let positionOfBox = contactarBox.getBoundingClientRect();

 if (positionOfBox.top < 500) {

     link.style.fontWeight = "bolder";
     link.style.color = "white"

 } else {

     link.style.fontWeight = 100;
     link.style.color = "green"
 }
})
})