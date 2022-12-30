// This is main js file

// // navbar import
// import { navbar, toggleSlidingMenu } from "./navbar.js";

// navbar(document.getElementById("navbar"));


// // footer is imported
// import { footer } from "./footer.js";

// footer(document.getElementById('footer'))









    
// navbar modification acording to size of window
document.querySelector("#mobile-navbar").style.display = 'none';

function   moileNavbar(){
   if(window.screen.availWidth >  720){
      document.querySelector("#desktop-navbar").style.display = 'flex';
      document.querySelector("#mobile-navbar").style.display = 'none';

}else{
     document.querySelector("#desktop-navbar").style.display = 'none';
      document.querySelector("#mobile-navbar").style.display = 'block';
}
}

moileNavbar();

window.addEventListener("resize", function(){
          moileNavbar();
});







// scrolling to top functionality 
   function scrolltoTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
   }

  document.querySelector("#scrolltoTop").addEventListener("click", scrolltoTop);



// scroll to particular section  for desktop
let section = document.querySelector("#desktop-menu").children;
for(let i=0; i<section.length; i++){
     section[i].addEventListener("click", function(){
         scrollToContainer(i); 
     });
}

// scroll to particular section  for mobile
let mSection = document.querySelector("#menu").children;
for(let i=0; i<mSection.length; i++){
     mSection[i].addEventListener("click", function(){
         scrollToContainer(i);
         toggleMenu();
        
     });
}

function scrollToContainer(element){
        document.querySelectorAll(".container")[element-1].scrollIntoView(true);
}

// hide the menu at initial 
document.querySelector("#menu").style.display = 'none';
// toggling sliding manu in mobile view
document.querySelector("#menu-bars").addEventListener("click", function(){
            toggleMenu();
})

function toggleMenu(){
   if(document.querySelector("#menu").style.display == 'flex'){
      document.querySelector("#menu").style.display = 'none';
      document.querySelector("#menu-bars").children[0].setAttribute("class", "fa fa-bars");
      document.querySelector("#mobile-navbar").style.backgroundColor = "transparent";
 }else{
  document.querySelector("#menu").style.display = 'flex';
  document.querySelector("#menu-bars").children[0].setAttribute("class", "fa fa-close");
  
  document.querySelector("#mobile-navbar").style.background = "#398dc1a0";
 }
}






// scroll to vieew a praticular elements in y direction
let x =0;
setInterval(function(){
      let children =   document.querySelectorAll(".container");
      //  console.log(children);
     

}, 1000)



