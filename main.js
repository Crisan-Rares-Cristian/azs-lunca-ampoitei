var menu = document.getElementById("menu");
var menuItems = document.getElementsByClassName("menu-item");
var showcase = document.getElementsByClassName("showcase");
// Vars for drop menu
var dropBtn = document.getElementsByClassName("drop-btn");
var dropContent = document.getElementsByClassName("drop-content");
var loader = document.getElementById("loader");

//Media query START
function mediaQuery(x) {

setTimeout(function() {
  loader.style.display = "none";
}, 5000);

// Loops throught the dropBtn HTML Collection
for(let i = 0; i < dropBtn.length; i++) {
// Listens for hover  
  dropBtn[i].addEventListener('click', showContent);
// Shows Content on click
  function showContent() {
    dropContent[i].classList.toggle("show");
    }
        // Close the dropdown if the user clicks outside of it
    window.onclick = function(e) {
      if (!e.target.matches('.drop-btn')) {
        if (dropContent[i].classList.contains('show')) {
          dropContent[i].classList.remove('show');
        }
      }
    }
}



/*show 1*/

  var i;

    // Show content when the corespondent link is clicked
    for (i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener("click", selectItem);
    }
function selectItem(e) {
  // Initialize Remove all content
  removeShow();
  //Query Select the specific content eg for(home, about, doctrine, more) 
  const content = document.querySelector(`#${this.classList[1]}-content`);
  //Adds the class with the display show
  content.classList.add('show');
  menu.style.maxHeight = null;
  menu.style.transitionDuration = '0.1s';
}

// Removes all content
    function removeShow() {
      for (i = 0; i < showcase.length; i++) {
        showcase[i].firstElementChild.classList.remove('show');
      }
    }




// Collapsible

var coll = document.getElementsByClassName('collapsible');
let collapsed = true;

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', toggleColl)
}


function toggleColl() {
  var toggled = document.getElementById(this.id + '-content');

  if (collapsed == true) {
    toggled.style.maxHeight = toggled.scrollHeight + 'px';
    toggled.style.overflow = 'hidden';
    this.innerHTML =  'Ascunde Reguliile';
    collapsed = false;
  }
  else {
    if(x.matches) { 
      console.log('x.matches');
      toggled.style.maxHeight = '300px';
      toggled.style.overflowY = 'scroll'; 
    }
    else if(!x.matches) { 
      console.log('x.not matches');
      toggled.style.maxHeight = '125px';
      toggled.style.overflow = 'hidden'; 
    }
    this.innerHTML = 'Află mai multe';
    collapsed = true;
  }
  
}


}//media query - END
// Media Query init and callback
var x = window.matchMedia("(min-width: 784px)");
mediaQuery(x);
x.addListener(mediaQuery);