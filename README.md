# UserInformation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.3.0.

## Installation Steps

1) Download & Install Node JS (>= version 14)
2) Install Angular CLI version 14 globally (npm i -g @angular/cli@14)
3) Clone the Repository (git clone https://github.com/Trijit957/user-information-evaluation.git)
4) run npm install (at root level of the repo)

## Building the Application

1) Creating five components - user-information, navbar, contact, about and not-found under components folder.
2) Add these components to the app-routing file under route definitions along with their respective route paths.
3) Creating a service under user-information component which handles the api call and fetch the relevant user information.
4) Injecting the service to the UserInfoComponent and susbscribe to it to get the response and then populate a array with it.
5) Creating the template with table element and looping through the users array, all the info is printed.
6) Creating a separate component called navbar which contains some menu and date and place it in the app.component.html outside the router-outlet.

## How to run the Application Locally

Run `ng serve` to run the project locally (At the root level of the project). 

## How to build the Application

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

