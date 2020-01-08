"use strict";

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("headeriux").className = "header";
  } else {
    document.getElementById("headeriux").className = "";
  }
}