var doc = document.querySelector("#DEluiD-link");
var img = document.querySelector("#AA-link");
var nrImg = 1;
var nrDoc = 1;

//Loading FB iframe links

const aaIDs = [
  742081826530497,
  298106518012022,
  385290182433321,
  268428371088609,
  264431254889187,
  222763388703342,
  840567373134634,
  742725373212361,
  279395299957127,
  305311547189159,
  2648143688735088,
  935660096908468,
];

const deluidIDs = [
  565454770731311,
  1141099369561221,
  1033049373748214,
  531727927721519,
  586091245593740,
  2528210144175361,
  241704463647540,
  156649735774502,
  775881123144453,
  167819841288817,
  266431004404561,
  244537036613133,
  612070912996628,
  2710152535968234,
  816002448924263,
  2519972754886055,
  253509176087888,
  2718554411803035,
];

// Docs - add Event Listeners
const nextDoc = document.querySelector("#next-doc"); 
const prvDoc = document.querySelector("#prv-doc"); 
nextDoc.addEventListener('click', goToNextDoc);
prvDoc.addEventListener('click', goToPrvDoc);

// Goes to next doc
function goToNextDoc() {

  if(nrDoc == 50) {
    nrDoc ++;
    doc.src = `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAZSLuncaAmpoitei%2Fvideos%2F${deluidIDs[nrDoc]}%2F&show_text=true&width=750&height=422&appId`;
    nextDoc.style.display = 'none';
  }

  if(nrDoc < 50) {
    nrDoc ++;
    doc.src = `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAZSLuncaAmpoitei%2Fvideos%2F${deluidIDs[nrDoc]}%2F&show_text=true&width=750&height=422&appId`;
    prvDoc.style.display = 'block';
  }

}

// Goes to previous doc
function goToPrvDoc() {
  if(nrDoc == 2) {
    nrDoc --;
    doc.src = `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAZSLuncaAmpoitei%2Fvideos%2F${deluidIDs[nrDoc]}%2F&show_text=true&width=750&height=422&appId`;
    prvDoc.style.display = 'none';
  }

  if(nrDoc> 2) {
    nrDoc--;
    doc.src = `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAZSLuncaAmpoitei%2Fvideos%2F${deluidIDs[nrDoc]}%2F&show_text=true&width=750&height=422&appId`;
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
    img.src = `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAZSLuncaAmpoitei%2Fvideos%2F${aaIDs[nrImg]}%2F&show_text=true&width=750&height=422&appId`;
    nextImg.style.display = 'none';
  }

  if(nrImg < 21) {
    nrImg ++;
    img.src = `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAZSLuncaAmpoitei%2Fvideos%2F${aaIDs[nrImg]}%2F&show_text=true&width=750&height=422&appId`;
    prvImg.style.display = 'block';
  }

}

// Goes to previous picture
function goToPrvImg() {
  if(nrImg == 2) {
    nrImg --;
    img.src = `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAZSLuncaAmpoitei%2Fvideos%2F${aaIDs[nrImg]}%2F&show_text=true&width=750&height=422&appId`;
    prvImg.style.display = 'none';
  }

  if(nrImg > 2) {
    nrImg --;
    img.src = `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAZSLuncaAmpoitei%2Fvideos%2F${aaIDs[nrImg]}%2F&show_text=true&width=750&height=422&appId`;
    // console.log(img.src);
    nextImg.style.display = 'block';
  } 
}

if(nrImg == 1) {
  prvImg.style.display = 'none';
}