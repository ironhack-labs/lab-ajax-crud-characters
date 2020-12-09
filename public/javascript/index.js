const charactersAPI = new APIHandler("http://localhost:8000");

const charactersContainer = document.querySelector(".characters-container");

//Show all characters
function showEachChar(data) {
    const characterInfo = document.createElement("div");
    characterInfo.innerHTML += `
        <div class="character-info"> 
            <div class="id">Id <span>${data.id}</span></div>
            <div class="name">Name <span>${data.name}</span></div>
            <div class="occupation">Occupation <span>${data.occupation}</span></div>
            <div class="cartoon">Is a Cartoon? <span>${data.cartoon}</span></div>
            <div class="weapon">Weapon <span>${data.weapon}</span></div>
        </div>
  `;
    return charactersContainer.appendChild(characterInfo);
}
//reset background color of buttons
function resetColorButton() {
    document.getElementById("delete-one").style.backgroundColor = "initial";
    document.getElementById("send-data").style.backgroundColor = "initial";
    document.getElementById("send-data-edit").style.backgroundColor = "initial";
}

window.addEventListener("load", () => {
    document.getElementById("fetch-all").addEventListener("click", async function (event) {
        resetColorButton();

        try {
            const data = await charactersAPI.getFullList();
            charactersContainer.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
                showEachChar(data[i]);
            }
        } catch (err) {
            console.log(err);
        }
    });
});

document.getElementById("fetch-one").addEventListener("click", async function (event) {
    //reset color of delete/create button
    document.getElementById("delete-one").style.backgroundColor = "initial";
    document.getElementById("send-data").style.backgroundColor = "initial";
    document.getElementById("send-data-edit").style.backgroundColor = "initial";
    try {
        const id = document.querySelector(".operation input").value;

        const data = await charactersAPI.getOneRegister(id);

        charactersContainer.innerHTML = "";

        if (data == "id not found") {
            charactersContainer.innerHTML += `<h1>Character with id ${id} not found</h1>`;
        } else {
            charactersContainer.appendChild(showEachChar(data));
        }
    } catch (err) {
        console.log(err);
    }
});

document.getElementById("delete-one").addEventListener("click", async function (event) {
    resetColorButton();

    const idDelete = document.querySelector(".operation.delete input").value;
    try {
        const deleteEvent = await charactersAPI.deleteOneRegister(idDelete);
        if (deleteEvent == "Character not found") {
            document.getElementById("delete-one").style.backgroundColor = "red";
        } else {
            document.getElementById("delete-one").style.backgroundColor = "green";
        }
    } catch (err) {
        console.log(err);
    }
});

document.getElementById("edit-character-form").addEventListener("submit", async function (event) {
    resetColorButton();

    event.preventDefault();
    // get values from create form
    const idCharacter = document.querySelector(`#edit-character-form input[name="chr-id"]`).value;
    const getName = document.querySelector(`#edit-character-form input[name="name"]`).value;
    const getOccupation = document.querySelector(`#edit-character-form input[name="occupation"]`)
        .value;
    const getWeapon = document.querySelector(`#edit-character-form input[name="weapon"]`).value;
    const getCartoon = document.querySelector(`#edit-character-form input[name="cartoon"]`).checked;

    const editObject = {
        name: getName,
        occupation: getOccupation,
        weapon: getWeapon,
        cartoon: getCartoon,
    };

    try {
        const editCharacter = await charactersAPI.updateOneRegister(idCharacter, editObject);

        if (editCharacter === "add id") {
            document.getElementById("send-data-edit").style.backgroundColor = "red";
        } else {
            document.getElementById("send-data-edit").style.backgroundColor = "green";
        }
        console.log({ editCharacter });
    } catch (err) {
        console.log(err);
    }
});

document.getElementById("new-character-form").addEventListener("submit", async function (event) {
    resetColorButton();

    event.preventDefault();
    //get values from create form
    const getName = document.querySelector(`#new-character-form input[name="name"]`).value;
    const getOccupation = document.querySelector(`#new-character-form input[name="occupation"]`)
        .value;
    const getWeapon = document.querySelector(`#new-character-form input[name="weapon"]`).value;
    const getCartoon = document.querySelector(`#new-character-form input[name="cartoon"]`).checked;

    const createdObject = {
        name: getName,
        occupation: getOccupation,
        weapon: getWeapon,
        cartoon: getCartoon,
    };

    try {
        const newCharacter = await charactersAPI.createOneRegister(createdObject);
        if (newCharacter == "fill all the fields") {
            document.getElementById("send-data").style.backgroundColor = "red";
        } else {
            charactersContainer.innerHTML = "";
            showEachChar(newCharacter);
            document.getElementById("send-data").style.backgroundColor = "green";
        }
    } catch (err) {
        console.log(err);
    }
});
