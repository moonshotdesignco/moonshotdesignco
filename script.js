// $(document).ready(function(){
//   $("#cover").fadeOut(1500, function(){
//     $("#preload").delay(500).fadeOut(1500, function(){
//       $("#load").delay(500).fadeIn(2000);
//     });
//   });
// });

function delayFunc() {
  setTimeout(loadFunc, 1000);
}

function loadFunc() {
  // document.getElementById("cover").style.display = "none";
  document.getElementById("preload").style.display = "none";
  document.getElementById("load").style.display = "unset";
}