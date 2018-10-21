$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#name").val();
    $(".name").text(person1Input);
    $("#letter").show();

    event.preventDefault();
  });
});
