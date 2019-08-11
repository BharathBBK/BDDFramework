$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/User/eclipse-workspace/BDDFrame/src/main/java/features/login.Feature");
formatter.feature({
  "line": 1,
  "name": "Free Crm Login Page Feature",
  "description": "",
  "id": "free-crm-login-page-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 459139,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-page-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 137723924,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 148767,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 202384,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 159340,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 114407,
  "status": "passed"
});
formatter.after({
  "duration": 156318,
  "status": "passed"
});
formatter.before({
  "duration": 1022867,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Free CRM Home Page",
  "description": "",
  "id": "free-crm-login-page-feature;free-crm-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user is selected contacts",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user created  contact",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on logout",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 195964,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_selected_contacts()"
});
formatter.result({
  "duration": 72495,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_created_contact()"
});
formatter.result({
  "duration": 134041,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_logout()"
});
formatter.result({
  "duration": 175198,
  "status": "passed"
});
formatter.after({
  "duration": 55505,
  "status": "passed"
});
});