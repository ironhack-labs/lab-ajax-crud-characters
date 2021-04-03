const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    //evento do botão que pega todos os personagens para atualizar a listagem no html
    .addEventListener("click", async function (event) {
      //tem que colocar o async porque a função getfulllist é uma promise
      /* console.log("FETCH ALL"); */ //pra saber que quando clicamos nesse botão, conseguimos chamá-lo no f12
      const allCharacters = await charactersAPI.getFullList(); //para saber se o botão vai chamar todos os personagens
      /* console.log(allCharacters); */
      updateCharactersContainer(allCharacters);
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      const idInput = document.getElementById("character-id");
      //pega somente um personagem
      //altero o HTML pra poder pegar
      const idInputValue = idInput.value; //capturando o input //o número que digitar na pesquisa pra fetch one tem que aparecer no console
      /* console.log(idInputValue); */
      const character = await charactersAPI.getOneRegister(idInputValue); //retorna um único personagem como objeto
      const charactersArray = [];

      if (Object.keys(character).length !== 0) {
        charactersArray.push(character);
      }
      updateCharactersContainer(charactersArray);
      idInput.value = "";
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async function (event) {
      //precisa limpar o formulário
      const idInput = document.getElementById("character-id-delete");
      const idInputValue = idInput.value; //capturando o input
      await charactersAPI.deleteOneRegister(idInputValue); //deletar o personagem
      //quando deleto faz sendo ele sumir da lista:
      const allCharacters = await charactersAPI.getFullList(); //pegar a lista atualizada de personagens

      updateCharactersContainer(allCharacters); //atualizar a listagem no DOM

      idInput.value = "";
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      //submit é evento de formulário e tem comportamento diferente. Sempre que o formulário submete alguma coisa, a página atualiza. Temos que impedir esse comportamento default
      event.preventDefault(); //impedir que atualize

      const form = document.getElementById("edit-character-form");
      const formElements = form.elements;

      //para saber o que estou pegando. Vai aparecer no console todos os inputs quando colocamos dados no edit character

      /* console.log(formElements); */
      const idValue = formElements[0].value;
      const nameValue = formElements[1].value;
      const occupationValue = formElements[2].value;
      const weaponValue = formElements[3].value;
      const cartoonValue = formElements[4].checked; //por ser checkbox podemos usar a propriedade checked

      const updateCharacterObject = {
        name: nameValue,
        occupation: occupationValue,
        weapon: weaponValue,
        cartoon: cartoonValue,
      };

      /*       console.log(
        idValue,
        nameValue,
        occupationValue,
        weaponValue,
        cartoonValue
      ); //ver se vamos conseguir pegar */

      await charactersAPI.updateOneRegister(updateCharacterObject, idValue);
      //até aqui, se a genet atualizar, no browser não acontece nada mas no banco acontece. Então temos que atualizar a lista
      const allCharacters = await charactersAPI.getFullList();
      updateCharactersContainer(allCharacters);
      form.reset();
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const form = document.getElementById("new-character-form");
      const formElements = form.elements;

      const nameValue = formElements[0].value;
      const occupationValue = formElements[1].value;
      const weaponValue = formElements[2].value;
      const cartoonValue = formElements[3].checked;

      const newCharacterObject = {
        name: nameValue,
        occupation: occupationValue,
        weapon: weaponValue,
        cartoon: cartoonValue,
      };

      await charactersAPI.createOneRegister(newCharacterObject);
      const allCharacters = await charactersAPI.getFullList();
      updateCharactersContainer(allCharacters);
      form.reset();
    });
});

function updateCharactersContainer(charactersArray) {
  const charactersContainer = document.querySelector(
    ".characters-container" //captura a div que tem todos os personagens
  );
  //agora quero apagar todo o html que tem dentro desse container
  charactersContainer.innerHTML = "";

  if (charactersArray.length === 0) {
    charactersContainer.innerHTML = "<h1>Nenhum personagem encontrado</h1>";
    return;
  }

  charactersArray.forEach((character) => {
    //cada personagem é um objeto
    charactersContainer.innerHTML += `
    <div class="character-info">
      <div class="name">Character Name: ${character.name}</div>
      <div class="occupation">Character Occupation: ${
        character.occupation
      }</div>
      <div class="cartoon">Is a Cartoon? ${
        character.cartoon ? "Yes" : "No"
      }</div>
      <div class="weapon">Character Weapon: ${character.weapon}</div>
    </div>
    `;
  });
}
