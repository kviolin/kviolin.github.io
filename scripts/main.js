var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/google.png'){
		myImage.setAttribute('src','images/firefox.png');
	}else{
		myImage.setAttribute('src','images/google.png');
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'My First Web Doc,' + myName;
	
}
if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'My First Web Doc,' + storedName;
}
muButton.onclick = function(){
	setUserName();
}