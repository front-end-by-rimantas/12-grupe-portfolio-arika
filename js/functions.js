"use strict";
//HEADER script NAVIGATION
function renderHeaderNav() {
  const sections = document.querySelectorAll('[data-nav]');
  let HTML = '';

  for ( let i=0; i<sections.length; i++ ) {
      const link = sections[i].id;
      HTML += `<a class=animatedBorder  href="${link.indexOf('https://') === 0 ? '' : '#'}${link}">${sections[i].dataset.nav}</a>`
      
  }

  return document.querySelector('#headerjs nav').innerHTML = HTML;
}


//HEADER script Mobile-MENU

function headerActions() {
  const hamburger = document.querySelector('#headerjs .responsive-menu');
  const headerNav = document.querySelector('#headerjs .navigation');
  const headerNavLinks = headerNav.querySelectorAll('.navigation a');

  hamburger.addEventListener('click', () => {
      headerNav.classList.toggle('mobile');
  })

  headerNavLinks.forEach( link => {
      link.addEventListener('click', () => {
          headerNav.classList.remove('mobile');
      })
  })
}

//Header DropDown Script

function headerDrop() {
const home = document.querySelector('#headerjs nav').firstChild;  //find "Home" in navigation bar

home.innerHTML += `<div class="dropdown-content">
              <a href="http://adhyasoft.com/themeforest/arika/arika/index.html">Home Option 1</a>
              <a href="./">Home Option 2</a>
              </div>`;

  const pages = document.querySelector('#headerjs nav').lastChild;  //find "Home" in navigation bar
  
  pages.innerHTML += `<div class="dropdown-content">
                <a href="http://adhyasoft.com/themeforest/arika/arika/about.html">About Me</a>
                <a href="http://adhyasoft.com/themeforest/arika/arika/services.html">Services</a>
                <a href="http://adhyasoft.com/themeforest/arika/arika/portfolio.html">Portfolio</a>
                <a href="http://adhyasoft.com/themeforest/arika/arika/contact.html">Contact</a>
                </div>`;
  
  }




// HERO ANIMATION
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

  
//GALLERY SCRIPT
  
 function renderGallery(data) {
    let HTML = '';

    
    for ( let i=0; i<data.length; i++ ) {
        const work = data[i];
        HTML += `<div class="gallery-item">
                        <a href="./img/Gallery/${work.link}" data-lightbox="mygallery"><img src="./img/Gallery/${work.img}"></a>
                    <a href="./img/Gallery/${work.link}" data-lightbox="mygallery" class="titles">
                        
                         <div class="titleName">${work.title}</div>
                   </a>
                 </div>`;
       
    }
    
    
    document.querySelector('#latest_works_images').innerHTML = HTML;

    return;
}


//HEADER animatedBorder script


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
          <a href ="#" class = "photo">
              <img id = "foto" src="./img/Blog/${blogiukai.img}" alt="User photo">
          </a>
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

  //Skills

function renderSkills( data ) {
  let HTML = '';


if ( !Array.isArray (data) ) {
  return console.error('ERROR: negaliu sugeneruoti sekcijos, del blogo formato duomenu.');
}

if ( data.length === 0 ) {
  return console.error('ERROR: negaliu sugeneruoti sekcijos del tuscio saraso.');
}

for ( let i=0; i<data.length; i++ ) {
  
  const skill = data[i];
  console.log (skill)
  HTML += `<div class="progress-bar">
              <div class="texts">
                  <div class="title">${skill.title}</div>
                  <div class="value" style = "margin-right: ${skill.minus}%" >${skill.value}%</div>
              </div>
              <div class="bar">
                  <div class="value" style="width: ${skill.value}%; ">
                      <div class="loading"></div>
                  </div>
              </div>
          </div>`;
}

document.querySelector('#skills_progress_bars').innerHTML = HTML;
}


/* Neringos script end*/


/* Neringos script end*/


renderBorder();
function renderBorder(){
const border = document.querySelector('.navigation');

border.addEventListener('click', () => {
  border.classList.add('animationStop');
   
})


}