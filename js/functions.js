"use strict";

class TypeWriter {
    constructor(txtElement, words, wait = 1000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 5);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 200;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // If word is complete
      if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }

  

  
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
function renderBlogs (data) {
     
  let HTML = '';


  if ( !Array.isArray (data) ) {
      return console.error('ERROR: negaliu sugeneruoti sekcijos, del blogo formato duomenu.');
  }

  if ( data.length === 0 ) {
      return console.error('ERROR: negaliu sugeneruoti sekcijos del tuscio saraso.');
  }
  

  for ( let i=0; i<data.length; i++ ) {

      const blogiukai = data[i];

HTML += `<div class= "blokai">
          <div class = "photo">
              <img id = "foto" src="./img/Blog/${blogiukai.img}" alt="User photo">
          </div>
          <p class="date">
              ${blogiukai.date.day}
              ${blogiukai.date.month}
              ${blogiukai.date.years}
              ${blogiukai.date.design} 
          </p>
          <div class="textas">
              <a href="#">
                  <h3>${blogiukai.description}</h3>
              </a>  
              <p>${blogiukai.text}</p>
          </div>
              <a class = 'nuoroda' href ="#">
                  <p>${blogiukai.link}</p>
              </a> 
      </div>`;           
}

         

  return document.querySelector('#Blogs > .row').innerHTML = HTML;
}
/* Neringos script end*/