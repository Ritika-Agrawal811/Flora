let carouselContainer = document.querySelector('.carousel-container');
let carouselItems = document.querySelectorAll(".carousel-item");
let plantDescriptionPrevious, plantDescriptionCurrent;
let previousItem,currentItem;
let counter = 1;


// carousel

previousItem = document.querySelector(".active")



setInterval(()=>{


    currentItem = carouselItems[counter];
    plantDescriptionCurrent = currentItem.querySelector(".carousel-plant-description");
    plantDescriptionPrevious = previousItem.querySelector(".carousel-plant-description");

    // removing and adding active class
    currentItem.classList.add("active");
    previousItem.classList.remove("active");

    // modifying plant description current
    plantDescriptionCurrent.querySelector("h3").classList.replace('small', 'normal');
    plantDescriptionCurrent.querySelector(".bio-name").classList.replace('small', 'normal');
    plantDescriptionCurrent.querySelector("button").classList.replace('small-btn','normal-btn');

    // modifying plant description previous
    plantDescriptionPrevious.querySelector("h3").classList.replace( 'normal', 'small');
    plantDescriptionPrevious.querySelector(".bio-name").classList.replace( 'normal' , 'small');
    plantDescriptionPrevious.querySelector("button").classList.replace('normal-btn','small-btn');

    // removing previous item and appending it at last position
    previousItem.remove();
    carouselContainer.append(previousItem);

    previousItem = currentItem;

    if( counter == 7){
        counter=0;
        
    }else{
        counter++;
    }


} , 2000);

// function for displaying form

let contactDetails = document.querySelector(".contact-details");

function showForm(){

    
        contactDetails.style.width = "50%";
    

}

// menu-btn

      let pixels = 500;
      let menuBtn = document.querySelector(".menu-btn");
      let menuList = document.querySelector(".menu-list");

      const scrollContainer = () => {
        return document.documentElement || document.body;
      };

      document.addEventListener("scroll", () => {
        if (scrollContainer().scrollTop > pixels) {
          menuBtn.classList.remove("hidden");
        } 
        else {
          menuBtn.classList.add("hidden");
          menuList.classList.add("hidden");
         
        }
      });

      window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY + 50) >= document.body.offsetHeight) {
           menuBtn.style.bottom = "5em";
           menuList.style.bottom = "8em";
        }else{
            menuBtn.style.bottom = "1.5em";
            menuList.style.bottom = "6em";
        }
    };

    menuBtn.addEventListener("click", ()=> {
        menuList.classList.toggle("hidden");
    });