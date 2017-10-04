const charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com/characters")

$(document).ready( () => {
	$('#fetch-all').on('click', (e) => {
		charactersAPI.getFullList(displayList);
		
	})

	$('#fetch-one').on('click', (e) => {
		const id = $("#character-id").val();
		//console.log(id);
		charactersAPI.getOneRegister(id, appendCharacter);

	})

	$('#delete-one').on('click', (e) => {
		//TODO $('#delete-one').css('background-color: green');
		const id = $('#character-id-delete').val();
		//console.log(id);
		charactersAPI.deleteOneRegister(id, colorButton);

	})

	$('#edit-character-form').on('submit', (e) => {
		e.preventDefault();
		const id = $('#chr-id').val();
		const data = {
			name: $('#name-edit').val(),
			occupation: $('#occupation-edit').val(),
			debt: $("#debt-edit").is(":checked"),
			weapon: $("#weapon-edit").val(),
		}
		charactersAPI.updateOneRegister(id, data, appendCharacter);

	})

	$('#new-character-form').on('submit', (e) => {
		e.preventDefault();
		const data = {
			name: $('#name-new').val(),
			occupation: $('#occupation-new').val(),
			debt: $("#debt-new").is(":checked"),
			weapon: $("#weapon-new").val(),
		}
		charactersAPI.createOneRegister(data);
		appendCharacter(data);

	})

//addithional functions
function displayList(list){
			//console.log(list);
			list.forEach(appendCharacter);
		}

function appendCharacter(character) {
	const newCharacterHtml = 
	`<div class="character-info">
		<div class="name">${character.name}</div>
		<div class="occupation">${character.occupation}</div>
		<div class="debt">${character.debt}</div>
		<div class="weapon">${character.weapon}</div>
	</div>`;

	$('.characters-container').append(newCharacterHtml);
}

})

function colorButton (color) {
	$(this).css("background-color", color);
}
