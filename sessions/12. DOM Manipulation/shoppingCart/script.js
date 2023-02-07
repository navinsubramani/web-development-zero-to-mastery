var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));

	var delete_button = document.createElement("button");
	delete_button.setAttribute('class', 'del_item')
	delete_button.appendChild(document.createTextNode('Delete'))
	li.appendChild(delete_button)

	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


function toggleListItem(event) {
	node = event.target

	if (node.nodeName === 'LI') {
		console.log(node.classList)
		node.classList.toggle('done')
	}

	else if (node.nodeName === 'BUTTON') {
		ul.removeChild(node.parentElement)
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener('click', toggleListItem)
