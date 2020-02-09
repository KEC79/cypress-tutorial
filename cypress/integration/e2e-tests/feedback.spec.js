import HomePage from "../../page-objects/HomePage"
import Feedback from "../../page-objects/FeedbackPage"
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
        feedbackPage.fillFeedbackForm("kim", "test@test.com", "this is a subject", "this is a comment")
        feedbackPage.submitFeedbackForm()
    })

    it("should display success message", function() {
        feedbackPage.showSuccessMessage()
    })
})