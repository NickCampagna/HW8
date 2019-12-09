/*Page by Nicholas Campagna
nicholas_campagna@student.uml.edu
I am a student at UMass Lowell, in COMP4610 (or 91.61) GUI Programming 1
File Created December 8th, 2019
This is a jQuery file that handles the sliders and forms two-way binding between
said sliders and the input boxes they belong to.*/

// This topic helped with the two-way binding between the input box and the sliders
// https://stackoverflow.com/questions/7523864/ui-slider-with-text-box-input
jQuery(function() {
  $( "#x1Slider" ).slider({
    min: -50,
    max: 50,
    value: 0,
    slide: function( event, ui ) { // Changes the input boxes when slider changes
        $( "input[name='x1']" ).val( ui.value );
        buildTable(0);
      }
    });
    $("input[name='x1']").change(function () { // Changes slider when input box val changes
      var value = this.value;
      $("#x1Slider").slider("value", parseInt(value));
      buildTable(0);
  });

  $( "#x2Slider" ).slider({
    min: -50,
    max: 50,
    value: 0,
    slide: function( event, ui ) {
        $( "input[name='x2']" ).val( ui.value );
        buildTable(0);
      }
    });
    $("input[name='x2']").change(function () {
      var value = this.value;
      $("#x2Slider").slider("value", parseInt(value));
      buildTable(0);
  });

  $( "#y1Slider" ).slider({
    min: -50,
    max: 50,
    value: 0,
    slide: function( event, ui ) {
        $( "input[name='y1']" ).val( ui.value );
        buildTable(0);
      }
    });
    $("input[name='y1']").change(function () {
      var value = this.value;
      $("#y1Slider").slider("value", parseInt(value));
      buildTable(0);
  });

  $( "#y2Slider" ).slider({
    min: -50,
    max: 50,
    value: 0,
    slide: function( event, ui ) {
        $( "input[name='y2']" ).val( ui.value );
        buildTable(0);
      }
    });
    $("input[name='y2']").change(function () {
      var value = this.value;
      $("#y2Slider").slider("value", parseInt(value));
      buildTable(0);
  });
});
