const charactersAPI = new APIHandler('http://localhost:8000');

let container = document.querySelector(".characters-container");

window.addEventListener('load', () => {
    document.getElementById('fetch-all').addEventListener('click', async function(event) {
        console.log("fetch");
        displayChars();
    });

    document.getElementById('fetch-one').addEventListener('click', async function(event) {
        try {
            const idInput = document.getElementById("character-id");
            //console.log(idInput.value);
            const jsonChars = await charactersAPI.getOneRegister(idInput.value);
            console.log(jsonChars);
            container.innerHTML = "";

            domAddChar(jsonChars.data);
        } catch (error) {
            console.log(error);
        }
    });

});

document.getElementById('delete-one').addEventListener('click', async function(event) {
    try {
        console.log(event);
        const idInput = document.getElementById("character-id-delete");
        //console.log(idInput.value);
        const jsonChars = await charactersAPI.deleteOneRegister(idInput.value);
        console.log(jsonChars);
        displayChars();
        document.getElementById('delete-one').classList.add("green");
        // setInterval(() => {
        //     document.getElementById('delete-one').classList.remove("green");
        // }, 2000);
    } catch (error) {
        console.log(error);
        document.getElementById('delete-one').classList.add("red");
        // setInterval(() => {
        //     document.getElementById('delete-one').classList.remove("red");
        // }, 2000);
    }
});

document.getElementById('edit-character-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    try {
        const newCharForm = document.getElementById("edit-character-form");
        const inputs = newCharForm.querySelectorAll("input");
        console.log(inputs);
        await charactersAPI.updateOneRegister(inputs[0].value, {
            name: inputs[1].value,
            occupation: inputs[2].value,
            weapon: inputs[3].value,
            cartoon: inputs[4].checked
        });
        displayChars();
        document.getElementById('update-data').classList.add("green");
    } catch (error) {
        console.log(error);
        document.getElementById('update-data').classList.add("red");
    }
});

document.getElementById('new-character-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    try {
        const newCharForm = document.getElementById("new-character-form");
        const inputs = newCharForm.querySelectorAll("input");
        console.log(inputs);
        await charactersAPI.createOneRegister({
            name: inputs[0].value,
            occupation: inputs[1].value,
            weapon: inputs[2].value,
            cartoon: inputs[3].checked
        });

        displayChars();
        document.getElementById('send-data').classList.add("green");
    } catch (error) {
        console.log(error);
        document.getElementById('send-data').classList.add("red");
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
        console.log("toto");
        const jsonChars = await charactersAPI.getFullList();
        console.log(jsonChars);
        container.innerHTML = "";
        jsonChars.data.forEach(char => {
            //console.log(char);
            domAddChar(char);
        });
    } catch (error) {
        console.log(error);
    }
}