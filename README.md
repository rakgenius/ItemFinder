This is a spring boot project to search for items that you keep somewhere and forget over a period of time

Prequisites:

Java 8
Mongodb
Maven
npm
Nodejs
Intellij/Eclipse



Steps to run the project


1. Checkout the git repositoty and import the project into intellij or eclipse as maven project

2. Install the necessary npm packages and build the front end project first.
   NOTE: If you are checking out this repository then you dont need to run the steps mentioned in
   a to c. You can start from step "d"

    a. npm config set prefix /usr/local

    b. sudo npm install -g create-react-app

    c. create-react-app frontend

    d. cd frontend

    e. npm install --save react-router-dom

    f. npm install --save-dev bootstrap

    g. npm install --save axios

    h. npm run build

3. Make sure to change the mongodb properties to your local properties in application.properties

4. Now cd to the root of the project and run the below command

    mvn clean install -DskipTests

5. This will ensure that all the npm packages are installed in the frontend directory
   and build the reactjs.

6. Once the build is complete, run the java application using

    java -jar target/<application-name>.jar

7. Navigate to localhost:8080

8. Here you can list, add and search for the items


To test the front end quickly add the below section to package.json

"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "build": "react-scripts build && rm -rf ../src/main/resources/static && mv build ../src/main/resources/static",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
},

And run "npm run build" from the frontend directory
Navigate to localhost:3000
