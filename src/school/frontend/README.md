
## Front-end Setup
The front-end is setup with the use of npx create-react-app.<br />
The npx package installer is used because of the pre-configured settings and files, which enables a easy and fast setup of the front-end environment. 
```shell script
npx create-react-app client
cd client
```

Front-end startup is accomplished using following command:
```shell script
npm start
```
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will "hot-reload", this means the application will reload after changes have taken place.<br />
In case of any lint errors, these will show in the console.
```shell script
npm test
```

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
```shell script
npm run build
```
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.<br />
Your app is ready to be deployed!

## For Node Package Manager ````npm````
[Press here](https://www.npmjs.com/)


## Front-End Dependencies Installations

### [Axios](https://www.npmjs.com/package/axios)  [![npm version](https://img.shields.io/npm/v/axios.svg)](https://www.npmjs.com/package/axios)

Within the application, Axios is being used as the primary promise based HTTP client for the browser.<br />
Fetch was considered, however Axios supports older browsers (Fetch needs a polyfill).<br />
Also during development we've found out that fetch, in some cases, require longer and "more difficult" code.
```shell script
npm install axios
```

## Front-end Infrastructure

Here below the front-end file infrastructure tree is illustrated.<br />
The files, such as components, modules, services etc. have been splitted to provide a clear overview and accommodate a fast navigation through the files.
```
client\src
│   App.js
|   App.test.js
│   index.js
│   serviceWorker.js
│   setupTests.js
│
├───assets
|
├───components
│   ├───Accountcompoments
│        ├───BidInfo.js
|        |    Changeinfo.js
|        |    ManageAds.js
|        |    Offersinfo.js
|        |    Privatemessage.js
|        |    SavedAds.js
|        |
|        ├───ForumCompoments
|        |    Message.js
|        |    MessageList.js
|        |    NewRoomForm.js
|        |    RoomList.js
|        |    SendMessageList.js
|         Footer.js
|         Header.js
|         Navigation.js
|         ScrollToTop.js
|         Sectionabout.js
├───constants
│       http-common.js
│       speciesConstants.js
│       
│
├───css
|     style.css
│       
├───pages
|     compoments
|     account.js
|     alligatorAndCrocodile.js
|     constrictionSnakes.js
|     Forum.js
|     home.js
|     index.js
|     lizards.js
|     Loginpage.js
|     tarantulas.js
|     tortoiseandturtle.js
|     venomoussnakes.js
├───components
│   ├───Accountcompoments
│        ├───abstract
|        |    _mixins.scss
|        |    _varibles.scss
|        ├───base
|        |    _animationscss.scss
|        |    _base.scss
|        |    _typography.scss
|        |    _utilitys.scss
│        ├───compoments
|        |    _button.scss
|        |    _composition.scss
|        |    _inlog.scss
|        |    _select-box.scss
│        ├───layout
|        |    _account.scss
|        |    _chosen.scss
|        |    _footer.scss
|        |    _Forum.scss
|        |    _grid.scss
|        |    _header.scss
|        |    _navigation.scss
│        ├───pages
|        |    _home.scss
|         main.scss
└───service
       adsService.js
       infoAnimalsService.js
       inlogService.js

```

This project was bootstrapped with 

[Create React App](https://github.com/facebook/create-react-app).
