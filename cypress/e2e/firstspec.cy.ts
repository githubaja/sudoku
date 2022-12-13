/// <reference types="cypress"/>

describe("Tests on CI/CD", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
    cy.url().should("contain", "example").and("contain", "cypress");
  });
  it("page is loaded", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").should("have.text", "Sudoku");
  });
});
