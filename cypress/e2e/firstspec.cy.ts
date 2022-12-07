/// <reference types="cypress"/>

describe("Tests on CI/CD", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
    cy.url().should("contain", "example").and("contain", "cypress");
  });
});
