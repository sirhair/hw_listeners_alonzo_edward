var inputArray = document.getElementsByTagName('input');

for (i=0; i < inputArray.length; i++){
	inputArray[i].addEventListener('blur', bgChange);
}

function bgChange(){
	var blurredInput= event.target;
	blurredInput.style.backgroundColor="#888888";
	console.log(blurredInput);
}