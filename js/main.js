//Change background of form input/textareas on blur and focus
//gets all input tags and textarea tags
var inputArray = document.getElementsByTagName('input');
var inputText = document.getElementsByTagName('textarea');

//set blur(off focus) and focus event listeners
//for inputs
for (i=0; i < inputArray.length; i++){
	inputArray[i].addEventListener('blur', bgChange);
	inputArray[i].addEventListener('focus', bgChange);
	if (inputArray[i].autofocus ===true){
		inputArray[i].style.backgroundColor="#dddddd";
	}
}

//for textareas
for (i=0; i < inputText.length; i++){
	inputText[i].addEventListener('blur', bgChange);
	inputText[i].addEventListener('focus', bgChange);
	if (inputText[i].autofocus ===true){
		inputText[i].style.backgroundColor="#dddddd";
	}
}

//change bg color on blur(no longer focused) and on focus
function bgChange(){
	var eventInput= event.target;
	console.log (event.type);
	if (event.type =='blur'){
		eventInput.style.backgroundColor="#888888";
		console.log(eventInput);
	} else if (event.type =='focus'){
		eventInput.style.backgroundColor="#dddddd";
		console.log(eventInput);
		
	}

}