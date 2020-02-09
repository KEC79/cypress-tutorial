class TopNavBar {

    search(text) {
        cy.get("#searchTerm").as("searchbox")
        cy.get("@searchbox").type(`${text} {enter}`)
        cy.url().should("include", "search.html?searchTerm=bank")
    }

    clickOnSignInButton() {
        cy.get("#signin_button").click()
    }
}

export default TopNavBar 