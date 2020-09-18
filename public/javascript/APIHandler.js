const charContainer = document.getElementsByClassName(
  "characters-container"
)[0];
const charInfo = document.getElementsByClassName("character-info")[0];
const deleteBtn = document.getElementById('delete-one')
const createBtn = document.getElementById('send-data')
const editBtn = document.getElementById('send-data-edit')

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(this.BASE_URL + "/characters")
      .then((response) => {
       // console.log(response.data);
       // console.log(response.data[0].name);
        charInfo.classList.add("hidden");
        for (let i = 0; i < response.data.length; i++) {
          console.log(i);
          dataOnPage(response.data[i]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getOneRegister(id) {
    axios
      .get(this.BASE_URL + `/characters/${id}`)
      .then((response) => {
      //  console.log(id);
       // console.log(response.data);
        charInfo.classList.add("hidden");
        dataOnPage(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    axios
      .post(this.BASE_URL + "/characters", {
        name,
        occupation,
        weapon,
        cartoon,
      })
      .then((data) => {
       // console.log(data);
        createBtn.classList.add('active')
      })
      .catch(err => {
        console.log(err)
        createBtn.classList.add('red')
      })
  }

  updateOneRegister(id, name, occupation, weapon, cartoon) {
    axios
      .put(this.BASE_URL + `/characters/${id}`, {
        name,
        occupation,
        weapon,
        cartoon,
      })
      .then((data) => {
       // console.log(data.data);
        editBtn.classList.add('active')
      })
      .catch((err) => {
        console.log(err);
        editBtn.classList.add('red')
      });
  }

  deleteOneRegister(id) {
    axios
      .delete(this.BASE_URL + `/characters/${id}`)
      .then((data) => {
        deleteBtn.classList.add('active')
       // console.log(data.data);
      })
      .catch((err) => {
        deleteBtn.classList.add('red')
        console.log(err);
      });
  }
}

function dataOnPage(resVar) {
  const charDescription = document.createElement("ul");
  const charIdDesc = document.createElement("li");
  charIdDesc.innerHTML = "Id: ";
  const charNameDescr = document.createElement("li");
  charNameDescr.innerHTML = "Character Name: ";
  const charOccupationDescr = document.createElement("li");
  charOccupationDescr.innerHTML = "Character Occupation: ";
  const charISCartoonDescr = document.createElement("li");
  charISCartoonDescr.innerHTML = "Is a Cartoon?: ";
  const charWeaponDescr = document.createElement("li");
  charWeaponDescr.innerHTML = "Character Weapon: ";
  charContainer.appendChild(charDescription);
  charDescription.append(
    charIdDesc,
    charNameDescr,
    charOccupationDescr,
    charISCartoonDescr,
    charWeaponDescr
  );

  const charCharacter = document.createElement("ul");
  const charId = document.createElement("li");
  charId.innerHTML = `${resVar.id}`;
  const charName = document.createElement("li");
  charName.innerHTML = `${resVar.name}`;
  const charOccupation = document.createElement("li");
  charOccupation.innerHTML = `${resVar.occupation}`;
  const charISCartoon = document.createElement("li");
  charISCartoon.innerHTML = `${resVar.cartoon}`;
  const charWeapon = document.createElement("li");
  charWeapon.innerHTML = `${resVar.weapon}`;
  charContainer.appendChild(charDescription);
  charContainer.appendChild(charCharacter);
  charCharacter.append(
    charId,
    charName,
    charOccupation,
    charISCartoon,
    charWeapon
  );
}

