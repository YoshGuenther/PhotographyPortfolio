public class Home{
  private WebDriver driver;

  public Home(WebDriver driver) extends MainElements{
    super(driver);
    this.driver = driver;
  }


  public static boolean verifyPage(){
    boolean result = super.verifyPage();
  }
}
