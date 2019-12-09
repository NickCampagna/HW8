/*Page by Nicholas Campagna
nicholas_campagna@student.uml.edu
I am a student at UMass Lowell, in COMP4610 (or 91.61) GUI Programming 1
File Created December 8th, 2019
This is a jQuery file that handles the tabs, their creation and deletions.*/

// Used this template for reference https://jqueryui.com/tabs/#manipulation
$( function() {
    var tabs = $("#myTabs").tabs();
    var counter = 2; // Counter, diff ID for each tab & table
    var tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>";

    function addTab() { // The function that creates the tab itself, and adds in the table
      var label = "Tab " + counter,
        id = "tabs-" + counter,
        tableID = "myTable" + counter,
        li = $( tabTemplate.replace( /#\{href\}/g, "#" + id ).replace( /#\{label\}/g, label ) ), tabContentHtml = "<div id=" + tableID + "></div>" || "Tab " + counter + " content.";

      tabs.find( ".ui-tabs-nav" ).append( li );
      tabs.append( "<div id='" + id + "'><p>" + tabContentHtml + "</p></div>" );
      tabs.tabs( "refresh" );
      buildTable(counter);
      counter++;
    }

    // AddTab button, creates a tab with a new table
    $( "#add_tab" )
      .button()
      .on( "click", function() {
        addTab();
      });

    // Close icon: removing the tab on click
    tabs.on( "click", "span.ui-icon-close", function() {
      var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
      $( "#" + panelId ).remove();
      tabs.tabs( "refresh" );
    });

    tabs.on( "keyup", function( event ) {
      if ( event.altKey && event.keyCode === $.ui.keyCode.BACKSPACE ) {
        var panelId = tabs.find( ".ui-tabs-active" ).remove().attr( "aria-controls" );
        $( "#" + panelId ).remove();
        tabs.tabs( "refresh" );
      }
    });
  } );
