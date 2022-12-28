//    This is for navbar
      
function navbar(nav){

    if( window.screen.width  >= 1024){
         // ad csss file or chage it according to @media
        nav.innerHTML = `

        <a href="#"><h1><i  id="logo">Narendra Swami</i></h1></a>
        <div>
        <a href="./index.html">Home</a>
        <a href="./about.html">About</a>
        <a href="./project.html">Project</a>
        <a href="./skill">Skill</a>
        <a href="./contact">Contact</a>
        </div>
   `

    }else if(window.screen.width    >= 768  && window.screen.width <=   1024){
          nav.innerHTML  = `
            <a href="#"><h1><i  id="logo">Narendra Swami</i></h1></a>
            <div>
            <a href="./index.html">Home</a>
            <a href="./about.html">About</a>
            <a href="./project.html">Project</a>
            <a href="./skill">Skill</a>
            <a href="./contact">Contact</a>
            </div>
           
          
          `
    }else if(window.screen.width    >= 320  && window.screen.width <=   767){
          nav.innerHTML  = `
            <a href="./index.html">Narendra Swami</a>
            <a href="#" id="toggling"><i id="toggle-0" class="fa fa-bars"></i></a>
            
          `
    }
}


function slidingMenuOpen(){
        //  slide menu in mobile view

        
           document.getElementById("navbar").innerHTML  = `
               <div>
                   <a href="./index.html">Home</a>
                   <a href="./about.html">About</a>
                   <a href="./project.html">Project</a>
                   <a href="./skill">Skill</a>
                    <a href="./contact">Contact</a>
                   <a href="#" id="toggling"><i id ="toggle-1" class="fa fa-close"></i></a>
               </div>
         `
          
      
       
      
}

function slideMenuClose(){
              document.getElementById("navbar").innerHTML  = `
            <a href="./index.html">Narendra Swami</a>
            <a href="#" id="toggling"><i id="toggle-0" class="fa fa-bars"></i></a>
          `
      
}


function toggleSlidingMenu(){
              console.log(document.getElementById("toggling"))
              if(document.getElementById("toggle-0") == null){
                     slideMenuClose();
              }else{
                    slidingMenuOpen();
              }
}

export {
    navbar, toggleSlidingMenu
};