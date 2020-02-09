import BasePage from "./BasePage"

class SearchResultsPage extends BasePage {
    displayTitle() {
        cy.get("h2").as("title")
        cy.get("@title").contains("Search Results")
    }
    
}

export default SearchResultsPage