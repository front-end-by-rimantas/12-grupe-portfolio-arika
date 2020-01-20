"use strict";

/* Indres script start*/

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
            <div class="text">
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