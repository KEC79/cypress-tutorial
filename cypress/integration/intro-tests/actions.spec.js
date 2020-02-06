describe("Action test", () => {
    before(function() {
        // runs once before all tests in the block
    })

    after(function() {
        // runs once after all tests in the block
    })

    beforeEach(function() {
        // runs before each test in the block 
        cy.visit("https://devexpress.github.io/testcafe/example/")
    })

    afterEach(function () {
        // runs after each test in the block
    })

    it("submit developer name", function() {
        // cy.get("#developer-name").type("Name")
        // cy.get("#submit-button").scrollIntoView()
        // cy.get("#submit-button").click()

        cy.submitDeveloper("Test")

        cy.get(".result-content").should("be.visible")
        cy.url().should("include", "thank-you")
    })

    it("should enable slider", function() {
        cy.get("#slider").as("slider")

        cy.get("@slider").should("have.class", "ui-state-disabled")
        cy.get("#tried-test-cafe").click()
        cy.get("@slider").should("not.have.class", "ui-state-disabled")
    })

    it("should have empty value by default", function() {
        cy.get("#comments").as("textarea")

        cy.get("#tried-test-cafe").click()
        cy.get("@textarea").should("have.value", "")
        cy.get("@textarea").type("new value")
        cy.get("@textarea").should("have.value", "new value")
    })
})