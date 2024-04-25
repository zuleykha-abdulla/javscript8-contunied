//
function yeni() {
  pencere = window.open("", "myWindow", "width=200, height=100");
  pencere.document.write("Bu yeni penceremizdir!");
}
function deyis() {
  pencere.resizeTo(300, 300);
  pencere.focus();
}
