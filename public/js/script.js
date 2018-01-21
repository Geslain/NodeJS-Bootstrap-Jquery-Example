$(document).ready(function(){

 $(".commentary-form").submit(function () {
     let commentary = $(".commentary-form-textarea textarea").val();

     let htmlCommentary = $("<li class='commentary'>");
     let htmlCommentaryHeader = $("<div class='commentary-header'>");
     let htmlCommentaryBody = $("<div class='commentary-body'>");

     htmlCommentaryHeader = htmlCommentaryHeader.append("<img src='/images/anonymous.jpg' width='50px'><span class='pseudo'>Anonymous</span>");
     htmlCommentaryBody = htmlCommentaryBody.append(commentary);

     htmlCommentary = htmlCommentary.append(htmlCommentaryHeader).append(htmlCommentaryBody);

     $(".commentary-list").append(htmlCommentary);
     return false;
 });

 //$(".commentary-form button")
 //$(".commentary-form button.submit")
 //$("#submit")
 //$("button[name='submit']")

});