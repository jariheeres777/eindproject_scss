
## Front-end installatie
De front-end wordt opgezet met behulp van npx create-react-app. <br />
Het npx-pakketinstallatieprogramma wordt gebruikt vanwege de vooraf geconfigureerde instellingen en bestanden, wat een gemakkelijke en snelle installatie van de front-endomgeving mogelijk maakt.
```shell script
npx create-react-app client
cd client
```

Het opstarten van de front-end wordt bereikt met de volgende opdracht:
```shell script
npm start
```
Voert de app uit in de ontwikkelingsmodus. <br />
Open [http: // localhost: 3000] (http: // localhost: 3000) om het in de browser te bekijken.

De pagina wordt "hot-reload", dit betekent dat de applicatie opnieuw wordt geladen nadat er wijzigingen hebben plaatsgevonden. <br />
In het geval van fouten, worden deze weergegeven in de console.
```shell script
npm test
```


Start de testrunner in de interactieve horlogemodus. <br />
Zie de sectie over [tests uitvoeren] (https://facebook.github.io/create-react-app/docs/running-tests) voor meer informatie.
```shell script
npm run build
```
Bouwt de app voor productie naar de map 'build'. <br />
Het bundelt React correct in de productiemodus en optimaliseert de build voor de beste prestaties.

De build is verkleind en de bestandsnamen bevatten de hashes. <br />
Uw app is klaar om te worden ingezet!

## Voor Node Package Manager `` `` npm ''
[Druk hier] (https://www.npmjs.com/)


## Front-end afhankelijkheden installaties

### [Axios] (https://www.npmjs.com/package/axios) [! [Npm-versie] (https://img.shields.io/npm/v/axios.svg)] (https: //www.npmjs.com/package/axios)

Binnen de applicatie wordt Axios gebruikt als de primaire, op belofte gebaseerde HTTP-client voor de browser. <br />
Fetch werd overwogen, maar Axios ondersteunt oudere browsers (Fetch heeft een polyfill nodig). <br />
Ook tijdens de ontwikkeling hebben we ontdekt dat fetch in sommige gevallen langere en "moeilijkere" code vereist.
```shell script
npm install axios
```

## Front-end infrastructuur

Hieronder wordt de front-end bestandsinfrastructuurboom geïllustreerd. <br />
De bestanden, zoals componenten, modules, services etc. zijn opgesplitst om een ​​duidelijk overzicht te bieden en een snelle navigatie door de bestanden mogelijk te maken.
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
