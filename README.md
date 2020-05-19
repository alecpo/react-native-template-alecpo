
# react-native-template-alecpo
<p align="center">
   <img src="https://user-images.githubusercontent.com/20051865/82272779-e913a180-9951-11ea-968e-bc8f68ad83ed.png" alt="alt       text" width="640" height="320">
 </p>

## ⚠️ Thanks for coming, but first...~~let's take a selfie!🤳🏻~~
You will need to ensure that the React Native development environment is working correctly. If you haven't already, I suggest taking a look [here](https://reactnative.dev/docs/environment-setup) before continuing.

## ⚛️ About the project 
The intent of this project is to provide a custom template for React Native developers that wishes to start a brand new application, not by the begin, but having a pre-built project with the most commons and populars libraries and a reasonable pattern for the folder hierarchy.

## 🤔 How many different libraries do we have?

 - [@react-navigation/native](https://reactnavigation.org/docs/getting-started) → Provide a powerful, easy to use and completely customizable screens navigation in React Native;
 - [@react-navigation/stack](https://reactnavigation.org/docs/stack-navigator) → Provide a stack navigation model to use on react navigation;
 - [axios](https://github.com/axios/axios) → "Promise based HTTP client";
 - [formik](https://jaredpalmer.com/formik/docs/guides/react-native) → Helper to build forms in react/react-native easily;
 - [prop-types](https://www.npmjs.com/package/prop-types) → "Used as runtime type checking for React props and to document the intended types of properties passed to components";
 - [react-native-masked-text](https://github.com/benhurott/react-native-masked-text) → "This is a simple masked text (normal text and input text) component for React-Native";
 - [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) → "A flexible way to handle safe area", is something like a better version of SafeAreaView;
 - [redux](https://redux.js.org/) →  "A Predictable State Container for JS Apps";
 - [react-redux](https://redux.js.org/basics/usage-with-react) → Integration of redux to Reacts applications;
 - [redux-logger](https://github.com/LogRocket/redux-logger) → Allows to log the changes that is made in the redux state (display actions dispatches and store changes in browser console);
 - [redux-thunk](https://github.com/reduxjs/redux-thunk) → Intercept an action and handle with it's behavior and results;
 - [styled-components](https://styled-components.com/) → Have a clean code with native css styling creating custom natives components;
 - [yup](https://github.com/jquense/yup) → Validation JS tool to improve the use of Formik library;
 
 ## 🙏 How to use it
 It's simple, just run the command bellow on your workspace directory:

    npx react-native init MyProjectName --template react-native-template-alecpo

## 🗂 The folder hierarchy explanation

**⚠️ This topic only describes that folders and files that diverges from the original React Native template.**

 ```bash
alecpo-template
├── src/
│   ├── assets/ # Use this folder to storage any kind of assets required by your app.
│   │   └── img/ # Feel free to divide the images into subfolders .
│   │   └── svgAnimations/ # svg folder for animations (e.g: used by Lottie library)
│   ├── components/ # Put every kind of reusable custom components here.
│   │   └── DivisorLine.js # custom component to divide sections or elements in a list.
│   │   └── Icon.js # custom provided by react-native-vector-icons.
│   │   └── Label.js # custom text.
│   │   └── SubmitButton.js # custom submit button.
│   ├── config/ # Folder to the configurations files (e.g: API constants file, Reactotron, i18n, etc).
│   │   └── api.js # file to define the API's and endpoints constants.
│   ├── navigation/ # Folder for the "navigators" of React Navigation library. Use to structure the folder hierarchy. (Hint: Do this with advance planning).
│   │   └── RootStackNavigator.js # initial navigator of React Nativagation library.
│   ├── screens/ # Folder for ALL the screens files.
│   │   └── HomeScreen.js # Initial screen.
│   ├── store/ # Follow the structure to use Redux in your project.
│   │   └── actions/ # Action types and action creators files.
│   │   └── reducers/ # "Reducer's" files.
│   │   └── storeConfig.js # "store" settings file.
│   ├── utils/ # Helpers for your project.
│   │   └── customPropTypes/ # This folder contains the customs PropTypes that you probably will need.
│   │   └── enums/ # Enums folders.
│   │   └── colors.js # File to specify your application's color palette.
│   │   └── spacing.js # Generic pattern of spacings to your project.
│   │   └── strings.js # Strings constants used to prevent syntax mistakes and provide a scalable internationalization.
│   │   └── typography.js # Constants used to customize the "Label" component.
├── .prettierrc.json # Used to indent your project automatically.
├── babel.config.js # Allows you to use an alias on import custom modules or components (e.g: #/components/Label).
├── jsconfig.json # Offers autocomplete for your absolute path using alias (#/).
├── LICENSE # License file description.
└── README.md # Template documentation in markdown text.
```
