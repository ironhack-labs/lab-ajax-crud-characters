const charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com/");

$(document).ready(() => {

	document.getElementById('fetch-all').onclick = function() {
		charactersAPI.getFullList()
			.then((res) => {
				display(res.data);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	document.getElementById('fetch-one').onclick = function() {
		const charId = document.getElementsByName("character-id")[0].value;
		if (charId) {
			charactersAPI.getOneRegister(charId)
				.then((res) => {
					display([res.data ]);
				})
				.catch((error) => {
					console.log(error.message);
				});
		}
	};

	document.getElementById('delete-one').onclick = function() {
    const charId = document.getElementsByName("character-id-delete")[0].value;

    charactersAPI
      .deleteOneRegister(charId)
      .then(res => {
        document.getElementsByName("character-id-delete")[0].value = "";
      })
      .catch((error) => {
      console.log(error.message);
        
      });
}

	document.getElementById('edit-character-form').onsubmit = function() {};

	document.getElementById('new-character-form').onsubmit = function() {};
  const formElements = document.getElementById("new-character-form");
  const name = formElements.elements["name"].value;
  // console.log(name)
  const occupation = formElements.elements["occupation"].value
  const weapon = formElements.elements["weapon"].value;
  const carto = formElements.elements["cartoon"].checked;
 
  charactersAPI.createOneRegister({name,occupation,weapon,carto})
  .then(res=>{
    form.reset();
  })
  .catch((error) => {
    console.log(error.message);
  });

});

const display = (characters) => {
	const container = $('.characters-container');
	container.html("");
	characters.forEach((char) => {
		const charCont = $("<div></div>").addClass("character-info");
    const id = $("<div></div>").addClass("id").html(`Id: <span>${char.id}</span>`);
    const name = $("<div></div>").addClass("name").html(`Name: <span>${char.name}</span>`);
    const occupation = $("<div></div>").addClass("occupation").html(`Occupation: <span>${char.occupation}</span>`);
    const cartoon = $("<div></div>").addClass("cartoon").html(`Is a Cartoon?: <span>${char.debt}</span>`);
    const weapon = $("<div></div>").addClass("weapon").html(`Weapon: <span>${char.weapon}</span>`);
    
		charCont.append(id, name, occupation, cartoon, weapon);
		container.append(charCont);
	});
};