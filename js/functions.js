"use strict";

/* Indres script start*/

/* Indres script end*/



/* Ramunes script start*/
function renderServices( data ) {
    let HTML = '';

    for (let i=0; i<data.lenght; i++) {
      const block = data[i];
    
    }

    HTML += `<div class="col-4 block">
            <i class="fa fa-${block.icon}"></i>
            <h2>${block.title}</h2>   
            <p>${block.sentence}</p>    
          </div>`;
    document.querySelector('#services > .row').innerHTML = HTML;
    return;       

}
/* Ramunes script end*/



/* Neringos script start*/

/* Neringos script end*/