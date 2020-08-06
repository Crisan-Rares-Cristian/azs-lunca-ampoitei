var mainBtnImg = document.getElementById("main-btn-img");
var menu = document.getElementById("menu");
var menuContent = document.getElementsByClassName("menu-item");
var showcase = document.getElementsByClassName("showcase");

//Function that toogles the menu button
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
