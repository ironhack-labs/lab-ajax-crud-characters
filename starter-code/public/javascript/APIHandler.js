class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(this.BASE_URL)
      .then(response => {
        let charactersContainer = document.getElementsByClassName(
          "characters-container"
        )[0];
        charactersContainer.innerHTML = "";

        response.data.forEach(element => {
          let table = document.createElement("table");
          table.classList.add("character-info");

          var ele;
          for (ele in element) {
            let tdKey = document.createElement("td");
            tdKey.innerText = ele;
            let tdValue = document.createElement("td");
            tdValue.setAttribute("style", "color: #d8b362;");

            tdValue.innerText = element[ele];

            let tr = document.createElement("tr");
            tr.appendChild(tdKey);
            tr.appendChild(tdValue);

            table.appendChild(tr);
          }

          charactersContainer.appendChild(table);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getOneRegister() {
    let characterId = document.getElementsByName("character-id")[0].value;

    axios
      .get(`${this.BASE_URL}/${characterId}`)
      .then(response => {
        let charactersContainer = document.getElementsByClassName(
          "characters-container"
        )[0];
        charactersContainer.innerHTML = "";

        let table = document.createElement("table");
        table.classList.add("character-info");

        let data = response.data;

        var ele;
        for (ele in data) {
          let tdKey = document.createElement("td");
          tdKey.innerText = ele;
          let tdValue = document.createElement("td");
          tdValue.setAttribute("style", "color: #d8b362;");

          tdValue.innerText = data[ele];

          let tr = document.createElement("tr");
          tr.appendChild(tdKey);
          tr.appendChild(tdValue);

          table.appendChild(tr);
        }

        charactersContainer.appendChild(table);
      })
      .catch(err => {
        console.log(err);
      });
  }

  createOneRegister() {
    let createBtn = document.getElementById("send-data");

    //post
    let name = document.getElementsByName("name")[0].value;
    let occupation = document.getElementsByName("occupation")[0].value;
    let weapon = document.getElementsByName("weapon")[0].value;
    let isCartoon = document.getElementsByName("cartoon")[0].checked;

    axios
      .post(this.BASE_URL, {
        name,
        occupation,
        weapon,
        isCartoon
      })
      .then(response => {
        console.log(response.data);

        createBtn.setAttribute("style", "color: green;");
      })
      .catch(err => {
        console.log(err);

        createBtn.setAttribute("style", "color: red;");
      });
  }

  updateOneRegister() {
    //put
    let inputs = document.querySelectorAll("#edit-character-form input");
    let btn = document.querySelectorAll("#edit-character-form button");
    let editBtn = btn[0];

    let characterUpdateId = inputs[0].value;
    let name = inputs[1].value;
    let occupation = inputs[2].value;
    let weapon = inputs[3].value;
    let isCartoon = inputs[4].checked;

    axios
      .put(`${this.BASE_URL}/${characterUpdateId}`, {
        name,
        occupation,
        weapon,
        isCartoon
      })
      .then(response => {
        console.log(response.data);

        editBtn.setAttribute("style", "color: green;");
      })
      .catch(err => {
        console.log(err);

        editBtn.setAttribute("style", "color: red;");
      });
  }

  deleteOneRegister() {
    let characterDeleteId = document.getElementsByName("character-id-delete")[0]
      .value;
    let deleteBtn = document.getElementById("delete-one");

    axios
      .delete(`${this.BASE_URL}/${characterDeleteId}`)
      .then(response => {
        console.log(response.data);

        deleteBtn.setAttribute("style", "color: green;");
      })
      .catch(err => {
        console.log(err);
        deleteBtn.setAttribute("style", "color: red;");
      });
  }
}
