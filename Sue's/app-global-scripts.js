// Code goes here

// when the document (page) has finished loading, do the following ...
$(document).ready(function () {
  
  // target each menu list item and do the following ...
  $('div.navbar-nav a').each(function (index, liElement) {
    
    // grab a handle on the actual list item element for easy manipulation
    var $el = $(liElement);
    
    // then, every time a user clicks it
    $el.click(function () {
      
      // make all menu links inactive (see below for this function's implementation)
      SetAllMenuLinksToInactive();
      
      // make the element active by adding the "active" class to it
      $el.addClass('active');
      
    }); // end of $el.click()
    
  }); // end of $('div.navbar-nav a').each()
  
}); // end of $(document).ready()

// function to be run when all menu links need to become inactive
function SetAllMenuLinksToInactive() {
  
  // target each menu list item and do the following ...
  $('div.navbar-nav a').each(function () {
    
    // remove the "active" CSS class from the element's "class" attribute
    $(this).removeClass('active');
    
  }); // end of $('div.navbar-nav a').each()
  
} // end of function SetAllMenuLinksToInactive() {

function toggleTable(){
  var myTable = document.getElementById("posts");
  myTable.style.display = (myTable.style.display == "table") ? "none" : "table";
}

function number(){
  alert("Please call me on 01223556767. Thank you!!!");
}










