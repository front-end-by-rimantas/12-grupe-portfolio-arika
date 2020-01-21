"use strict";
/* Indres script start*/
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("headeriux").className = "header";
  } else {
    document.getElementById("headeriux").className = "";
  }
}

/* Indres script end*/



/* Ramunes script start*/
renderServices( services )
/* Ramunes script end*/



/* Neringos script start*/

/* Neringos script end*/