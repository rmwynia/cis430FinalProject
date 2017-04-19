/**
 * SparkyVsWilbur.js
 */
 
"use strict"

var usernameInput 	= "";

function initialize() {
	alert("In initialize(): Web App Loaded!");
	

	
}


function clearInputs(form) {
	var formElements = form.elements;
	for (var i=0; i< formElements.length; i++)
		formElements[i].value="";
}

function loadDefaults(form) {
	form.reset();
}

function getValue(id) {
	return (document.getElementById(id).value);
}

function runComparison(form) {
	if (!form.checkValidity()) {
		alert("See highlighted input boxes, there are input errors");
	} else {
		usernameInput   		= getValue('usernameInputid');
		
		/* Wilburs calculations */

	} // end of else
} // end of runComparison()


/*  function clearResultsTable(table)
 *  given a table, remove all rows except the heading
 *  table.rows returns a list of the rows.
 *  table.rows.length returns the number of rows
 *  If a table has 9 rows, row(0) is the header, row(8) is last
 *  deleteRow(index) from the last to all but the (0)
 */
function clearResultsTable(table) {

	for (var i = table.rows.length; i > 1; i--) {
		table.deleteRow(i-1);
	}
}