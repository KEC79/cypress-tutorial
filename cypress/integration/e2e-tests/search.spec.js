import HomePage from "../../page-objects/HomePage"
import TopNavBar from "../../page-objects/components/TopNavBar"
import SearchResultPage from "../../page-objects/SearchResultsPage"

describe("Searchbox Test", () => {
    const homePage = new HomePage()
    const topNavBar = new TopNavBar()
    const searchResultsPage = new SearchResultPage()

    before(function() {
        homePage.visit()
    })

    it("should search for value via searchbox", function() {
        topNavBar.search("bank")
    })

    it("should display search results page", function() {
        searchResultsPage.displayTitle()
    })

    it("should display homepage again", function() {
        cy.go("back")
        cy.url().should("include", "index.html")
    })
})