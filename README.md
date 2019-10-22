# Taskflow
React app that lets users organize their tasks.

## How to run the app 
1. Fork/clone repo
2. Install dependencies with "npm install" from within the root
3. Create a folder 'config' in /src with a file 'fbConfig.js' and put your firebase configuration data in there, see Firebase console for more info. Connect your Redux store to your firebase app.
##### src/config/fbConfig.js :
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
 ##### Your database should look like this:
 ```
 collection: users
  document: userId
    collection: boards
      document: boardId
    collection: panels
      document: panelId
    collection: tasks
      document: taskId
        
  document: user2
    ...
  ```
5. Run 'npm start', Have fun :)

### Features
* Sign in as guest or create an account, authorization provided by Firebase
* Create boards with custom names
* Within boards, create panels with custom titles and the ability to change their order
* Within panels, create tasks with custom titles, colors, and descriptions
* Timer for tracking time spent on tasks. Choose the type of timer you want to use (Pomodoro, Stopwatch) and select a task to work on. Once the timer is stopped, the time is added to the tasks 'time spent' property. Use it to track total time spent on task.
* Toggleable color legend. Filter tasks by color.
* Changes are updated live, no refresh necessary 

### Dependencies
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
![alt text](https://awettech.com/images/taskflow.webp)
