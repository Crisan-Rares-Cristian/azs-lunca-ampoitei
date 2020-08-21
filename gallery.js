var img = document.querySelector("#main-img");
var doc = document.querySelector("#main-doc");
var nrImg = 1;
var nrDoc = 1;

// Docs - add Event Listeners
const nextDoc = document.querySelector("#next-doc"); 
const prvDoc = document.querySelector("#prv-doc"); 
nextDoc.addEventListener('click', goToNextDoc);
prvDoc.addEventListener('click', goToPrvDoc);

// Goes to next doc
function goToNextDoc() {

  if(nrDoc == 50) {
    nrDoc ++;
    doc.src = 'poze/documente/'+ nrDoc +'.jpg';
    nextDoc.style.display = 'none';
  }

  if(nrDoc < 50) {
    nrDoc ++;
    doc.src = 'poze/documente/'+ nrDoc +'.jpg';
    prvDoc.style.display = 'block';
  }

}

// Goes to previous doc
function goToPrvDoc() {
  if(nrDoc == 2) {
    nrDoc --;
    doc.src = 'poze/documente/'+ nrDoc +'.jpg';
    prvDoc.style.display = 'none';
  }

  if(nrDoc> 2) {
    nrDoc--;
    doc.src = 'poze/documente/'+ nrDoc +'.jpg';
    nextDoc.style.display = 'block';
  } 
}

if(nrDoc == 1) {
  prvDoc.style.display = 'none';
}

// Images - add Event Listeners
const nextImg = document.querySelector("#next-img"); 
const prvImg = document.querySelector("#prv-img"); 
 nextImg.addEventListener('click', goToNextImg);
 prvImg.addEventListener('click', goToPrvImg);

// Goes to next picture
function goToNextImg() {

  if(nrImg == 21) {
    nrImg ++;
    img.src = 'poze/Gallery/'+ nrImg +'.jpg';
    nextImg.style.display = 'none';
  }

  if(nrImg < 21) {
    nrImg ++;
    img.src = 'poze/Gallery/'+ nrImg +'.jpg';
    prvImg.style.display = 'block';
  }

}

// Goes to previous picture
function goToPrvImg() {
  if(nrImg == 2) {
    nrImg --;
    img.src = 'poze/Gallery/'+ nrImg +'.jpg';
    prvImg.style.display = 'none';
  }

  if(nrImg > 2) {
    nrImg --;
    img.src = 'poze/Gallery/'+ nrImg +'.jpg';
    nextImg.style.display = 'block';
  } 
}

if(nrImg == 1) {
  prvImg.style.display = 'none';
}


// On button screen toggle fullscreen for images
document.querySelector("#full-screen-img").addEventListener('click', goFullScrImg);

function goFullScrImg() {
  open('poze/Gallery/'+ nrImg +'.jpg');
}

// On button screen toggle fullscreen for docs
document.querySelector("#full-screen-doc").addEventListener('click', goFullScrDoc);

function goFullScrDoc() {
  open('poze/documente/'+ nrDoc +'.jpg');
}


// Add Event listener on menu buttons
var navBtns = document.querySelectorAll(".nav-item");
var contents = document.querySelectorAll(".main-showcase");

//Show the content that is related with the btn
navBtns.forEach(item => {
  item.addEventListener('click', function() {
    removeShow(); //Call the show
    var content = document.querySelector(`#${this.classList[1]}-content`); //Seek the menu-btn related content
    content.classList.add('show'); // Adds the show class to the found content 
    // Removes the left arrow on first doc
    if(nrDoc == 1) {
      prvDoc.style.display = 'none';
    }

    // Removes the left arrow on first image
    if(nrImg == 1) {
      prvImg.style.display = 'none';
    }
  });
});

// Removes the show class for all content
function removeShow() {
  contents.forEach(item => item.classList.remove('show'));
}
