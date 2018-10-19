$(document).ready(function() {
$("#infos").submit(function(event)  {
event.preventDefault()
  var name = $("input#nameInput").val();
  var email = $("input#emailInput").val();
  var address = $("input#addressInput").val();

    $(".firstname").text(firstnameInput);
    $(".lastname").text(lastnameInput);
    $(".address").text(addressInput);

  });
});
