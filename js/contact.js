$(document).ready(function () {
  function IsEmail(email) {
    //input validation
    let emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    if (!emailPattern.test(email)) {
      return false;
    } else {
      return true;
    }
  }
  $("#submit").on("click", function () {
    //all form inputs
    let fname = document.forms["contact_form"]["f_name"].value;
    let lname = document.forms["contact_form"]["l_name"].value;
    let email = document.forms["contact_form"]["email"].value;
    //below code is responsible for validate form input.
    $(".error").remove();
    //to remove any existing error message.
    if (fname == null || fname == "") {
      $("#f_name").after('<span class="error">This is required field</span>');
      return false;
    } else if (lname == null || lname == "") {
      $("#l_name").after('<span class="error">This is required field</span>');
      return false;
    } else if (email == null || email == "") {
      $("#email").after('<span class="error">This is required field</span>');
      return false;
    } else if (IsEmail(email) == false) {
      $("#email").after(
        '<span class="error">Must Be A Valid Email Address.</span>'
      );
      return false;
    }
  });
}); // end ready
