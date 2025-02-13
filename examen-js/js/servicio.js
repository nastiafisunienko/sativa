$(window).on("load", function(){
    $("#back").fadeOut("slow", function(){
        $("#wrapper").fadeIn("slow")
    })
})

$(document) .ready(function(){

         //burger plugin
         $.fatNav();



         //section music production
         let sectionMusicProd = document.querySelector("#service");
         let description = document.querySelector("#description");

         let headerService = document.querySelector("#box-servicio h2")
         window.addEventListener("scroll", function(){
            let radiusOfBox = sectionMusicProd.getBoundingClientRect();

            if (radiusOfBox.top < 300) {
                headerService.style.fontWeight = "bolder";
                description.style.opacity = 1;
            } else {
                headerService.style.fontWeight = 200;
                description.style.opacity = 0;
            }
         })

    //slider js plugin
        $('.marquee-slider').marqueeSlider([
        // slider 1 options
        { sensitivity: 0.1, repeatItems: true },
        // slider 2 options
        { sensitivity: 0.5, repeatItems: true }
      ])

      //boxshadow que ofrecemos

      let boxServicios = document.querySelector("#servicios");
      let headerServicios = document.querySelector("#servicios h2");

      document.addEventListener("mousemove", function(el){
          let mousePositionX = el.clientX;
          let mousePositionY = el.clientY;
          let position = boxServicios.getBoundingClientRect();
          let positionOfTheElementX = position.left + position.width / 2;
          let positionOfTheElementY = position.top + position.height / 2;
          let offsetMouseXpos = (mousePositionX - positionOfTheElementX) / 70;
          let offsetMouseYpos = (mousePositionY - positionOfTheElementY) / 70;

          headerServicios.style.textShadow = `${offsetMouseXpos}px ${offsetMouseYpos}px 5px #74be1e`;

      })


      //section TOP SPOTIFY

      let section = document.querySelector("#top");
      let headerSection = document.querySelector("#headers-serv h2");
      let headerSectionh3 = document.querySelector("#headers-serv h3");
      let frame = document.querySelector("#top-cancion iframe");

      window.addEventListener("scroll", function(){
        let sectionPos = section.getBoundingClientRect();
        if (sectionPos.top < 440) {

            headerSection.style.opacity = 1;
            headerSection.style.fontWeight = "bolder";
            headerSectionh3.style.opacity = 1;
            headerSectionh3.style.fontWeight = "bolder";
            frame.style.opacity = 1;
        } else {
            headerSection.style.opacity = 0;
            headerSection.style.fontWeight = 200;
            headerSectionh3.style.opacity = 0;
            headerSectionh3.style.fontWeight = 200;
            frame.style.opacity = 0;
        }

      })



      //STARS 
        let drop = $("#drop");
      $(".rating-stars .star-service").on("mouseover", function(){
        var onStar = parseInt($(this).data("num"));


        $(".star-service").each(function(e){
            if(e + 1 <= onStar) {
                $(this).css("color", "#ffcb00");
                $(this).attr("draggable", true);

                $(this).on("dragend", function(){
                    $(this).removeClass("drag");
                })
            } else {
                $(this).css("color", "#d6c7c7")
                $(this).attr("draggable", false)
            }
        })
      })

      $(".rating-stars .star-service").on("mouseleave", function(){
        $(".star-service").each(function(e){
            $(this).css("color", "#d6c7c7")
        })
      })

      $(".star-service").each(function(){
        if($(this).prop("draggable", true)) {
            $(this).on("dragstart", function(){
                $(this).addClass("drag");
            })
        } else {
            $(this).removeClass("drag");
        }
      })



     $(drop).on("dragover", function(e){
        e.preventDefault()
     })

     $(drop).on("drop", function(e){
        e.preventDefault()
        $("#drop p").text("gracias por tu opinion!");
        $(".rating-stars").css("display", "none");
        $(".rating").fadeOut(2000)
     })


     
     
     

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
 

})