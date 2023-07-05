const input = document.querySelector('input');
const result = document.querySelector('.result');



input.addEventListener('keyup', (event) => {
	if(event.key == 'Enter') {
		addItem(input.value);
		console.log(input.value)
		input.value = '';
	}
	
});

let addItem = (input) => {
	let listItem = document.createElement('li');
	listItem.innerHTML = `${input}<i></i>`;

	listItem.addEventListener('click', () => {
		listItem.classList.toggle('done');
	});

	listItem.querySelector('i').addEventListener('click', () => {
		listItem.remove();
	});

	result.appendChild(listItem);
} 
