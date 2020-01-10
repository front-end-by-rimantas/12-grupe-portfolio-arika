"use strict";

/* Indres script start*/
var string = "Designer";
var string = "Developer"
var str = string.split("");
var el = document.getElementById('str');
(function animate() { 
str.length > 0 ? el.innerHTML += str.shift() : setTimeout(running); 
var running = setTimeout(animate, 100);

})();





/* Indres script end*/


/* Ramunes script start*/

/* Ramunes script end*/



/* Neringos script start*/

/* Neringos script end*/