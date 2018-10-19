$(document).ready(function() {
$("#infos").submit(function(event)  {
event.preventDefault()
    var c = parseInt($("input#c").val());
    var java = parseInt($("Java").val());
    var php = parseInt($("input#PHP").val());
    var ruby = parseInt($("input#Ruby").val());
    var css = parseInt($("input#CSS").val());

    if(c) {
      $("#c").show();
      $("#Java").hide();
      $("#PHP").hide();
      $("#RUBY").hide();
      $("#CSS").hide();
    } else if (java) {
      $("#c").hide();
      $("#Java").show();
      $("#PHP").hide();
      $("#RUBY").hide();
      $("#CSS").hide();
    } else if (php) {
      $("#c").hide();
      $("#Java").hide();
      $("#PHP").show();
      $("#RUBY").hide();
      $("#CSS").hide();
    }  else if (ruby) {
       $("#c").hide();
       $("#Java").hide();
       $("#PHP").hide();
       $("#RUBY").show();
       $("#CSS").hide();
    } else {
      $("#c").hide();
      $("#Java").hide();
      $("#PHP").hide();
      $("#RUBY").hide();
      $("#CSS").show();
    }
    
 });
  });
