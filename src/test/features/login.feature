
Feature: Playwirght demo tests 
Feature Description  : To login to https://www.thewarehouse.co.nz/

Scenario: Successful login with valid credentials 
 Given the user is on the warehouse login page 
 When the user enters a valid "username" and "password" 
 And the user clicks on the login button 
 Then the user is logged in successfully