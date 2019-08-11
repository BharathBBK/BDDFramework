package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	
	WebDriver driver;
	@Before
	public void beforeM() {
		
		System.out.println("Hooks concept before method");
	}
	
	@After
   public void AfterM() {
		
		System.out.println("Hooks concept After method");
	}
	
	
	
	
	@Given ("^user is already on Login Page$")
	public void user_already_on_login_page() {
//		System.setProperty("webdriver.chrome.driver", "E:\\Automation\\chromedriver.exe");
//		driver = new ChromeDriver();
//		driver.get("https://www.freecrm.com/index.html");
		System.out.println("User login");
				
	}
	 @When("^title of login page is Free CRM$")
	 public void title_of_login_page_is_free_CRM(){
//	 String title = driver.getTitle();
//	 System.out.println(title);
//	 Assert.assertEquals("Free CRM software for any Business", title);
		 System.out.println("title validation");
	 }
	
	 //Reg Exp:
	 //1. \"([^\"]*)\"
	 //2. \"(.*)\"
	
	 @Then("^user enters username and password$")
	 public void user_enters_username_and_password(){
//	 driver.findElement(By.name("username")).sendKeys("naveenk");
//	 driver.findElement(By.name("password")).sendKeys("test@123");
		 System.out.println("valid username and password");
	 }
	
	 @Then("^user clicks on login button$")
	 public void user_clicks_on_login_button() {
//	 WebElement loginBtn =
//	 driver.findElement(By.xpath("//input[@type='submit']"));
//	 JavascriptExecutor js = (JavascriptExecutor)driver;
//	 js.executeScript("arguments[0].click();", loginBtn);
		 System.out.println("user click on login");
	 }
	
	
	 @Then("^user is on home page$")
	 public void user_is_on_hopme_page(){
//	 String title = driver.getTitle();
//	 System.out.println("Home Page title ::"+ title);
//	 Assert.assertEquals("CRMPRO", title);
		 System.out.println("user is on home page");
	 }
	 
	 @Given("^user is on Home Page$")
	 public void user_is_on_Home_Page() throws Throwable {
	     // Write code here that turns the phrase above into concrete actions
	    System.out.println("User in Home page");
	 }

	 @When("^user is selected contacts$")
	 public void user_is_selected_contacts() throws Throwable {
	     // Write code here that turns the phrase above into concrete actions
	  System.out.println("User is selected contacts");
	 }

	 @Then("^user created  contact$")
	 public void user_created_contact() throws Throwable {
	     // Write code here that turns the phrase above into concrete actions
	  System.out.println("user created contact");
	 }

	 @Then("^user click on logout$")
	 public void user_click_on_logout() throws Throwable {
	     // Write code here that turns the phrase above into concrete actions
     System.out.println("user click on logout");
	 }

	
	

}
