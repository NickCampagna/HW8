/*Page by Nicholas Campagna
nicholas_campagna@student.uml.edu
I am a student at UMass Lowell, in COMP4610 (or 91.61) GUI Programming 1
File Created November 30th, 2019
This is a jQuery file that validates whether the form elements are correct or not.*/

// This website helped a lot with setting up the form: http://form.guide/jquery/validation-using-jquery-examples.html
$(document).ready(function() {
  $('form[id="form"]').validate({
    rules: {
      x1: {
        required: true, // Required, obviously
        number: true, // MUST be a number
        max: 50, // Was told the range on my program should be limited
        min: -50 // So here's the min & max rules to keep that in check
      },
      x2:{
        required: true,
        number: true,
        max: 50,
        min: -50
      },
      y1:{
        required: true,
        number: true,
        max: 50,
        min: -50
      },
      y2:{
        required: true,
        number: true,
        max: 50,
        min: -50
      }
    },
    messages: {
      x1: '\nMUST ENTER A NUMBER IN RANGE (-50 to 50)',
      x2: 'MUST ENTER A NUMBER IN RANGE (-50 to 50)',
      y1: 'MUST ENTER A NUMBER IN RANGE (-50 to 50)',
      y2: 'MUST ENTER A NUMBER IN RANGE (-50 to 50)'
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});
