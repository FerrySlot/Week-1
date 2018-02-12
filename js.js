
var blueding = document.getElementsByClassName('blue');
var redding = document.getElementsByClassName("red");
var greending = document.getElementsByClassName("green");
var yellowding = document.getElementsByClassName("yellow");

console.log(blueding + redding + greending + yellowding);

document.getElementById("showall").addEventListener("click", showAllimages);

function showAllimages() 
{	
	for (var i = 0; i < 3; i++) 
	{
	    blueding[i].classList.remove("hidden");
	    redding[i].classList.remove("hidden");
	    greending[i].classList.remove("hidden");
	    yellowding[i].classList.remove("hidden");
	    document.getElementById("bluebutton").classList.add("activebutton");
	    document.getElementById("redbutton").classList.add("activebutton");
	    document.getElementById("greenbutton").classList.add("activebutton");
	    document.getElementById("yellowbutton").classList.add("activebutton");
	}
}

function showImages(button) 
{	
	console.log("showImages runt");

	switch(button)
	{
		case 1: 
			console.log("switch case blue");
			for (var i = 0; i < 3; i++) 
			{
			    blueding[i].classList.toggle("hidden");
			    document.getElementById("bluebutton").classList.toggle("activebutton");
			}
		break;

		case 2:
			console.log("switch case red");
			for (var i = 0; i < 3; i++) 
			{
			    redding[i].classList.toggle("hidden");
			    document.getElementById("redbutton").classList.toggle("activebutton");
			}
		break;

		case 3:
			console.log("switch case green");
			for (var i = 0; i < 3; i++) 
			{
			    greending[i].classList.toggle("hidden");
			    document.getElementById("greenbutton").classList.toggle("activebutton");
			}
		break;

		case 4:
			console.log("switch case yellow");
			for (var i = 0; i < 3; i++) 
			{
			    yellowding[i].classList.toggle("hidden");
			    document.getElementById("yellowbutton").classList.toggle("activebutton");
			}
		break;

	}
	/*
	for (var i = 0; i < 3; i++) 
	{
	    blueding[i].classList.remove("hidden");
	    redding[i].classList.remove("hidden");
	    greending[i].classList.remove("hidden");
	    yellowding[i].classList.remove("hidden");
	}
	*/
}

/*
document.getElementById("bluebutton").addEventListener("click", showBlueimages);

function showBlueimages() 
{	
	for (var i = 0; i < 3; i++) 
	{
	    blueding[i].classList.remove("hidden");
	    redding[i].classList.add("hidden");
	    greending[i].classList.add("hidden");
	    yellowding[i].classList.add("hidden");
	}
}
*//*
document.getElementById("redbutton").addEventListener("click", showRedimages);

function showRedimages() 
{	
	for (var i = 0; i < 3; i++) 
	{
	    blueding[i].classList.add("hidden");
	    redding[i].classList.remove("hidden");
	    greending[i].classList.add("hidden");
	    yellowding[i].classList.add("hidden");
	}
}

document.getElementById("greenbutton").addEventListener("click", showGreenimages);

function showGreenimages() 
{	
	for (var i = 0; i < 3; i++) 
	{
	    blueding[i].classList.add("hidden");
	    redding[i].classList.add("hidden");
	    greending[i].classList.remove("hidden");
	    yellowding[i].classList.add("hidden");
	}
}

document.getElementById("yellowbutton").addEventListener("click", showYellowimages);

function showYellowimages() 
{	
	for (var i = 0; i < 3; i++) 
	{
	    blueding[i].classList.add("hidden");
	    redding[i].classList.add("hidden");
	    greending[i].classList.add("hidden");
	    yellowding[i].classList.remove("hidden");
	}
}
*/
