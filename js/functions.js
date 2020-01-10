"use strict";

/* Indres script start*/
var string = "Designer";
var string = "Developer"
var str = string.split("");
var el = document.getElementById('str');
(function animate() { 
str.length > 0 ? el.innerHTML += str.shift() : clearInterval(running); 
var running = setInterval(animate,90);
})();

window.setInterval(function() {
    if (visible === true) {
      con.className = 'cursor hidden'
      visible = false;

    } else {
      con.className = 'cursor'

      visible = true;
    }
  }, 400)




/* Indres script end*/


/* Ramunes script start*/

/* Ramunes script end*/



/* Neringos script start*/

/* Neringos script end*/