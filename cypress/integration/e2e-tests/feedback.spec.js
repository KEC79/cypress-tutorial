import HomePage from "../../page-objects/HomePage"
import FeedbackPage from "../../page-objects/FeedbackPage"

describe("Feedback Test", () => {
    const homePage = new HomePage()
    const feedbackPage = new FeedbackPage()

    before(function() {
        homePage.visit()
    })

    it("should display feedback form", function() {
        homePage.clickOnFeedback()
        feedbackPage.feedbackFormIsVisible()
    })

    it("should submit feedback form", function() {
        feedbackPage.fillFeedbackForm("kim", "test@test.com", "This is a subject", "This is a comment")
        feedbackPage.submitFeedbackForm()
    })

    it("should display success message", function() {
        feedbackPage.showSuccessMessage()
    })
})