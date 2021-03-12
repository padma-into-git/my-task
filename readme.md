# Automation test suite

## react-redux-registration-login-example-test

### Meisterwerk

### Steps to run the test

**Prerequisities:** Install latest Node Version

1.  Clone the Repository from URL "https://github.com/cornflourblue/react-redux-registration-login-example"

2.  Navigate to the Cloned Repository Path in the Terminal

3.  Install the Dependencies using the below Command

        npm install

4.  **Run the Application from Terminal Window using the below Command & launch it in localhost**

        npm start

5.  Clone the Repository from URL "https://github.com/padma-into-git/my-task.git"

6.  Navigate to the Cloned Repository Path in the Terminal

7.  To install Dependencies, Run the following Command in Terminal

        npm install

8.  Copy the Localhost URL of the Running Application from the Browser Window & paste the same in
    config/config.js -> BASE_URL (Value)
    utility/page-url.js -> BASE_URL (value)

9.  Run the following commands to execute the Test:

    **To run all the Tests, run the following Command in Terminal**

          npm run test

    **To run Specific Test Files, run the following Commands**

    **End-To-End Scenario:**

          npm run test:e2e

    **Task 0 - Test Registration Functionality**:

          npm run test:registration-page

    **Task 1 - Test Login Functionality**:

          npm run test:login-page

    **Task 2 - Test Delete User Functionality**:

          npm run test:home-page

    **Task 3 - Test Log Out Functionality**:

          npm run test:home-page


**To check the Test Reports**, Open reports/testcafe-report.html

**To check the Error Screenshot**, check the testcafe-report.html report (or) refer it from the screenshots folder

### Project Details & Overview

**Tool used to Automate :** Testcafe version 1.11.0

**Programming Langauge :** JavaScript / Nodejs

**Programming Model :** This project used page object model and data driven framework

**POM:** As per the page object model, I have maintained a class for every web page. Each web page has a separate class which holds functionalities and members of that web page.

**Packages:** TestCafe

**config**: This Folder is used to maintain the Configuration Information for different environments

**mock-data:** This Folder is used to store the Test data

**modules**: This Folder contains the test Spec Files

**page-models:** This Folder contains the Page Objects of HomePage, LoginPage, RegistrationPage & page.js to return the Instance of Page Class Objects

**reports:** To store TestCafe Test Reports in HTML. Just run the Html file to see the report.

**utility:** Contains Utility Files for some Common Functions

**Package.json:** This will help to make it easy for others to manage and install the dependencies.
