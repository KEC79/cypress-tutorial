describe("Login Test", () => {
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