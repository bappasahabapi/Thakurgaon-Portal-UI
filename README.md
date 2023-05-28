[front-end ](https://thakurgaon-portal.web.app/)
[backed-server-url](https://thakurgaon-portal-server.vercel.app/news)

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
4. run command in terminal
    
    npm install

**5. Run the client part**
**5. Run the client part**

    npm start
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


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`React Hooks`: **useState(), useEffect()**

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

 ┃ ┃ ┃ ┗ 📜News.js

 ┃ **┗ 📂Shared**

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
