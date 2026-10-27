exports.LoginPage=class LoginPage{

    dashboard;
    invalidmsg;
    constructor(page){
        this.page=page;
        this.username=page.locator("//input[@name='username']");
        this.password=page.locator("//input[@name='password']");
        this.loginbtn=page.locator("//button[text()=' Login ']");
        this.dashboard=page.locator("//h6[text()='Dashboard']")
        this.invalidmsg=page.locator("//p[text()='Invalid credentials']");
    }
    async navigation(){
      await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }
    async enterusername(username){
        await this.username.fill(username);
    }
    async enterpassword(password){
        await this.password.fill(password);
    }
    async login(){
        await this.loginbtn.click();
    }
}