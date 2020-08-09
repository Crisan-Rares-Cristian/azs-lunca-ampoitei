var mainBtnImg = document.getElementById("main-btn-img");
var menu = document.getElementById("menu");
var menuContent = document.getElementsByClassName("menu-item");
var showcase = document.getElementsByClassName("showcase");
// Vars for drop menu
var dropBtn = document.getElementsByClassName("drop-btn");
var dropContent = document.getElementsByClassName("drop-content");


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




//Function that toogles the menu button on mobile devices
function toggle() {
  if (menu.style.maxHeight) {
    menu.style.maxHeight = null;
    mainBtnImg.style.transform = "rotate(90deg)";
  } else {
    menu.style.maxHeight = menu.scrollHeight + "px";
    mainBtnImg.style.transform = "rotate(180deg)";
    menu.style.transitionDuration = '0.5s';
  }
}

/*show 1*/

  var i;

    // Show content when the corespondent link is clicked
    for (i = 0; i < menuContent.length; i++) {
      menuContent[i].addEventListener("click", selectItem);
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
  mainBtnImg.style.transform = 'rotate(90deg)';
}

// Removes all content
    function removeShow() {
      for (i = 0; i < showcase.length; i++) {
        showcase[i].firstElementChild.classList.remove('show');
      }
    }

// Toggle Dark Theme
