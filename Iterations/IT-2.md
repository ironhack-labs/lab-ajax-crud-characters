--Probar las funciones de la clase constructora.

En APIHandler se ha creado una clase constructora que tiene unas funciones.
En index.js se crea una nueva instancia de esa clase constructora bajo el nombre "charactersAPI".

1. Dentro del constructor, invoco a la función "axios.create" dentro de "this.axiosApi"

2. En getFullList (para devolver toda la lista) le hacemos un get de la URL donde se muestran todos los personajes
   2.1. Con la promesa, la devolvemos
   2.2. En index.js, invocamos la función dentro del window.addEventListener de fetch-all

3. En getOneRegister (para devolver uno) le paso el parámetro ID a la función.
   2.1. Utilizo un get con el id interpolado
   2.2. Con la promesa la devolvemos.
   2.3. En index.js, invocamos la función con un ID hardcoded como parámetro.

4. En createOneRegister le paso un parámetro "newCharacter" para testear que funcione.
   4.1. Utilizo el método post que acepta el primer parámetro de URL y el segundo del objeto.
   4.2. Devuelvo la promesa.
   4.3. En index.js, creo el objeto e invoco la función.

5. En deleteOneRegister (devolver) le paso el parámetro ID a la función para encontrarla en la DB.
   5.1. Utilizo el método delete que acepta la URL con el ID dinámico a eliminar.
   5.2. Devuelvo la promesa.
   5.3. En index.js, invoco la función con un ID hardcoded para testear.

6. En updateOneRegister (editar) le paso un parámrtro ID a la función para encontrar el ID en la DB.
   6.1. Utilizo el método patch y le paso la URL con el ID dinámico. Edita la DB
   6.2. Devuelvo la promesa.
