//
function funksiya() {
  alert(window.pageYOffset);
}
//-------------------------------------------------

//print funksiyasi

function cap() {
  window.print();
}
//----------------------------------------------

//teleb olunan bir hissenin printi
function printElement(elementId) {
  var element = document.getElementById(elementId);
  var originalContents = document.body.innerHTML;
  var printContents = element.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}
//--------------------------------------
