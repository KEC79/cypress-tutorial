describe("Searchbox Test", () => {
    before(function() {
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.url().should("include", "index.html")
    })

    it("should search for value via searchbox", function() {
        cy.get("#searchTerm").as("searchbox")

        cy.get("@searchbox").type("bank {enter}")
        cy.url().should("include", "search.html?searchTerm=bank")
    })

    it("should display search results page", function() {
        cy.get("h2").as("title")

        cy.get("@title").contains("Search Results")
    })

    it("should display homepage again", function() {
        cy.go("back")
        cy.url().should("include", "index.html")
    })
})