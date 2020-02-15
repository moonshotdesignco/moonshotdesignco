$(document).ready(function(){
  $("#cover").fadeOut(1500, function(){
    $("#preload").delay(500).fadeOut(1500, function(){
      $("#load").delay(500).fadeIn(2000);
    });
  });
});