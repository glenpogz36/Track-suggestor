$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var name = $("input#name").val();
    $(".name").text(name);
    $("#letter1").show();
  });
});
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var address = $("input#address").val();
    $(".address").text(address);
        $("#letter2").show();
      });
    });

    $(function(){
      $("#formOne").submit(function(event) {
        event.preventDefault();
        var questionare = $("input:radio[name=company]:checked").val();



    if (questionare === "Microsoft") {
       $("#C").show();
      $("#CSS").hide();
       $("#Java").hide();
       $("#PHP").hide();
       $("#Ruby").hide();

    } else if (questionare === "Android" &&    questionare != "Microsoft" || questionare != "Facebook") {
      $("#C").hide();
      $("#Java").show();
      $("#PHP").hide();
      $("#Ruby").hide();
      $("#CSS").hide();
    } else {
      $("#C").hide();
      $("#Java").hide();
      $("#PHP").show();
      $("#Ruby").show();
      $("#CSS").show();


    }
  });
});
