const charactersAPI = new APIHandler("http://localhost:8000");

document.getElementById("fetch-all").onclick = function() {
  charactersAPI
    .getFullList()
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
document.getElementById("fetch-one").onclick = function() {
  const input = document.getElementById("charactId");
  const id = input.value;
  console.log(id);
  charactersAPI
    .getOneRegister(id)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

document.getElementById("delete-one").onclick = function() {};
$;
document.getElementById("edit-character-form").onsubmit = function() {};

document.getElementById("new-character-form").onsubmit = function() {};
