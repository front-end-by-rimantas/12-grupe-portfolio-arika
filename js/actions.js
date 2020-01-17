"use strict";
/* Indres script start*/

//SCROLL HEADER

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("headeriux").className = "header";
  } else {
    document.getElementById("headeriux").className = "";
  }
}

renderGallery( works );



/* Indres script end*/



/* Ramunes script start*/

/* Ramunes script end*/



/* Neringos script start*/
renderBlogs(info);

renderSkills( skills );

/* Neringos script end*/