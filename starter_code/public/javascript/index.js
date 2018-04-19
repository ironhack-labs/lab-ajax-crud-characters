const charactersAPI = new APIHandler('http://localhost:8000');

$(document).ready(() => {
	charactersAPI.getOneRegister(id)
		.then(data => {
			reset();
			let container = $("<div class='character-info'>");
			let name = `<div class="name">Character Name: ${data.name}</div>`;
			let occupation = `<div class="occupation">Character Occupation: ${
				data.occupation
				}</div>`;
			let cartoon = `<div class="cartoon">Is a Cartoon? ${data.cartoon}</div>`;
			let weapon = `<div class="weapon">Character Weapon: ${data.weapon}</div>`;
			container.append(name);
			container.append(occupation);
			container.append(cartoon);
			container.append(weapon);
			$(".characters-container").append(container);
		});
});

document.getElementById("fetch-one").onclick = function () {
	let id = $("#character-id").val();

	charactersAPI.getOneRegister(id)
		.then(data => {
			reset();
			let container = $("<div class='character-info'>");
			let name = `<div class="name">Character Name: ${data.name}</div>`;
			let occupation = `<div class="occupation">Character Occupation: ${
				data.occupation
				}</div>`;
			let cartoon = `<div class="cartoon">Is a Cartoon? ${data.cartoon}</div>`;
			let weapon = `<div class="weapon">Character Weapon: ${data.weapon}</div>`;
			container.append(name);
			container.append(occupation);
			container.append(cartoon);
			container.append(weapon);
			$(".characters-container").append(container);
		});
};

document.getElementById("delete-one").onclick = function () {
	let deleteButton = $("#delete-one");
	let id = $("#character-id-delete").val();

	charactersAPI.deleteOneRegister(id)
		.then(() => {
			reset();
			deleteButton.css("background", "green");
		})
		.catch(() => {
			deleteButton.css("background", "red");
		})
};

	document.getElementById('edit-character-form').onsubmit = function() {};

document.getElementById("new-character-form").onsubmit = function () {
	let createButton = $("#create-data");

	let name = $("input[name='name']").val();
	let occupation = $("input[name='occupation']").val();
	let weapon = $("input[name='weapon']").val();
	let cartoon = document.getElementById("new-cartoon").checked;

	charactersAPI.createOneRegister({ name, occupation, weapon, cartoon })
		.then(() => createButton.css("background", "green"))
		.catch(() => createButton.css("background", "red"));
};


