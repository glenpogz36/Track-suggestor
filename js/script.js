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

    $(function(){
      $("#formOne").submit(function(event) {
        event.preventDefault();
        var tracker = $("input:radio[name=tracker]:checked").val();


    if (tracker === "C") {
       $("#C").show();
      $("#CSS").hide();
       $("#Java").hide();
       $("#PHP").hide();
       $("#Ruby").hide();

    } else if (tracker === "Java") {
      $("#C").hide();
      $("#Java").show();
      $("#PHP").hide();
      $("#Ruby").hide();
      $("#CSS").hide();
    } else if (tracker === "PHP") {
      $("#C").hide();
      $("#Java").hide();
      $("#PHP").show();
      $("#Ruby").show();
      $("#CSS").show();


    }
  });
});
