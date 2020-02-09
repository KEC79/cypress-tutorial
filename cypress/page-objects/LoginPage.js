import BasePage from "./BasePage"

class LoginPage extends BasePage {

    loginFormIsVisible() {
        cy.get("#login_form").should("be.visible")
    }

    clickForgotPasswordLink() {
        cy.contains('Forgot your password ?').click()
    }

    login(username, password) {
        cy.get("#user_login").type(username)
        cy.get("#user_password").type(password)
        cy.contains("Sign in").click()
    }

    showErrorMessage() {
        cy.get(".alert-error").as("Error_message")
        cy.get("@Error_message").should("be.visible")
    }
}

export default LoginPage