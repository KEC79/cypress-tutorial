describe("Login Failed Test", () => {
    before(function() {
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.url().should("include", "index.html")
    })

    it("should display login form", function() {
       cy.get("#signin_button").click()
       //cy.contains("Signin").click() /////not as good
       
       cy.get("#login_form").should("be.visible")
    })

    it("should login to application", function() {
        // cy.get("#user_login").type("Kim")
        // cy.get("#user_password").type("Password1234")
        // cy.contains("Sign in").click()

        cy.loginToApp("Kim", "Password1234")
    })

    it("should display an error message", function() {
        cy.get(".alert-error").as("Error_message")
        cy.get("@Error_message").should("be.visible")
    
    })

})

describe("Login Success Test", () => {
    before(function() {
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.url().should("include", "index.html")
    })

    it("should display login form", function() {
       cy.get("#signin_button").click()
       cy.get("#login_form").should("be.visible")
    })

    it("should login to application", function() {
        cy.loginToApp("username", "password")
    })

    it("should display navbar links after login", function() {
        cy.get('#account_summary_tab').should("be.visible")
        cy.get("#account_activity_tab").should("be.visible")
        cy.get("#transfer_funds_tab").should("be.visible")
        cy.get("#pay_bills_tab").should("be.visible")
        cy.get("#money_map_tab").should("be.visible")
        cy.get("#online_statements_tab").should("be.visible")    
    })

    it("should logout from application", function() {
        cy.get(".icon-user").click()
        cy.get("#logout_link").click()
        cy.get("#homeMenu").should('be.visible')
    })

})