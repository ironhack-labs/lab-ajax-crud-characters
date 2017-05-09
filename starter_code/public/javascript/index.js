/*jshint esversion: 6*/

const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    let id = $("input[name='character-id']").val();
    charactersAPI.getOneRegister(id);
  });

  $('#delete-one').on('click', (e) => {
    let id = $("input[name='character-id-delete']").val();
    charactersAPI.deleteOneRegister(id);
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    let id = $("#edit-character-form [name='chr-id']").val();
    const nameEd = $("#edit-character-form [name='name']").val();
    const occupationEd = $("#edit-character-form [name='occupation']").val();
    const weaponEd = $("#edit-character-form [name='weapon']").val();
    const debtEd = $("#edit-character-form [name='debt']").prop("checked");

    charactersAPI.updateOneRegister(id, nameEd, occupationEd, weaponEd, debtEd);

  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    const name = $("#new-character-form [name='name']").val();
    const occupation = $("#new-character-form [name='occupation']").val();
    const weapon = $("#new-character-form [name='weapon']").val();
    const debt = $("#new-character-form [name='debt']").prop("checked");

    charactersAPI.createOneRegister(name, occupation, weapon, debt);
  });
});
