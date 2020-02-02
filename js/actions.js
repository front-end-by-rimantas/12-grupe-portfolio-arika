"use strict";
/* Indres script start*/

//Header navigation

renderHeaderNav();
headerActions();
headerDrop();
headerDropp();
//headerDrop2();

//SCROLL HEADER

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("headerjs").className = "header";
  } else {
    document.getElementById("headerjs").className = "";
  }
}


//Gallery script
renderGallery( works );



/* Indres script end*/



/* Ramunes script start*/

/* Ramunes script end*/



/* Neringos script start*/
renderBlogs(info);

renderSkills( skills );

renderTouch(duomenys)
/* Neringos script end*/