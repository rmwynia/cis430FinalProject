/*
 * index.js
 * Put your JavaScript in here
 */

"use strict;"

/*===========================*/
/* put global variables here */
/*===========================*/
var groupNameElem;
var startDateElem;
var endDateElem;
var membersElem;

var groupNameSetting;
var startDateSetting;
var endDateSetting;
var membersSetting;


/* wait until all phonegap/cordova is loaded then call onDeviceReady*/
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
	alert("onDeviceReady() fired");
	groupNameElem   = document.getElementById('groupNameInput');
    startDateElem = document.getElementById('startDateInput');    
    endDateElem = document.getElementById('endDateInput');
    membersElem = document.getElementById('membersInput');

    loadSettings();
}

/*====================*/
/* put functions here */
/*====================*/

function loadSettings() {
    groupNameElem.value   = localStorage.groupNameSetting   || 'demo Group';
    startDateElem.value = localStorage.startDateSetting || '2001-01-01';
    endDateElem.value = localStorage.endDateSetting || '2001-01-01';
    membersElem.value = localStorage.membersSetting || 'jake';
}

function clearSettings() {
    localStorage.clear(); /* deletes all local storage elements */
    loadSettings();
}

function saveSettings() {
    localStorage.groupNameSetting   = groupNameElem.value;  
    localStorage.startDateSetting = startDateElem.value;
    localStorage.endDateSetting = endDateElem.value;
    localStorage.membersSetting = membersElem.value;
}