$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/User/eclipse-workspace/BDDFrame/src/main/java/features/login.Feature");
formatter.feature({
  "line": 1,
  "name": "Free Crm Login Page Feature",
  "description": "",
  "id": "free-crm-login-page-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-page-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 33403671449,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 151399165,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[#1 Free CRM for Any Business: Online Customer Relationship Software]\u003e but was:\u003c[Free CRM software for any Business]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinition.LoginStepDefinition.title_of_login_page_is_free_CRM(LoginStepDefinition.java:29)\r\n\tat ✽.When title of login page is Free CRM(C:/Users/User/eclipse-workspace/BDDFrame/src/main/java/features/login.Feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "status": "skipped"
});
});