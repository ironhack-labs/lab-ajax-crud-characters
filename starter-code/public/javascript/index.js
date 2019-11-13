const charactersAPI = new APIHandler("http://localhost:8000");

function plug(char) {
  return (temp = `<div class="character-info">
  <div class="name"> Name: ${char.name}</div>
  <div class="occupation"> Job: ${char.occupation}</div>
  <div class="cartoon"> Cartoon: ${char.cartoon}</div>
  <div class="weapon">Weapon: ${char.weapon}</div>
</div>`);
}

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function(event) {
      event.preventDefault();
      charactersAPI
        .getFullList()
        .then(apiRes => {
          const characters = apiRes.data;
          let tpl = "";
          characters.forEach(character => {
            tpl += plug(character);
          });
          const container = document.querySelector(".characters-container");
          container.innerHTML = tpl;
        })
        .catch(err => console.log(err));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function(event) {
      event.preventDefault();
      const id = document.getElementById("container-id").value;

      console.log(id);
      charactersAPI
        .getOneRegister(id)
        .then(apiRes => {
          const container = document.querySelector(".characters-container");
          container.innerHTML = plug(apiRes.data);
        })
        .catch(e => console.log(e));
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function(event) {
      event.preventDefault();
      const id = document.getElementById("container-delete-id").value;
      const btnDelete = document.getElementById("delete-one");
      console.log(id);
      charactersAPI
        .deleteOneRegister(id)
        .then(
          btnDelete.classList.add("green")
          //TO TEST
          //     document
          // .getElementById("fetch-all")
          // .addEventListener("click", function(event) {
          //   charactersAPI
          //     .getFullList()
          //     .then(apiRes => {
          //       const characters = apiRes.data;
          //       let tpl = "";
          //       characters.forEach(character => {
          //         tpl += plug(character);
          //       });
          //       const container = document.querySelector(".characters-container");
          //       container.innerHTML = tpl;
          //     })
          //     .catch(err => console.log(err));
          // });
        )
        .catch(err => {
          console.log(err);
          btnDelete.classList.add("red");
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      //const btnCreate=document.getElementById("send-data")
      const idT = document.getElementById("edit-id").value;

      const name = {
        dom: document.getElementById("edit-name").value,
        str: "name"
      };
      const occupation = {
        dom: document.getElementById("edit-occupation").value,
        str: "occupation"
      };
      const cartoon = {
        dom: document.getElementById("edit-cartoon").checked,
        str: "cartoon"
      };
      const weapon = {
        dom: document.getElementById("edit-weapon").value,
        str: "weapon"
      };

      function findValue(element) {
        if (element.dom === "") {
          charactersAPI.getOneRegister(idT).then(apiRes => {
            return apiRes.data.element.str;
          });
        } else {
          return element.dom;
        }
      }
      chara = {
        name: findValue(name),
        occupation: findValue(occupation),
        cartoon: cartoon.dom,
        weapon: findValue(weapon)
      };

      charactersAPI
        .updateOneRegister(idT, chara)
        .then()
        .catch(e => console.log(e));
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      const btnCreate = document.getElementById("send-data");
      const nameT = document.getElementById("name").value;
      const occupationT = document.getElementById("occupation").value;
      const cartoonT = document.getElementById("cartoon").check;
      const weaponT = document.getElementById("weapon").value;

      const chara = {
        name: nameT,
        occupation: occupationT,
        cartoon: cartoonT,
        weapon: weaponT
      };
      charactersAPI
        .createOneRegister(chara)
        .then(btnCreate.classList.add("green"))
        .catch(err => {
          console.log(err);
          btnCreate.classList.add("red");
        });
    });
});
