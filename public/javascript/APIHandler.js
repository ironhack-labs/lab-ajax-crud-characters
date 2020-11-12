class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(baseURL).then(({
      data
    }) => {
      printChars(data)
    })
  }

  getOneRegister() {

  }

  createOneRegister() {

  }

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}

function printChars(arr) {
  $charList.innerHTML = ""
  arr.forEach(element => {
    $charList.innerHTML += `
      <div class='col-12'>
        <div class="card text-white bg-success mb-3">
          <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">
            weapon: ${element.weapon}
            <br/>
            occupation: ${element.occupation}
            </p>
          </div>
          <div class="card-body">
            <button
              class="card-link btn btn-danger"
              onclick="deleteElement(${element.id})">
                Delete
            </button>
          </div>
        </div>
      </div>
    `
  })
