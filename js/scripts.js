$(document).ready(function(){
  $("form#mad-lib-form").submit(function(event){
    event.preventDefault();

    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun2", "input7", "input8", "input9"];

    blanks.forEach(function(blank){
      var inputFromUser = $("input#" + blank).val();
      $("." + blank).text(inputFromUser);
      debugger;
    });



    // var userinput1 = $("input#input1").val();
    // var userinput2 = $("input#input2").val();
    // var userinput3 = $("input#input3").val();
    // var userinput4 = $("input#input4").val();
    // var userinput5 = $("input#input5").val();
    // var userinput6 = $("input#input6").val();
    // var userinput7 = $("input#input7").val();
    // var userinput8 = $("input#input8").val();
    // var userinput9 = $("input#input9").val();
    //
    // $(".output1").text(userinput1);
    // $(".output2").text(userinput2);
    // $(".output3").text(userinput3);
    // $(".output4").text(userinput4);
    // $(".output5").text(userinput5);
    // $(".output6").text(userinput6);
    // $(".output7").text(userinput7);
    // $(".output8").text(userinput8);
    // $(".output9").text(userinput9);

     $(".mad-lib-story").show();
    // $("#mad-lib-form").hide();
  });
});
