# Getting Started with Create React App

This App will be a blog where users can add a blog with a title, blog text, and a user name; it will have auth credentials, loggin with google account as well as button to delete a blog if they wich. We will use hooks as well as components. Props will be also used. We will use Firebase app and host to deploy the app.

So they app will have a login page, home, and a Create Post page.

## Create project

Create project using you terminal
npx create-react-app blog-website

So go to setting and create it.

## Intall firebase conf.
Go to Visual Code or terminal and install firebase dependencies or packages.
-npm i firebase or yarn add firebase if you are using it.

## Firebase
If already have an account in firebase, go to console, configure, and create a project.
We use Firebae database

-Create component firebase-Config to connect the app with the app in firebse console

## Auth
Go to authentication and click in get Started
Click google althougt there are other options
Then Enable and use a email and save.

## Firebase database
Click on enable
Then click on create database and set it up in production mode.
Click enable and it will start a collection or database.
Now we create a set up aunthentification in firebase-config compponent.

Create conections to implement them in the project.

## Routers
In order to create routes whithin pages we need to install react-router-dom and import it, and after that we need to set up our routes.
-Home, Login, CreatePost

## Links
Create links to be able to navigate through pages

In the project directory, you can run:

### `npm start` to run the app

## Login
Create funtionality, and stablish a function so that the login link does not appear in is loggin.

# Logout
Create functionality so that the user can have the logout link if the are login.

## CSS
css is implemented to the login page and stylish.

## CreatePost
CreatePost page is create in a way that the users can add content if they are login. To do that, useState and useEffect are used. We create fucntion link to the click buttons. Props are also utilized is this process.

We create a collection in Firebase and modify rules to unable user to add content.

Then we create our first post and submit it.

## Home Page
We need to access the post that sit in our database.
The useState is used, so we import it and initilize it with an empty array.

To populate the homePage we need to use (useEffect) and get the data we need and display.

CSS is added at this stage.

## Delete Post button
Add a function to delete post when the users want, using async

## Available Scripts
