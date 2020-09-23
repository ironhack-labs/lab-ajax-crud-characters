const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
    document.getElementById('fetch-all').addEventListener('click', async function(event) {
        try {
            const jsonChars = await charactersAPI.getFullList();
            console.log(jsonChars);
            let container = document.querySelector(".characters-container");
            container.innerHTML = "";
            jsonChars.data.forEach(char => {
                console.log(char);

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
            });
        } catch (error) {
            console.log(error);
        }
    });

    document.getElementById('fetch-one').addEventListener('click', function(event) {

    });

    document.getElementById('delete-one').addEventListener('click', function(event) {

    });

    document.getElementById('edit-character-form').addEventListener('submit', function(event) {

    });

    document.getElementById('new-character-form').addEventListener('submit', function(event) {

    });
});