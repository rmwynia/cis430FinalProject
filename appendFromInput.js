"use strict;"

function fillTable() {
	
	var table =document.getElementById("conversation");

	var row= table.insertRow(0);

	var cell1 =row.insertCell(0);
	var cell2 =row.insertCell(1);
	var d = new Date();

	//finding out the hours and the minutes 
	var h= d.getHours();
	var s = d.getMinutes();

	var currentTime =h +":"+ s;

	//inserting the user input and the date and the time into the table. 
	cell2.innerHTML = document.getElementById("chatInput").value;
	cell1.innerHTML= currentTime;

	return false;
}

