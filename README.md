# Application Demo
The application contain libraries.

## Instruction on how to use
* npm run install - to install the application dependencies.
* npm run server - to run the application.

# Libraries
There are 6 libraries which can be installed on the application above.

## Instruction on how to use
* npm run build:npm - to build the library npm package. It will create dist folder.
* npm run server - to test the library on the webpack dev server.


# How to install libraries into the application

## Two ways to install the library
### Solution 1
* Navigate to the folder of the library and copy the dist folder and package.json. 
* Save the dist folder and package.json to a new folder.
* Copy the directory of the new folder (e.g. C:\vue_table_library).
* To install the library you type npm install <the new directory of the dist folder and package.json you copied> (e.g. npm install C:\vue_table_library).
* You install the library package into the application

### Solution 2
* You can install the library by typing npm install <plus the library directory> (e.g. npm install C:\Appplication and Libraries\vue_table_library).
* This solution does not require you to copy the dist folder and package.json.
* You install from the library project folder.
* You install the library package into the application
