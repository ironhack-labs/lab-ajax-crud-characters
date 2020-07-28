--Modificar el DOM

1. En APIHandler.js elimino todos los then y catchs.

2. En Index.js
   2.1. Creo una variable characterContainer para hacer querySelector donde irán los fetchs.

   2.2. GetFullList:
   2.2.1. Invoco a la función.
   2.2.2. Con la promesa, vacío el innerhtml del contenedor.
   2.2.3. Itero sobre la respuesta y en cada iteración:
   2.2.3.1. Creo un nuevo Div y a ese Div le agrego un innerHTML con la información de cada iteración.
   2.2.4. Añado ese div al contenedor con append child.

   2.3. getOneRegister(id):
   2.3.1. Guardo el input del campo ID del index.html en una variable.
   2.3.2. Invoco la función con el parámetro que acabo de capturar.
   2.3.3. Con la promesa, vacío el innterhtml del contenedor.
   2.3.4. Guardo el response.data en una variable.
   2.2.4.1. Creo un nuevo div y le añado un innerhtml con la información del fetch individual
   2.2.4.2. Añado ese div al contenedor con append child.

   2.4. deleteOneRegister(id)
   2.4.1. Guardo el input del campo ID del index.html en una variable.
   2.4.2. Invoco la función con el parámetro que acabo de capturar.

   2.5. updateOneRegister(id, updatedCharacter)
   2.5.1 Guardo el input del campo ID del index.html en una variable.
   2.5.2. Guardo el input de los campos del form en variables.
   2.5.3. Creo un objeto para guardar toda esa información.
   2.5.4. Invoco la función pasando el ID para seleccionarlo y la info para actualizar.

   2.6. createOneRegister(newCharaxcter)
   2.6.1. Guardo el input de los campos del form en variables.
   2.6.2. Creo un objeto para guardar toda esa información.
   2.6.3. Invoco la función pasando el nuevo objeto para crearlo en la API.
