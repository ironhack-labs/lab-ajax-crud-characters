const charactersAPI = new APIHandler("http://localhost:8000/characters");
const fetchOneId = document.querySelector(".operations .operation:nth-child(2) > input");
const deleteId = document.querySelector(".delete > input");
const updateId = document.querySelector("#edit-character-form > .field:nth-child(1) > input");
const updateName = document.querySelector("#edit-character-form > .field:nth-child(2) > input");
const updateOccupation = document.querySelector("#edit-character-form > .field:nth-child(3) > input");
const updateWeapon = document.querySelector("#edit-character-form > .field:nth-child(4) > input");
const updateCartoon = document.querySelector("#edit-character-form > .field:nth-child(5) > input");

const createName = document.querySelector("#new-character-form > .field:nth-child(1) > input");
const createOccupation = document.querySelector("#new-character-form > .field:nth-child(2) > input");
const createWeapon = document.querySelector("#new-character-form > .field:nth-child(3) > input");
const createCartoon = document.querySelector("#new-character-form > .field:nth-child(4) > input");

const divCharacters = document.querySelector(".characters-container");

$(document).ready(() => {
	document.getElementById("fetch-all").onclick = function(e) {
		e.preventDefault();
		charactersAPI
			.getFullList()
			.then(({ data }) => {
				showCharacters(data);
			})
			.catch(err => { 
        console.log(err)
        e.target.style.backgroundColor = 'red'
      });
	};

	document.getElementById("fetch-one").onclick = function(e) {
		e.preventDefault();
		if (!fetchOneId.value) return;
		charactersAPI
			.getOneRegister(fetchOneId.value)
			.then(({ data }) => {
        fetchOneId.value = "";
        showCharacters([data]);
			})
			.catch(err => { 
        console.log(err)
        e.target.style.backgroundColor = 'red'
      });
	};

	document.getElementById("delete-one").onclick = function(e) {
		e.preventDefault();
		if (!deleteId.value) return;
		charactersAPI
			.deleteOneRegister(deleteId.value)
			.then(({ data }) => {
				deleteId.value = "";
			})
			.catch(err => { 
        console.log(err)
        e.target.style.backgroundColor = 'red'
      });
	};

	document.getElementById("edit-character-form").onsubmit = function(e) {
		e.preventDefault();
		if (!updateId.value) return;
		const charUpdated = {
			name: updateName.value,
			occupation: updateOccupation.value,
			weapon: updateWeapon.value,
			cartoon: updateCartoon.checked
		};
		charactersAPI
			.updateOneRegister(updateId.value, charUpdated)
			.then(({ data }) => {
				console.log("Update one: ", data);
				document.getElementById("edit-character-form").reset();
			})
			.catch(err => { 
        console.log(err)
        document.querySelector("#edit-character-form > button").style.backgroundColor = 'red'
      });
	};

	document.getElementById("new-character-form").onsubmit = function(e) {
		e.preventDefault();
		const newChar = {
			name: createName.value,
			occupation: createOccupation.value,
			weapon: createWeapon.value,
			cartoon: createCartoon.checked
		};
		charactersAPI
			.createOneRegister(newChar)
			.then(({ data }) => {
				console.log("Create one: ", data);
				document.getElementById("new-character-form").reset();
			})
			.catch(err => { 
        console.log(err)
        document.querySelector("#new-character-form > button").style.backgroundColor = 'red'
      });
	};
});

function showCharacters(charsToShow) {
	cleanCharacters();
	charsToShow.forEach(item => {
		const newDiv = document.createElement("div");
		newDiv.classList.add("character-info");
		newDiv.innerHTML = `<div class="id">Id:<span>${item.id}</span></div>
    <div class="name">Name:<span>${item.name}</span></div>
    <div class="occupation">Occupation:<span>${item.occupation}</span></div>
    <div class="cartoon">Is a Cartoon?<span>${item.cartoon}</span></div>
    <div class="weapon">Weapon:<span>${item.weapon}</span></div>
    `;
		divCharacters.appendChild(newDiv);
	});
}

function cleanCharacters() {
	let child = divCharacters.lastElementChild;
	while (child) {
		divCharacters.removeChild(child);
		child = divCharacters.lastElementChild;
	}
}
