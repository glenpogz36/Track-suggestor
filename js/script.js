$(document).ready(function() {
$("#infos").submit(function(event)  {
event.preventDefault()
    var c = parseInt($("input#c").val(1));
    var java = parseInt($("input#javat").val(2));
    var php = parseInt($("input#php").val(3));
    var ruby = parseInt($("input#ruby").val(4));
    var css = parseInt($("input#css").val(5));
    if(c || !java || !java || !php || !ruby || !css)
    $("#c").show(1);
     $("#java").hide(2);
     $("#php").hide(3);
     $("#ruby").hide(4);
     $("#css").hide(5);
   })
 });
