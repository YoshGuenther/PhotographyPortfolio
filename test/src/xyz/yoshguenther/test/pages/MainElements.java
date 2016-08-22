
/**
 * Class to handle the common elements to every page, such as the header, nav, and footer.
 */
public class MainElements{
  private WebDriver driver;

  public MainElements(WebDriver driver){
    this.driver = driver;
  }

  public static boolean verifyPage(){
    WebElement header = this.driver.findElement(By.ById("header"));
    WebElement logoText = header.findElement(By.ByClassName("title-element"));
    assert "YoshGuenther Photography".equals(logoText.getText());

    WebElement nav = this.driver.findElement(By.ById("nav"));
    WebElement[] navItems = nav.findElements(By.ByClassName("nav-item"));
    assert navItems.length == 4;

    WebElement footer = this.driver.findElement(By.ById("social-media"));
    WebElement[] socialMediaLinks = footer.findElements(By.ByTagName("li"));
    assert socialMediaLinks.length == 5;
    return true;
  }
}
