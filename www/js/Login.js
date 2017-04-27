/**
 * Login.js
 */
 
"use strict"



var myUsernameElem;
var mypasswordElem;

var mysqlUsernameSetting;
var mysqlPasswordSetting;


document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

	alert("onDeviceReady!!");
	
    myUsernameElem  = document.getElementById('usernameInputid');
    myPasswordElem  = document.getElementById('pwordInputid');    
    loadSettings();

    
	
}

function loadSettings() {
    myUsernameElem.value  = localStorage.mysqlUsernameSetting || 'mbrandt2';
    myPasswordElem.value  = localStorage.mysqlPasswordSetting || 'codingKids';
    
}


function getPword(id){
		return (document.getElementById("pwordInputid").value); 
	}
function getUsername(id){
		return (document.getElementById("usernameInputid").value);
		
	}


	
function test(){
	console.log(password) // sends values to console for data validation
	console.log(username)
}
	
	

		MySql.Execute(
			"dmazzola.com",					// mySQL server
			"mbrandt2", 						// login name
			"mbra1200", 					// login password
			"test_db_mbrandt2", 			// database to use
											// SQL query string
			"SELECT 											\
				* 												\
			 FROM 												\
				SafetyPin 										\
			 													\
															 	\
			 													\
			 LIMIT 10;",

		function processQueryResult(queryReturned) {
    		if (!queryReturned.Success) {
    			alert(queryReturned.Error)
    		} else {
    			

    			for (var i =0; i < queryReturned.Result.length; i++) {

					var str = JSON.stringify(queryReturned.Result[i].username, null, 2);
    				console.log(str);
    				var str2 = JSON.stringify(queryReturned.Result[i].password, null, 2);
    				console.log(str2);
    				var n = str.includes(username);
    				var y = str2.includes(password);
    				
    				  					
    				
    				console.log(n); 
    				console.log(y);

    				
					if (n == true && y == true)
					{
						alert("It worked!")
					}
					else {
						console.log("it didnt work");
					}


    				
    			}
    		}
    	}
    	
	    );