"use strict";
//The script is surrounded by a document.ready method, which guarantees that the DOM has been loaded before any jQuery code is executed.
$(document).ready(() => { 
  $("#faqs").accordion({
    //selects the element with id 'faqs' and applies the jquery ul accordion method
    hightstyle: "content",
    collapsible: true, // collapsible allow all panel to collapse
  });
});
