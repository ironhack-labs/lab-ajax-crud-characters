// Print character list fetch all
function printListChar(characterList) {
  let container = $('.characters-container');
  container.children().remove(); // Delete all containers with char info

  let content;
  characterList.forEach(character => {
    content = '<div class="character-info">';
    content += `<div class="name">Char ID: <b>${character.id}</b></div>`;
    content += `<div class="name">Name: <b>${character.name}</b></div>`;
    content += `<div class="name">Occupation: <b>${character.occupation}</b></div>`;
    content += `<div class="name">Debt: <b>${character.debt}</b></div>`;
    content += `<div class="name">Weapon: <b>${character.weapon}</b></div>`;
    content += '</div>';
    container.append(content);
  });
}

// Print in edit form when
function printEditForm(data) {
  let $id = $('#chrId').val(data.id);
  let $name = $('#editName').val(data.name);
  let $occupation = $('#editOccupation').val(data.occupation);
  let $weapon = $('#editWeapon').val(data.weapon);
  let $debt = $('#editDebt');

  if ($debt.is(":checked"))
    $debt.attr('checked', 'checked');
  else
    $debt.attr('checked', false);
}

// get data from edit form and control errors
function getEditFormData() {
  let $id = $('#chrId').val();
  let $name = $('#editName').val();
  let $occupation = $('#editOccupation').val();
  let $weapon = $('#editWeapon').val();
  let $debt = $('#editDebt');
  let debVal;

  if ($debt.is(":checked"))
    debVal = true;
  else
    debVal = false;

  if (!$name || !$occupation || !$weapon) {
    return false;
  } else {
    let data = {
      id: $id,
      name: $name,
      occupation: $occupation,
      debt: debVal,
      weapon: $weapon
    };
    // clear inputs an return data
    $id = $('#chrId').val('');
    $name = $('#editName').val('');
    $occupation = $('#editOccupation').val('');
    $weapon = $('#editWeapon').val('');
    $debt.attr('checked', false);

    return data;
  }
}

// get info from new character form
function getNewCharFormData() {
  let $name = $('#newName').val();
  let $occupation = $('#newOccupation').val();
  let $weapon = $('#newWeapon').val();
  let $debt = $('#newDebt');
  let debVal;

  if ($debt.is(":checked"))
    debVal = true;
  else
    debVal = false;

  if (!$name || !$occupation || !$weapon) {
    return false;

  } else {
    let data = {
      name: $name,
      occupation: $occupation,
      debt: debVal,
      weapon: $weapon
    };
    // clear inputs an return data
    $name = $('#newName').val('');
    $occupation = $('#newOccupation').val('');
    $weapon = $('#newWeapon').val('');
    $debt.attr('checked', false);

    return data;
  }
}
