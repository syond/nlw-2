<p align="center">
   <img src="./.github/assets/logo.png" alt="Proffy" width="280"/>
</p>

> Project developed during Next Level Week - 2 by Rocketseat

---

<b>Web version screenshots</b>
<p align="center">
  <img src="./.github/assets/web_1.png" width="auto" height="220" alt="Proffy Web Screenshot 1" border="0"></a>
  <img src="./.github/assets/web_2.png" width="auto" height="220" alt="Proffy Web Screenshot 2" border="0"></a>
</p>

<b>Mobile version screenshots</b>
<p align="center">
  <img src="./.github/assets/mobile_1.PNG" width="auto" height="400" alt="Proffy Mobile Screenshot 1" border="0"></a>
  <img src="./.github/assets/mobile_2.PNG" width="auto" height="400" alt="Proffy Mobile Screenshot 2" border="0"></a>
</p>
  


# :pushpin: Menu

* [Demo](#eyes-demo)   
* [About](#coffee-about) 
* [Features](#rocket-features)  
* [Technologies](#computer-technologies)
* [Installation](#floppy_disk-installation)
* [Contact](#email-contact)

# :eyes: Demo
Soon...

# :coffee: About
In this application the user can register yourself to give classes or just search for a teacher.

# :rocket: Features
    * Teacher register
    * Teacher list
    * Contact Whatsapp button
    * Favorite button    

# :computer: Technologies
    - NodeJS
    - ReactJS
    - React Native

## What we have in server ?
    - Database creation (knex; sqlite3)
    - Controllers creation
    - Routes creations (express)

## What we have in web ?
    - Routes (react-router-dom)
    - API connection (axios)
    - React Components
    - Responsive CSS
    - Enviroment variables (dotenv)

## What we have in mobile ?
    - React Components
    - Stylesheet
    - Stack Navigation (@react-navigation/stack)
    - Tab Navigation (@react-navigation/bottom-tabs)
    - AsyncStorage (@react-native-community/async-storage)
    - API connection (axios)


# :floppy_disk: Installation
Before you start, you need to clone the repository using `git clone`.

1. Now we need to install the dependecies of the server, web, and mobile. Inside each one folder you'll run: `npm install` or `yarn install`.

2. Configure the enviroments variable. Inside each project folder you'll see a `.env.example` file, rename it just to `.env`, open each one and configure with your informations.

3. Ok! The server project has a specific configuration, just run the following command inside the server folder to prepare all the database:

    - `npm knex:migrate`

4. Just run `npm start` inside Server, Web and Mobile folders. 

Ps: During the `npm start` execution in Mobile, remember to accept expo-cli installation when appears.

Now you are ready to go! :)

# :email: Contact
syond94@gmail.com | 
[Linkedin](https://linkedin.com/in/syond)
