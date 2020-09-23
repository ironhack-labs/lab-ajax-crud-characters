const charactersAPI = new APIHandler('http://localhost:8000');

const container = document.querySelector(".characters-container");
const deleteBtn = document.getElementById('delete-one');
const updateBtn = document.getElementById('update-data');
const createBtn = document.getElementById('send-data');
const updateInput = document.getElementById('chr-id');
const idInput = document.getElementById("character-id-delete");

const editCharForm = document.getElementById("edit-character-form");
const editInputs = editCharForm.querySelectorAll("input");

const newCharForm = document.getElementById("new-character-form");
const newInputs = newCharForm.querySelectorAll("input");

window.addEventListener('load', () => {
    document.getElementById('fetch-all').addEventListener('click', async function(event) {
        displayChars();
    });

    document.getElementById('fetch-one').addEventListener('click', async function(event) {
        try {
            const idInput = document.getElementById("character-id");
            const jsonChars = await charactersAPI.getOneRegister(idInput.value);
            console.log(jsonChars);
            container.innerHTML = "";

            domAddChar(jsonChars.data);
        } catch (error) {
            console.log(error);
        }
    });



    document.getElementById('delete-one').addEventListener('click', async function(event) {
        try {
            await charactersAPI.deleteOneRegister(idInput.value);

            displayChars();
            deleteBtn.classList.remove("red");
            deleteBtn.classList.add("green");

        } catch (error) {
            console.log(error);
            deleteBtn.classList.remove("green");
            deleteBtn.classList.add("red");

        }
    });

    document.getElementById('edit-character-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        try {
            await charactersAPI.updateOneRegister(editInputs[0].value, {
                name: editInputs[1].value,
                occupation: editInputs[2].value,
                weapon: editInputs[3].value,
                cartoon: editInputs[4].checked
            });
            displayChars();
            updateBtn.classList.remove("red");
            updateBtn.classList.add("green");
        } catch (error) {
            console.log(error);
            updateBtn.classList.remove("green");
            updateBtn.classList.add("red");
        }
    });

    document.getElementById('new-character-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        try {
            await charactersAPI.createOneRegister({
                name: newInputs[0].value,
                occupation: newInputs[1].value,
                weapon: newInputs[2].value,
                cartoon: newInputs[3].checked
            });

            displayChars();
            createBtn.classList.remove("red");
            createBtn.classList.add("green");
        } catch (error) {
            console.log(error);
            createBtn.classList.remove("green");
            createBtn.classList.add("red");
        }

    });


    updateInput.oninput = async(event) => {
        console.log(event.target.value);
        try {
            const jsonChars = await charactersAPI.getOneRegister(event.target.value);
            console.log(jsonChars);
            editInputs[1].value = jsonChars.data.name;
            editInputs[2].value = jsonChars.data.occupation;
            editInputs[3].value = jsonChars.data.weapon;
            editInputs[4].checked = jsonChars.data.cartoon;
        } catch (error) {
            editInputs[1].value = "error id not defined";
            editInputs[2].value = "error id not defined";
            editInputs[3].value = "error id not defined";
            console.log(error);
        }

    }

});

//function to create a html div with character info
function domAddChar(char) {
    let divParent = document.createElement("div");
    divParent.classList.add("character-info");

    let divChild = document.createElement("div");
    divChild.classList.add("name");
    divChild.textContent = "Character Name: " + char.name;
    divParent.appendChild(divChild);

    divChild = document.createElement("div");
    divChild.classList.add("occupation");
    divChild.textContent = "Character Occupation: " + char.occupation;
    divParent.appendChild(divChild);

    divChild = document.createElement("div");
    divChild.classList.add("cartoon");
    divChild.textContent = "Is a Cartoon? " + char.cartoon;
    divParent.appendChild(divChild);

    divChild = document.createElement("div");
    divChild.classList.add("weapon");
    divChild.textContent = "Character Weapon: " + char.weapon;
    divParent.appendChild(divChild);

    container.appendChild(divParent);
}


//function to display the list of char
async function displayChars() {
    try {
        const jsonChars = await charactersAPI.getFullList();
        container.innerHTML = "";
        jsonChars.data.forEach(char => {
            domAddChar(char);
        });
    } catch (error) {
        console.log(error);
    }
}