describe("Creating a service", () => {
  it("Displays the service in the list", () => {
    cy.visit(`${Cypress.env("VUE_APP_PUBLIC_PATH")}`);
    cy.get(".vue2leaflet-map").trigger("pointerdown", "topLeft");
    cy.get(".vue2leaflet-map").trigger("pointerup", "top");
    cy.get('[data-test="confirmBtn"]').click();
    cy.get('[data-test="firstName"]').type("تست");
    cy.get('[data-test="lastName"]').type("تستیان");
    cy.get('[data-test="phoneNum"]').type("09121234567");
    cy.get('[data-test="phoneTel"]').type("02112345678");
    cy.get('[data-test="address"]').type("آدرس دقیق تستی");
    cy.get('[data-test="genderFemale"]').trigger("click");
    cy.get('[data-test="confirmBtn"]').click();
    cy.url().should("eq", "http://localhost:8080/requests");
  });
});
