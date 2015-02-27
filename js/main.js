var clickMeH1 = document.getElementsByTagName('h1')[0];
var clickNum=0;

clickMeH1.addEventListener ("click", h1Listen);

function h1Listen () {

	clickNum++;

	var clickP = document.createElement("p");
	var	outText ="This is click number " + clickNum;
	var clickText= document.createTextNode(outText);
	
	clickP.appendChild(clickText);

	document.getElementsByTagName('body')[0].appendChild(clickP);


	
}