"use strict";
//The script is surrounded by a document.ready method, which guarantees that the DOM has been loaded before any jQuery code is executed.
$(document).ready(() => {
  //$("#faqs h2").click( evt => {
  //  const h2 = evt.currentTarget;
  //$(h2).toggleClass("minus");
  //if ($(h2).attr("class") !== "minus") {
  //  $(h2).next().hide();
  //}
  //else {
  // $(h2).next().show();
  //}
  //evt.preventDefault();
  //});
  // $("#faqs").find("a:first").focus();
  $("#faqs").accordion({
    //selects the element with id 'faqs' and applies the jquery ul accordion method
    hightstyle: "content",
    collapsible: true, // collapsible allow all panel to collapse
  });
});
