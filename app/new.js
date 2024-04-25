//yeni pencere yaratmaq mumkun

function yeni1() {
  pencere = window.open("", "myWindow", "width=200, height=100");
  pencere.document.write("Bu yeni penceremizdir!");
}
function bagla1() {
  pencere.close();
}
//-----------------------------------
