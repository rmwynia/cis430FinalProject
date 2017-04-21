/*
 * index.js
 * Put your JavaScript in here
 */

"use strict;"

var bodyNode;		// body node in the DOM tree to set the background color
var buttonNode;		// listen for clicks (web) and touches (mobile)
var shakeNode;		// if mobiel, show user shaking is an option
var labelNode;		// the element in the DOM we will set to "rgb(10,23,45);"

/* wait until all phonegap/cordova is loaded then call onDeviceReady */
function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);

	bodyNode 			= document.getElementById('bodyElement');
	buttonNode			= document.getElementById('buttonElement');
	shakeNode			= document.getElementById('shakeElement');
	rgbNode 			= document.getElementById('rgbElement');

	buttonNode.onclick 	= changeColor; // for browser mouse clicks

	changeColor();	
}

function onDeviceReady(){

	// on webapp, shake will be undefined, but it will be on mobile...
	// https://github.com/leecrossley/cordova-plugin-shake
	// place <plugin name="cordova-plugin-shake"/> in config.xml

	if (typeof shake !== 'undefined') {
		// watch for device shaking, if we hit the unit threshold, call onShake
		shakeNode.innerHTML = "or you can shake me!"
		shake.startWatch(onShake, 10, onShakeError);
	}
}

var onShake = function() {
	//alert("onShake event");
	changeColor();
}

var onShakeError = function() {
	alert("onShakeError occurred");
}

function changeColor() {
	var r = randomColorComponent();
	var g = randomColorComponent();
	var b = randomColorComponent();

	var rgbString = "rgb(" + r + "," + g + "," + b + ")";

	rgbNode.innerHTML = rgbString;
	bodyNode.style.backgroundColor = rgbString;
}

function randomColorComponent() {
	return Math.floor(Math.random() * 256); //make a random int from 0 - 255
}
