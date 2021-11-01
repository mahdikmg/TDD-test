import { shallowMount } from '@vue/test-utils'

describe('Creating a service', () => {
    it("Displays the service in the list", () => {
        cy.visit(`${Cypress.env('VUE_APP_PUBLIC_PATH')}`);
        cy.get('canvas').trigger('pointerdown', {clientX: 900, clientY: 500})
        cy.get('canvas').trigger('pointerup', {clientX: 900, clientY: 500})
        cy.contains("x: 900, y: 500");
        cy.get(".confirmBtn").click();
        cy.url().should('eq', 'http://localhost:8080/request?x=900&y=500')
        cy.get(".firstName").type('مهدی')
        cy.get(".lastName").type('قاسمی')
        cy.get(".phoneNumber").type('09109542493')
        cy.get(".telNumber").type('021456789')
        cy.get(".address").type('سعادت آباد، انتهای بلوار دریا، بلوار نورانی، خیابان فخارمقدم')
        cy.get(".male").trigger('click')
        cy.get(".nextBtn").click();
        cy.url().should('eq', 'http://localhost:8080/requests')
    });
})