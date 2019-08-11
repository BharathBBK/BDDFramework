Feature: Free Crm Login Page Feature

@SmokeTest
Scenario: Free CRM Login Test Scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user enters username and password
Then user clicks on login button
Then user is on home page


@RegressionTest
Scenario: Free CRM Home Page

Given user is on Home Page
When user is selected contacts
Then user created  contact
Then user click on logout