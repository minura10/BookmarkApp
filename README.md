# react-native-boilerplate

This project is a React Native boilerplate that can be used to kickstart a mobile application.

The boilerplate provides an optimized architecture for building solid cross-platform mobile applications through separation of concerns between the UI and business logic. Code is commented wherever necessary so that each piece of code in your application can be understood and used.


# Architecture

The driving goal of the architecture of the boilerplate is separation of concerns and using React Native at its best.

- Using modern Javascript. So many javascript features are indispensable now like hooks, functional  
  component and dependencies.

- Presentational components are separated from containers.

  Presentational components are small components that are concerned with how things look.                
  Containers usually define whole application screens and are concerned with how things work: they  
  include presentational components and wire everything together.

- State is managed using global Redux stores.

  When applications grow, sharing state and its changes can become very hard.
  With Redux, state is shared using global stores, and changes are predictable: actions are applied  
  by reducers to the state. While the pattern can be a bit much for small projects, the clear  
  separation of responsibilities and predictability helps with bigger applications.


# Content
- A React Native (v0.64.2) application
- A clear directory layout to provide a base architecture for the application
- Redux (v4.1.0) to help manage state
- React Navigation (v5) to handle routing and navigation in the app, with a splash screen setup by default
- Redux Toolkit (v1.6.0) to make redux easier
- RTK Query - Redux Toolkit's "RTK Query", is an advanced data fetching and caching tool, designed to simplify common cases for loading data. RTK Query is included in the @reduxjs/toolkit package as an additional addon. This is built on top of the Redux Toolkit core, and leverages RTK's APIs like createSlice and createAsyncThunk to implement its capabilities.
- react-native-flipper (v0.93.0) to debug react-native and redux-flipper (v1.4.2) to debug redux

The boilerplate includes an example (displaying fake user data) from UI components to the business logic. You can modify it according to your requirement when developing.


# Directory layout 
- src/Assets: assets (image, audio files, ...) used by the application
- src/Components: presentational components
- src/Config: configuration of the application
- src/Containers: container components, i.e. the application's screens
- src/Navigators: react navigation navigators
- src/Services: application services, e.g. API clients
- src/Stores: redux actions, reducers and stores
- src/Translations: application strings, you can add languages files and be able to translate your app strings
- src/Theme: base styles for the application

A README file is included inside each of the above directories to let you better understand about the purpose of each directory.

#### Note
- To generate appIcons for Android and iOS, refer: 
	- [Android (tip 1)](https://developer.android.com/studio/write/image-asset-studio)
	- [Android (tip 2)](https://stackoverflow.com/a/26615948)
	- [Android (tip 3)](https://stackoverflow.com/a/19064899) 
	- [iOS](https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/)


# Requirements

Node 10 or greater is required. Development for iOS requires a Mac and Xcode 9.4 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native.
- Install React Native dependencies using `npm install`
- In order to use auto linking in iOS, cd to iOS directory and run `pod install`


# Quick start

Assuming you have all the requirements installed, you can execute the project by running:

- `npm start` to start the metro bundler, in a dedicated terminal.
- `npx react-native run-android` to run the project in Android / `npx react-native run-ios` to run the project in iOS platform (remember to start a simulator or connect a device)