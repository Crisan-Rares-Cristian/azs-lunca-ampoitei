const exit = document.querySelector('#exit-bi');
exit.addEventListener('click', hideBuletin);

function hideBuletin() {
  exit.style.display = 'none';
  document.querySelector('.buletin-informativ').style.display = 'none';
}

// let pageOutForExit = false;

// document.body.onmouseleave = () => {
//   pageOutForExit = true;
// }

// document.body.onmouseleave = () => {
//   pageOutForExit = false;
// }

// window.onhashchange = () => {
//   if(pageOutForExit) {

//   }
// }
