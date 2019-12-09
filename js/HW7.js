/*Page by Nicholas Campagna
nicholas_campagna@student.uml.edu
I am a student at UMass Lowell, in COMP4610 (or 91.61) GUI Programming 1
File Created November 13th, 2019
This is a javascript file that takes in values from a form, then makes a multiplication table out of them.*/

function buildTable(tableID){
    // x1, x2, y1, y2 all correspond to the form elements in order, found thanks to this page https://www.w3schools.com/jsref/coll_form_elements.asp
    var x1 = document.getElementById("form").elements[0].value;
    var x2 = document.getElementById("form").elements[1].value;
    var y1 = document.getElementById("form").elements[2].value;
    var y2 = document.getElementById("form").elements[3].value;
    // the element that represents the table
    var myTableDiv = document.getElementById("myTable" + tableID);
    // boolean that checks if all numbers are valid (if true, creates table)
    var valid = true;
    // debug, errorHeader and errors are to let the user know which rows in the form aren't valid
    var debug = document.getElementById("debug");
    var errorHeader = "Enter proper numeric values for the following rows above: ";
    var errors = "";
    debug.textContent = errors;
    // Clears the table, prevents multiple tables
    myTableDiv.innerHTML = "";

    // A check for each row, lets the user know which need proper numbers/are erroneous
    if (isNaN(x1) || x1 == "" || x1 > 50 || x1 < -50) {
        errors = " 1";
        valid = false;
    }
    if (isNaN(x2) || x2 == "" || x2 > 50 || x2 < -50) {
        errors += " 2";
        valid = false;
    }
    if (isNaN(y1) || y1 == "" || y1 > 50 || y1 < -50) {
        errors += " 3";
        valid = false;
    }
    if (isNaN(y2) || y2 == "" || y2 > 50 || y2 < -50) {
        errors += " 4";
        valid = false;
    }

    if (!valid) { // If errors, simply change debug string and leave it at that
        debug.textContent = errorHeader + errors;
    } else { // If no error, create the table, based off of this thread: https://stackoverflow.com/questions/14643617/create-table-using-javascript
        // Creates & adds border to table & body
        var table = document.createElement('TABLE');
        table.style.border = "thick solid blue";
        var tableBody = document.createElement('TBODY');
        table.appendChild(tableBody);

        // These cover the silly scenario where a user may enter numbers out of order
        var iMin = Math.min(x1, x2);
        var iMax = Math.max(x1, x2);
        var jMin = Math.min(y1, y2);
        var jMax = Math.max(y1, y2);

        for (var j = jMin; j <= jMax+1; j++) {
            // Creates & adds row to table
            var tr = document.createElement('TR');
            tableBody.appendChild(tr);

            if (j - jMin == 0) { // The top-left corner, nothing should be in here
                var td = document.createElement('TD');
                td.style.width = '75px';
                td.style.border = "1px solid #6666FF";
                td.style.background = "black";
                td.appendChild(document.createTextNode(""));
                tr.appendChild(td);
            } else { // The furthest-left element in a row, this is the leftmost column that shows jMin to jMax
                var td = document.createElement('TD');
                td.style.width = '75px';
                td.style.border = "1px solid #6666FF";
                td.style.background = "black";
                td.appendChild(document.createTextNode(j-1));
                tr.appendChild(td);
            }

            for (var i = iMin; i <= iMax; i++) {
                if (j - jMin == 0) { // The topmost element in a column, reserved for displaying iMin to iMax
                  var td = document.createElement('TD');
                  td.style.width = '75px';
                  td.style.border = "1px solid #6666FF";
                  td.style.background = "black";
                  td.appendChild(document.createTextNode(i));
                  tr.appendChild(td);
                } else { // All the cells for the products of i * j for each row/column
                  var td = document.createElement('TD');
                  td.style.width = '75px';
                  td.style.border = "1px solid #6666FF";
                  td.style.background = "#111166";
                  td.appendChild(document.createTextNode((i*(j-1))));
                  tr.appendChild(td);
                }
            }
        }
        // myTableDiv should be clear by this point due to the .innerHTML = "" above
        myTableDiv.appendChild(table);
    }
}

buildTable();
