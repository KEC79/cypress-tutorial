import HomePage from "../../page-objects/HomePage"
import TopNavBar from "../../page-objects/components/TopNavBar"
import LoginPage from "../../page-objects/LoginPage"
import ForgottenPasswordPage from "../../page-objects/ForgottenPasswordPage"

describe('Forgotten Password', () => {
    const homePage = new HomePage()
    const topNavBar = new TopNavBar()
    const loginPage = new LoginPage()
    const forgottenPasswordPage = new ForgottenPasswordPage()

    before(function() {
        homePage.visit()
    })

    it("should display login form", function() {
        topNavBar.clickOnSignInButton()
        loginPage.loginFormIsVisible()
     })

    it('should display forgotten password form', function() {
        loginPage.clickForgotPasswordLink()
        forgottenPasswordPage.shouldExist()
        
    })

    it('should submit forgotten password form', function() {
        forgottenPasswordPage.fillEmailForm("email@email.com")
        forgottenPasswordPage.submitEmail()
    })

    it('should display success message', function () {
        forgottenPasswordPage.showSuccessMessage()
    })
})