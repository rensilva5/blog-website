# Getting Started with Create React App

## Concept:
* This App will be a blog where users can add a blog with a title, blog text, and a user name.
* It will have auth credentials, loggin with google account as well as button to delete a blog if they wish.
* We will use hooks as well as components; props will be also used.
* We will use Firebase app and host to deploy the app.
* So they app will have a login page, home, and a Create Post page.

## Tech used:
* Firebase
* Firebase functions
* Express.js
* cors

## Create project
1. Create project using you terminal npx create-react-app blog-website
2. So go to setting and create it.

## Intall firebase conf:
Go to Visual Code or terminal and install firebase dependencies or packages.
-npm i firebase or yarn add firebase if you are using it.

## Firebase setup:
1. If already have an account in firebase, go to console, configure, and create a project.
We use Firebae database
2. Create component firebase-Config in visual to connect the app with the app in firebase console.

## Auth
1. Go to authentication in Firebase and click in 'get Started'.
2. Click google althougt there are other options
3. Then Enable, use an email, and save.

## Firebase database
1. Click on enable; then click on create database and set it up in production mode.
2. Click enable and it will start a collection or database.
3. We create a collection in Firebase and modify rules to unable user to add content.
4. Now we create a set up aunthentification in firebase-config compponent in our visual code.
5. Create conections (export,import) accordingly to implement them in the project.

## Routers
In order to create routes whithin pages we need to install react-router-dom and import it, and after that, we need to set up our routes fro Home, Login, and CreatePost.
* Copy this in terminal: npm install react-router-dom

## Links
Create links to be able to navigate through pages

## Login
Create funtionality, and stablish a function so that the login link does not appear in 'is loggin'.

# Logout
Create functionality so that the user can have the 'logout' link if the are logged in.

## CSS
css is implemented to the login page and stylish.

## CreatePost
1. This page is create in a way that the users can add content if they are login. To do that, we use useState and useEffect, and create fucntion link to the click buttons. Props are also utilized is this process.
2. Then we create our first post and submit it.

## Home Page
1. We need to access the post that sit in our database.
The useState is used, so we import it and initilize it with an empty array.
2. To populate the homePage we need to use (useEffect) and get the data we need and display it.
3. CSS is added at this stage.

## 'Delete Post' button
Add a function to delete post when the users want, using async await.

## Available Scripts
In the project directory, run:

### `npm start` to run the app


![See image](/src/assets/readMeImage.png)