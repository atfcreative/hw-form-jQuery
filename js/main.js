// Submit
  console.log('Hello');

  $(document).ready(function() {
 
  $('#submit').submit(function(e) {
    preventDefault();
    //prevents default submission
    e.preventDefault();

    $(".error").remove();

    var fullName = $('#name').val();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var subject = $('#textarea').val();

    // for (i = 0; i < e.length; i++)
    //  console.log('form submitted');
    if (fullName.length < 1) {
      $('#name').append('<p class="error">This field is required</p>');
    }
    if (email.length < 1) {
      $('#email').append('<p class="error">This field is required</p>');
    if (textarea.length < 1) {
      $('#textarea').append('<p class="error">This field is required</p>');
    } else {

      var checkPattern = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var validEmail = checkPattern.test(email);

      if (!validEmail) {
        $('#email').append('<p class="error">Enter a valid email</p>');
      }
      if (!validEmail) {
        $('#email').append('<p class="error">Enter a valid email</p>');
      }
    

          
    }
  });
 
});


// $(document).ready(function () {

//   $('.contact').on('submit', function (evt) {
//     evt.preventDefault();

//     // Code for validating the form
//     $('form input, form textarea').each(function() {
//       // Cache $(this) to optimize code a bit.
//       var $currentField = $(this);
//       var fieldType = $(this).attr('type');

//       if ( $currentField.val() === '' ) {
//         $currentField.addClass('error');
//         $currentField.siblings('.error-message').fadeIn();
//         // After adding error styles, move on to the next field and skip the next steps for that input/textarea
//         return;
//       }

//       if (fieldType === 'email') {
//         var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         var isValidEmailAddress = re.test($currentField.val());
//         if (!isValidEmailAddress) {
//           $currentField.addClass('error');
//           $currentField.siblings('.error-message').text('Please enter a valid email address.').fadeIn();
//           // After adding error styles, move on to the next field and skip the next steps for that input/textarea
//           return;
//         }

//       } 

//       // Since we used return above, the below code will only run if the field has input and, if it is an email field, has a valid email address.
//       $currentField.removeClass('error');
//       $currentField.siblings('.error-message').hide();

//     })
// };





