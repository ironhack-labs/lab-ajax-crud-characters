# DE | jQuery AJAX CRUD Exercise

## Learning Goals

After this learning unit, you will be able to:

- Create a complete [SPA (Single Page Application)](https://en.wikipedia.org/wiki/Single-page_application)
- Create, Read, Update, and Delete data from a API
- Use AJAX to connect with an external API

## Introduction

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_268cb08540318365df8717153cacce98.png)

In this lesson, we will use all what we have learnt about APIs and how to connect an application to them through AJAX.

We will create an application to Create, Read, Update, and Delete characters from the following [Ironhack API](http://ih-crud-api.herokuapp.com/). The routes available in this API are the following:

- **Verb:** GET, **Route:** "/characters"
  - It receives NO parameters
  - It returns the full characters list
  - It returns JSON
- **Verb:** GET, **Route:** "/characters/:id"
  - It receives the character ID as a parameter (route)
  - It returns the character with the indicated id
  - It returns JSON
- **Verb:** POST, **Route:** "/characters"
  - It receives an object as a parameter, with the following format:
    `{ name: string, occupation: string, debt: boolean, weapon: string }`
  - It returns the created character if there are no errors
  - It returns the wrong fields if there is some error
  - It returns JSON
- **Verb:** PATCH/PUT, **Route:** "/characters/:id"
  - It receives the character id as a parameter (route)
  - It receives an object as a parameter, with the following format:
    `{ name: string, occupation: string, debt: boolean, weapon: string }`
  - All the fields are optionals
  - It returns the updated character if there are no errors
  - It returns "Character not found" if there is no character with the indicated id
  - It returns JSON / text
- **Verb:** DELETE, **Route:** "/characters/:id"
  - It receives the character id as a parameter (route)
  - It returns "Character has been successfully deleted" if there are no errors
  - It returns "Character not found" if there is no character with the indicated id
  - It returns text

### Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`

## Submission

Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request indicate your campus, name, and last name separated by a dash "-".

## Deliverables
In your starter code folder you will find every file you need to finish the game. Push every needed file to make your game work properly.

## Exercise

### Iteration 1: The `APIHandler.js` file

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_99257e2c4240770e6b4bdd406d943ac8.png)

We will construct a class `APIHandler` to deal with the AJAX calls. The only responsability of this class is to display the JSON result that comes from the API, or give the needed information to the API via a function argument.

The funcionalities of the `APIHandler` class are:

- Get all the characters info from *[http://ih-crud-api.herokuapp.com/characters](http://http://ih-crud-api.herokuapp.com/characters)*
- Get a single character info from *[http://ih-crud-api.herokuapp.com/characters/:id](http://http://ih-crud-api.herokuapp.com/characters/:id)*
- Create a single character posting the data to *[http://ih-crud-api.herokuapp.com/characters](http://http://ih-crud-api.herokuapp.com/characters)*
- Delete a single character through his id in *[http://ih-crud-api.herokuapp.com/characters/:id](http://http://ih-crud-api.herokuapp.com/characters/:id)*
- Edit a single character through his id in *[http://ih-crud-api.herokuapp.com/characters/:id](http://http://ih-crud-api.herokuapp.com/characters/:id)*

You have to create an AJAX call for each of these actions. You can create as many functions as you need inside the class, but remember this class should only manage the API request and display the resulting value.

<!-- :::success -->
**Micro-advice**

To make sure everything is working, use [POSTMAN](https://www.getpostman.com/). Remember the routes available and the parameters needed, both in the route and through params.
<!-- ::: -->

In this iteration, it's enough to show results in the console.

### Iteration 2: The `index.js` file

Once we have the results served by the API in the application, we will create the events that will handle with the CRUD operations.

#### Fetch all characters

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_52efceece943970abb7482ca8165392c.png)

Retrieve all the available characters in the API and show them in the application. In order to do that, we need to:

- Create a button (*Fetch all* in the image above) that calls a function in the `APIHandler`.
- The function will return a JSON object with all the characters.
- Get the data and show the characters. Finally, with javascript or jQuery, we will create a structure similar to a card (image above) to show every detail of each character.

#### Fetch one character

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_18418549c37049ae48b7a9ef21805042.png)

Following the same idea as with fetching all, retreive a single character's data we need to:

- Create a button (*Fetch one* in the image above) to, through an input field, get the id of an existing character.
- Search that character in the API with *[http://ih-crud-api.herokuapp.com/characters/:id](http://http://ih-crud-api.herokuapp.com/characters/:id)*
- Get the data and show the character info as a card.

#### Delete one character

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_3d893f20f95e5b13369375cdfd7900a5.png)

To be able to delete a character from the API database, we need to:

- Create a button (*Delete* one in the image above) to get the id of the character we want to delete.
- Delete that character in the API with *[http://ih-crud-api.herokuapp.com/characters/:id](http://http://ih-crud-api.herokuapp.com/characters/:id)*
   <!-- :::danger -->
   **Remember which HTTP verb you need in the request!!**
   <!-- ::: -->
- If the character is succesfully removed, change the background color of the button to green.
- If something went wrong, change the background color of the button to red.

#### Create new character

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_ef2b19fb59819e903a4978d9fa616a6f.png)

We will create a form with 4 inputs, one for each character field: name(text), occupation(text), weapon(text) and debt(checkbox).

- Create a button (*Create* in the image above) to get all the data from the form.
- Send the data to the `APIHandler` function to save the new character through *[http://ih-crud-api.herokuapp.com/characters](http://http://ih-crud-api.herokuapp.com/characters)*
   <!-- :::danger -->
   **Remember which HTTP verb you need in the request!!**
   <!-- ::: -->
- If the character was succesfully created, set the background color of the button to green.
- If something went wrong, change the background color of the button to red.

#### Edit a character

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_04664fce88ae40d1f0045a8c9cb4956e.png)

We will create a form with 4 inputs, one for each field of the characters: name(text), occupation(text), weapon(text) and debt(checkbox). Also, we will create a new input to indicate the `id` of the character we want to edit.

- Create a button (*Update* in the image above) to get all the data from the form.
- Send the data to the `APIHandler` function to save the new character through *[http://ih-crud-api.herokuapp.com/characters/:id](http://http://ih-crud-api.herokuapp.com/characters/:id)*
   <!-- :::danger -->
   **Remember which HTTP verb you need in the request!!**
   <!-- ::: -->
- If the character was succesfully updated, set the background color of the button to green.
- If something went wrong, change the background color of the button to red.

That's all what we need to do!

/Happy coding
