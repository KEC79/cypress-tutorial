import HomePage from "../../page-objects/HomePage"
import TopNavBar from "../../page-objects/components/TopNavBar"
import LoginPage from "../../page-objects/LoginPage"
import Tabs from "../../page-objects/components/Tabs"

const homePage = new HomePage()
const topNavBar = new TopNavBar()
const loginPage = new LoginPage()
const tabs = new Tabs()

describe("Login Failed Test", () => {
    before(function() {
        homePage.visit()
    })

    it("should display login form", function() {
        topNavBar.clickOnSignInButton()
        loginPage.loginFormIsVisible()
    })

    it("should login to application", function() {
        loginPage.login("kim", "password1234")
    })

    it("should display an error message", function() {
        loginPage.showErrorMessage()
    })

})

describe("Login Success Test", () => {
    before(function() {
        homePage.visit()
    })

    it("should display login form", function() {
       topNavBar.clickOnSignInButton()
       loginPage.loginFormIsVisible()
    })

    it("should login to application", function() {
        loginPage.login("username", "password")
    })

    it("should display navbar links after login", function() {
        tabs.shouldBeVisible()
    })

    it("should logout from application", function() {
        cy.get(".icon-user").click()
        cy.get("#logout_link").click()
        homePage.carouselIsVisible()
    })

})