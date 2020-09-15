![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Axios CRUD exercise

## Introduction

![image](https://user-images.githubusercontent.com/23629340/36733655-8c9903fa-1bd1-11e8-82f7-d425ab140c09.png)

In this exercise, we will use all what we have learned about APIs and how to connect an application to them through **Axios**.

## Requirements

- Fork this repo
- Then clone this repo

## Submission

- Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

- Create Pull Request so your TAs can check up your work.

## Instructions

Today we are going to work on our AJAX skills. To do this we will connect to an API and with its resources we will perform a set of CRUD actions.

### Iteration 1: The API

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_99257e2c4240770e6b4bdd406d943ac8.png)

Please navigate to the following address (https://minions-api.herokuapp.com/) to learn about the API endpoints.

### Iteration 2: The `APIHandler.js` file

We have our API running, so now we will construct a class `APIHandler` to deal with the Axios calls. The only responsibility of this class is to display the JSON result that comes from the API, or give the needed information to the API via a function argument.

The functionalities of the `APIHandler` class are:

- Get all the characters info from https://minions-api.herokuapp.com/characters
- Get a single character info from https://minions-api.herokuapp.com/characters/:id
- Create a single character posting the data to https://minions-api.herokuapp.com/characters
- Delete a single character through his id in https://minions-api.herokuapp.com/characters/:id
- Edit a single character through his id in https://minions-api.herokuapp.com/characters/:id

You have to create an Axios call for each of these actions. You can create as many functions as you need inside the class, but remember this class should only manage the API request and display the resulting value.

<!-- :::success -->

**Micro-advice**

To make sure everything is working, use [POSTMAN](https://www.getpostman.com/).

<!-- ::: -->

In this iteration, it's enough to show results in the console.

### Iteration 3: The `index.js` file

Once we have the results served by the API in the application, we will create the events that will handle with the CRUD operations.

#### Fetch all characters

![image](https://user-images.githubusercontent.com/23629340/36733634-7b6b6dca-1bd1-11e8-9803-5282681159ba.png)

Retrieve all the available characters in the API and show them in the application. In order to do that, we need to:

- Create a button (_Fetch all_ in the image above) that calls a function in the `APIHandler`.
- The function will return a JSON object with all the characters.
- Get the data and show the characters. Finally, with JavaScript, we will create a structure similar to a card (image above) to show detailed info about each character.

#### Fetch one character

![image](https://user-images.githubusercontent.com/23629340/36733678-97ecd42a-1bd1-11e8-8e60-6aab38d632a0.png)

Following the same idea as with fetching all, to retrieve a single character's data we need to:

- Create a button (_Fetch one_ in the image above) to, through an input field, get the `id` of an existing character.
- Search that character in the API with _[https://minions-api.herokuapp.com/characters/:id](https://minions-api.herokuapp.com/characters/:id)_
- Get the data and show the character info as a card.

#### Delete one character

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_3d893f20f95e5b13369375cdfd7900a5.png)

To be able to delete a character from the API database, we need to:

- Create a button (_Delete_ one in the image above) to get the `id` of the character we want to delete.
- Delete that character in the API with _[https://minions-api.herokuapp.com/characters/:id](https://minions-api.herokuapp.com/characters/:id)_
   <!-- :::danger -->
  **Remember which HTTP verb you need in the request!!**
   <!-- ::: -->
- If the character is successfully removed, change the background color of the button to green.
- If something went wrong, change the background color of the button to red.

#### Create new character

![image](https://user-images.githubusercontent.com/23629340/36733698-a7c64f8e-1bd1-11e8-9b7d-b37c7a800a27.png)

We will create a form with 4 inputs: name(text), occupation(text), weapon(text) and cartoon(checkbox).

- Create a button (_Create_ in the image above) to get all the data from the form.
- Send the data to the `APIHandler` function to save the new character through _[https://minions-api.herokuapp.com/characters](https://minions-api.herokuapp.com/characters)_
   <!-- :::danger -->
  **Remember which HTTP verb you need in the request!!**
   <!-- ::: -->
- If the character was successfully created, set the background color of the button to green.
- If something went wrong, change the background color of the button to red.

#### Edit a character

![image](https://user-images.githubusercontent.com/23629340/36733714-b6257b36-1bd1-11e8-8518-c3f7e2ba034c.png)

We will create a form with 4 inputs: name(text), occupation(text), weapon(text) and cartoon(checkbox). Also, we will create a new input to indicate the `id` of the character we want to edit.

- Create a button (_Update_ in the image above) to get all the data from the form.
- Send the data to the `APIHandler` function to save the new character through _[https://minions-api.herokuapp.com/characters/:id](https://minions-api.herokuapp.com/characters/:id)_
   <!-- :::danger -->
  **Remember which HTTP verb you need in the request!!**
   <!-- ::: -->
- If the character was successfully updated, set the background color of the button to green.
- If something went wrong, change the background color of the button to red.

That would be all!

Happy coding! :heart: