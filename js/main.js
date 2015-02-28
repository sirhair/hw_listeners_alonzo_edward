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
	if ((event.target.id != 'formsub') && (event.target.id !='resetForm') && (event.target.id !='eraseForm')){
		console.log(event.target.id);
		if (event.type =='blur'){
			eventInput.style.backgroundColor="#888888";
			console.log(eventInput);
		} else if (event.type =='focus'){
			eventInput.style.backgroundColor="#dddddd";
			console.log(eventInput);
			
		}
	}else if((event.target.id =='resetForm') || (event.target.id =='eraseForm')){
		// Brighten but not darken reset and erase buttons
		if (event.type =='blur'){
			eventInput.style.backgroundColor="#aaaaaa";
			console.log(eventInput);
		} else if (event.type =='focus'){
			eventInput.style.backgroundColor="#dddddd";
			console.log(eventInput);
			
		}
	} else if (event.target.id == 'formsub'){
		//brighten submit button and return to original color
		if (event.type =='blur'){
			eventInput.style.backgroundColor="#c894fc";
			console.log(eventInput);
		} else if (event.type =='focus'){
			eventInput.style.backgroundColor="#e9b5ff";
			console.log(eventInput);
			
		}
	}
}

//erase form js, when erase button is clicked, erase the form from DOM
//sets erase click listener
document.getElementById('eraseForm').addEventListener('click', eraseFunction);

//erase form and replace with rr.com
function eraseFunction(){
	var eventInput= event.target;
	eventInput.parentNode.innerHTML='<iframe src="https://www.youtube.com/embed/8qnQz8kxte0?start=18&autoplay=1" frameborder="0" allowfullscreen></iframe>';
}