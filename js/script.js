$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var name = $("input#name").val();
    $(".name").text(name);
    $("#letter1").show();


    event.preventDefault();
  });
});
$(document).ready(function() {
  $("#formOne").submit(function(event) {
  var address = $("input#address").val();
    $(".address").text(address);
        $("#letter2").show();
      });
    });
