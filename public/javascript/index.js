const charactersAPI = new APIHandler("http://localhost:8000");

const containerCharac = document.querySelector(".characters-container");
const buttonDelete = document.querySelector("#delete-one");
const buttonCreate = document.querySelector("#send-data");
const buttonEdit = document.querySelector("#edit-data");

function getInputValue(event) {
  return (inputValue = event.target.previousElementSibling.value);
}
function clearInput(event) {
  event.target.previousElementSibling.value = "";
}

function getFormValues(event) {
  event.preventDefault();
  const name = event.target.querySelector("[name='name']").value;
  const occupation = event.target.querySelector("[name='occupation']").value;
  const weapon = event.target.querySelector("[name='weapon']").value;
  const cartoon = event.target.querySelector("[name='cartoon']").checked;
  return [name, occupation, weapon, cartoon];
}

function clearForm(event) {
  const formInputs = event.target.querySelectorAll("input");
  formInputs.forEach((input) =>
    input.checked ? (input.checked = false) : (input.value = "")
  );
}

function clearContainerCharac() {
  containerCharac.innerHTML = "";
}

function displayCharacter(charac) {
  containerCharac.innerHTML += `
  <div class="character-info">
  <div class="name">Id: <span>${charac.id}</span></div>
  <div class="name">Name: <span>${charac.name}</span></div>
  <div class="occupation">Occupation: <span>${charac.occupation}</span></div>
  <div class="cartoon">Is a Cartoon?: <span>${charac.cartoon}</span></div>
  <div class="weapon">Weapon: <span>${charac.weapon}</span></div>
</div>`;
}

function buttonGreen(button) {
  button.className = "active";
}

function buttonRed(button) {
  button.className = "error";
}

window.addEventListener("load", () => {
  // GET and display all characters (using button "fetch all")

  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getFullList()
        .then((apiRes) => {
          console.log(apiRes.data);
          clearContainerCharac();
          apiRes.data.forEach((charac) => displayCharacter(charac));
        })
        .catch((err) => {
          console.log(err);
        });
    });

  // GET one character (using input and "fetch one" button)

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      charactersAPI
        .getOneRegister(getInputValue(event))
        .then((res) => {
          console.log(res.data);
          clearInput(event);
          clearContainerCharac();
          displayCharacter(res.data);
        })
        .catch((err) => console.log(err));
    });

  // DELETE one character (using ID input and "delete one" button)

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      charactersAPI
        .deleteOneRegister(getInputValue(event))
        .then((res) => {
          console.log("deleted!", res.data);
          clearInput(event);
          buttonGreen(buttonDelete);
        })
        .catch(() => {
          console.log("Character not found")
          buttonRed(buttonDelete);
        });
    });

  // UPDATE a character using the form

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      const id = event.target.querySelector("[name='chr-id']").value;
      charactersAPI
        .updateOneRegister(id, getFormValues(event))
        .then((response) => {
          console.log(response.data);
          clearForm(event);
          buttonGreen(buttonEdit);
        })
        .catch(() => {
          console.log("Character not found")
          buttonRed(buttonEdit);
        });
    });

  // CREATE a new character using the form

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      charactersAPI
        .createOneRegister(getFormValues(event))
        .then((response) => {
          console.log(response.data);
          clearForm(event);
          buttonGreen(buttonCreate);
        })
        .catch((err) => {
          console.log(err);
          buttonRed(buttonCreate);
        });
    });
});
