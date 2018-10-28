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
        var company = $("input:radio[name=company]:checked").val();



    if (company === "Microsoft") {
       $("#C").show();
      $("#CSS").hide();
       $("#Java").hide();
       $("#PHP").hide();
       $("#Ruby").hide();

    } else if (company === "Android" && company != "Microsoft" || company != "Facebook") {
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



$(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var enjoy = $("input:radio[name=enjoy]:checked").val();



if (enjoy === "software") {
   $("#C").show();
  $("#CSS").hide();
   $("#Java").hide();
   $("#PHP").hide();
   $("#Ruby").show();

} else if (enjoy === "interface" && enjoy != "software" || enjoy != "Frameworks") {
  $("#C").hide();
  $("#Java").show();
  $("#PHP").hide();
  $("#Ruby").show();
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

$(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var visual = $("input:radio[name=learner]:checked").val();



if (visual === "Visual") {
   $("#C").show();
  $("#CSS").hide();
   $("#Java").hide();
   $("#PHP").show();
   $("#Ruby").hide();

} else if (visual === "Audiotory" && visual != "Visual" || visual != "Kinestetic") {
  $("#C").hide();
  $("#Java").show();
  $("#PHP").show();
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
