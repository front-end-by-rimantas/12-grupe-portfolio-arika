"use strict";

/* Indres script start*/

/* Indres script end*/



/* Ramunes script start*/
function renderServices( data ) {
  const maxBlocks = 6;
  let createdBlocks = 0;
  let HTML = '';

  if ( !Array.isArray(data) ) {
      return console.error('ERROR: negaliu sugeneruoti "Service" sekcijos, del blogo duomenu formato .');
  }
  if ( data.length === 0 ) {
      return console.error('ERROR: negaliu sugeneruoti "Service" sekcijos, del tuscio saraso.');
  }

  for ( let i=0; i<data.length; i++ ) {
      if ( createdBlocks === maxBlocks ) {
          break;
      }
      const block = data[i];

    
      if ( typeof(block) !== 'object' ||
           block === null ||
           Array.isArray(block) ) {
          continue;
      }

      if ( (block.icon || (typeof(block.icon) === 'string' && block.icon.length > 0)) &&
           (block.title || (typeof(block.title) === 'string' && block.title.length > 0)) &&
           (block.description || (typeof(block.description) ==='string' && block.lenght > 0))
           ) {
            
          HTML += `<div class="service center col-4 col-sm-12 block"> 
                      <i class=" ico fa fa-${block.icon}"aria-hidden="true"></i>
                      <span>${block.title}</span>
                      <h4>${block.description}</h4>
                  </div>`

          createdBlocks++;
      }
  }

  if ( createdBlocks === 0 ) {
      document.querySelector('#services').remove();
  } else {
      document.querySelector('#services > .row').innerHTML = HTML;
  }

  return;
} 





/* Ramunes script end*/



/* Neringos script start*/

/* Neringos script end*/