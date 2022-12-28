// This is main js file

// // navbar import
// import { navbar, toggleSlidingMenu } from "./navbar.js";

// navbar(document.getElementById("navbar"));


// // footer is imported
// import { footer } from "./footer.js";

// footer(document.getElementById('footer'))









// window event listener and
    

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


// hide the menu at initial 
document.querySelector("#menu").style.display = 'none';
// toggling sliding manu in mobile view
document.querySelector("#menu-bars").addEventListener("click", function(){
           if(document.querySelector("#menu").style.display == 'flex'){
                document.querySelector("#menu").style.display = 'none';
                document.querySelector("#menu-bars").children[0].setAttribute("class", "fa fa-bars");
                document.querySelector("#mobile-navbar").style.backgroundColor = "transparent";
           }else{
            document.querySelector("#menu").style.display = 'flex';
            document.querySelector("#menu-bars").children[0].setAttribute("class", "fa fa-close");
            
            document.querySelector("#mobile-navbar").style.background = "#398dc1a0";
           }
            
})






// scroll to vieew a praticular elements
let x =0;
setTimeout(function(){
      let children =   document.querySelector("#slides").children;
      if(x == 6){
         x = 0;
      }
      children[x].scrollIntoView();
      x++;

}, 1000)
