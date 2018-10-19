$(document).ready(function() {
$("#infos").submit(function(event)  {
event.preventDefault()
  var name = $("input#nameInput").val();
  var email = $("input#emailInput").val();
  var address = $("input#addressInput").val();
  var interest = $("input#interestInput").val();

    $("name").text(firstnameInput);
    $("email").text(emailInput);
    $("Adress").text(addressInput);
      $("interest").text(interestInput);

      if(name === email && address === intrest) {
     $("#c").show();
     $("Java").hide();
     $("PHP").hide();
     $("Ruby").hide();
     S("CSS").hide();

   }
 });
 });
