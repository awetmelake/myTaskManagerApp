# Taskflow
React app that lets users organize their tasks. Users can sign in and create task boards that contain sections/panels that contain tasks. Customize board, panel, and task names and their order. Create tasks with custom descriptions and colors signifying whatever you want then to, ability to filter tasks by color. Also includes the ability to select a task and set a timer - pomodoro/stopwatch. When the timer is stopped the elapsed time is added to the tasks "time spent" property, which you can see when you click on the task, for time tracking. Uses Firebase for authentication and Firestore for storing user info with realtime update functionality. React router handles routing and 404 pages.

# How to run the app 
1. Fork/clone repo
2. Install dependencies with "npm install" from within the root
3. Create a folder 'config' in /src with a file 'fbConfig.js' and put your firebase configuration data in there, see Firebase console for more info. Connect your Redux store to your firebase app.
#### src/config/fbConfig.js :
```
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore
import { createFirestoreInstance } from "redux-firestore";
import store from "../store";

var firebaseConfig = {
// Your web app's Firebase configuration here, from firebase console
};

// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

const rrfConfig = {
  userProfile: "users", //Pass in the collection where user data is stored, change to which ever collection you use
  useFirestoreForProfile: true 
};

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};
```
 Move CRUD operations to the back-end using Express to call Firebase functions if you want a more secure setup.
4. Set up your collections, enable authorization within your firebase console. Set them up how ever you like and change the CRUD actions within src/actions to match
 #### Your database should look like this:
 collection: users
  document: *user1*
    collection:
     boards
      document:
        *boardId*
     panels
      documents:
        *panelId*
     tasks
      documents:
        *taskId*
  document: *user2*
    ...

5. Run 'npm start', Have fun :)

## Dependencies
* React
* Redux
* Redux-thunk
* React Redux Firebase
* Redux Firestore
* Firebase
* React Router
* Animate.css
* Material-UI
* Node Sass

## What the app looks like 
![Markdown Logo](https://github.com/awetmelake/myTaskManagerApp/blob/master/chrome_2019-09-24_15-07-10.png)
