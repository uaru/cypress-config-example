import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('I want to test', function () {
    cy.log("example.js")
})

Then("I can use feature specific", function () {
    cy.log("feature specific")
} )