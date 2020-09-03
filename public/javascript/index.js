const charAp = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
    //primer metodo de la clase
    document.getElementById("fetch-all").addEventListener("click", function(event) {
        charAp.getFullList()
            .then((characters) => {
                let char = "";
                characters.data.forEach((character) => {
                    char += `<div class="character-info">
        <div class="name">ID: ${character.id}</div>
        <div class="name"> Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Cartoon?: ${character.cartoon}</div>
        <div class="weapon"> Weapon: ${character.weapon}</div>
      </div>`;
                });
                //agregar al DOM
                document.querySelector(
                    ".characters-container"
                ).innerHTML = char;
            });
    });
    // SEGUNDO METODO DE LA CLASE
    document.getElementById("fetch-one").addEventListener("click", function(event) {
        charAp.getOneRegister(document.querySelector("input[name=character-id]").value)
            .then((character) => {
                const { id, name, occupation, cartoon, weapon } = character.data;
                document.querySelector(".characters-container").innerHTML = `<div class="character-info">
        <div class="name">Name: ${name}</div>
        <div class="occupation">Occupation: ${occupation}</div>
        <div class="cartoon">Cartoon?: ${cartoon}</div>
        <div class="weapon">Weapon: ${weapon}</div>
      </div>`;
            });
    });

    //tercer metodo


    document.getElementById("new-character-form").addEventListener("submit", function(event) {
        //Dany´s insight
        event.preventDefault();
        const name = document.querySelector("#new-character-form input[name=name]").value;
        const occupation = document.querySelector("#new-character-form input[name=occupation]").value;
        const weapon = document.querySelector("#new-character-form input[name=weapon]").value;
        const cartoon = document.querySelector("#new-character-form input[name=cartoon]").checked;

        const newCharacterInfo = {
            name,
            occupation,
            weapon,
            cartoon,
        };
        charAp.createOneRegister(newCharacterInfo);
    });
});
// cuarto metodo de la clase
document.getElementById("edit-character-form").addEventListener("submit", function(event) {
    //Dany´s insight
    event.preventDefault();

    const id = document.querySelector("#edit-character-form input[name=chr-id]").value;
    const name = document.querySelector("#edit-character-form input[name=name]").value;
    const occupation = document.querySelector("#edit-character-form input[name=occupation]").value;
    const weapon = document.querySelector("#edit-character-form input[name=weapon]").value;
    const cartoon = document.querySelector("#edit-character-form input[name=cartoon]").checked;

    const editedCharacterInfo = {
        id,
        name,
        occupation,
        weapon,
        cartoon,
    };

    charAp.updateOneRegister(id, editedCharacterInfo);
});

// quinto metodo de la clase 
document.getElementById("delete-one").addEventListener("click", function(event) {
    charAp.deleteOneRegister(document.querySelector("input[name=character-id-delete]").value);
});