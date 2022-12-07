/// <reference types="cypress"/>

describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
    cy.url().should("contain", "example").and("contain", "cypress");
  });
});
