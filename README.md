`Authentation`

1. Make a folder under the src/context/AuthProvider
2. Create file  AuthProvider/*AuthProvider.js*

```js
import React, { createContext } from 'react';

export const AuthContext =createContext();

const AuthProvider = ({children}) => {
    const user ={displayName:'Bappa Da'}
    const authInfo ={user};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
```



# Follow the steps:


[1. First clone the project](https://github.com/bappasahabapi/Thakurgaon-Portal-UI.git)

2. go to the folder

    cd Thakurgaon-Portal-Client

3. Switch the branch  [1.1-google-sign-in](https://github.com/bappasahabapi/Thakurgaon-Portal-UI/tree/1.1-google-sign-in).

4. run command in terminal
    
    npm install

**5. Run the client part**

    npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


**Run the server part**

[1.clone the server](https://github.com/bappasahabapi/Thakurgaon-Portal-Server.git)

Go to the folder and type 

    cd Thakurgaon-Portal-Server

run the command 

    npm install

Run the server

    nodemon index.js

Open [http://localhost:5000](http://localhost:5000) to view it in your browser.



---


**tools and technology**

`css-framework` : **React bootstrap**

`Authentication`: **Firebase Authentication**

`Sign in`: **Google sign-in**

`Backend server`: **Making express server**

`React router dom`: **React router dom v6**

`React Hooks`: **useState(), useEffect()**

`data load `: **fetch().then().then()**




**tree structure**

📦src

 ┣ 📂Pages

 ┃ ┣ 📂Category

 ┃ ┃ ┗ 📂Category

 ┃ ┃ ┃ ┗ 📜Category.js

 ┃ ┣ 📂Home

 ┃ ┃ ┗ 📂Home

 ┃ ┃ ┃ ┗ 📜Home.js

 ┃ ┣ 📂News

 ┃ ┃ ┗ 📂News

 ┃ ┃ ┃ ┗ 📜News.js

 ┃ ┗ 📂Shared

 ┃ ┃ ┣ 📂BrandCarousel
 ┃ ┃ ┃ ┗ 📜BrandCarousel.js
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┗ 📜Footer.js
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┗ 📜Header.js
 ┃ ┃ ┣ 📂LeftSideNav
 ┃ ┃ ┃ ┗ 📜LeftSideNav.js
 ┃ ┃ ┗ 📂RightSideNav
 ┃ ┃ ┃ ┗ 📜RightSideNav.js
 ┣ 📂Routes
 ┃ ┗ 📂Routes
 ┃ ┃ ┗ 📜Routes.js
 ┣ 📂assets
 ┃ ┗ 📂brands
 ┃ ┃ ┣ 📜Brand1.png
 ┃ ┃ ┗ 📜Brand2.png
 ┣ 📂firebase
 ┃ ┗ 📜firebase.config.js
 ┣ 📂layout
 ┃ ┗ 📜Main.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜__steps.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
