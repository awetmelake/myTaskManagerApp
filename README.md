# Taskflow
React app that lets users organize their tasks. Users can sign in and create task boards that contain sections/panels that contain tasks. Customize board, panel, and task names and their order. Create tasks with custom descriptions and colors signifying whatever you want then to, ability to filter tasks by color. Also includes the ability to select a task and set a timer - pomodoro/stopwatch. When the timer is stopped the elapsed time is added to the tasks "time spent" property, which you can see when you click on the task, for time tracking. Uses Firebase for authentication and Firestore for storing user info with realtime update functionality. React router handles routing and 404 pages.

# How to run the app 
1. Fork/clone repo
2. Install dependencies with "npm install" from within the root
3. Create a folder 'config' in root with a file 'fbConfig.js' and put your firebase configuration data in there, see Firebase project panel for more info. You need to connect your Redux store to your firebase app. Move CRUD operations to the back-end with Express and Firebase functions if you want a more secure setup.

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
![alt-text](https://github.com/awetmelake/myTaskManagerApp/blob/master/chrome_2019-09-24_15-07-10.png)
