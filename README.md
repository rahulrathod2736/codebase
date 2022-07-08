# Code - 08-07-2022


## Frontend: 

### Steps to Run FrontEnd Project : 

#### Run command ```npm install```.

This will install all the depandency which is used in project and configured by package.json.

#### Run command ```npm run start```.

This Command will start React Project on Port 3000.
you can check link 

http://localhost:3000/signin
http://localhost:3000/signup
http://localhost:3000/dashboard

List of libraries used in Frontend :

- antd : custom and predefined component for UI
- moment: built in function for date manipulation and formation
- react-rom/react-router-dom: fro routing purpose
- react-icons: broad collection of icons
- tailwind css: for upgrade and simple use of css

## Backend : 

### Steps to Run Backend Project : 

Before that you need to create one database in mongodb
I'm using ```blogdb``` as database in mongodb

#### Run command ```npm install```.

This will install all the depandency which is used in project and configured by package.json.

#### Run command ```npm run dev```.

This Command will start Node Server Project on Port configured by env.
you can check link http://localhost:{port}/

List of libraries used in Frontend :

- bcrypt: to Encrypt Password
- body-parser: to get data from body of Request
- dotenv: To configure environment file
- express:  To Create and manage Server
- jsonwebtoken: to generate and verify token 
- mongoose: to communicate between node and mongodb
- nodemon: to trun node file continuosly

```
I'll share postman collection for Test API. and also I'll attach environment file for both Frontend and Backend
```

