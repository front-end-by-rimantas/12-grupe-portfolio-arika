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
function renderGallery( data ) {
    let HTML = '';

    
    for ( let i=0; i<data.length; i++ ) {
        const work = data[i];
        HTML += `<div class="gallery-item">
                    <a href="./img/Gallery/${work.link}"><img src="./img/Gallery/${work.img}"></a>
                     <div class="titles">
                         <div class="plus">+</div>
                         <div class="titleName">${work.title}</div>
                    </div>
                </div>`;
       
    }
    
    
    document.querySelector('#latest_works_images').innerHTML = HTML;

    return;
}
/* Indres script end*/


/* Ramunes script start*/

/* Ramunes script end*/



/* Neringos script start*/

/* Neringos script end*/