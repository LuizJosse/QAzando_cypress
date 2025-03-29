/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Login', () => {

    beforeEach(() => {
        cy.viewport(1366, 800);
    });

    it('Rastrear Pedido com Sucesso', () => {

        const Id = faker.string.uuid()
        const email = faker.internet.email()

        cy.visit('https://automationpratice.com.br/'); 
        cy.get('.fa-user').click(); 
        cy.get('.fa-user').click();
        cy.get('#user').type("luiznetito@gmail.com")
        cy.get('#password').type("123456")
        cy.get('#btnLogin').click()
        cy.contains('Login realizado').should('be.visible');
        cy.get('#swal2-title').should("have.text", "Login realizado")
        cy.get('.swal2-confirm').click()
        cy.get('.right_list_fix > :nth-child(1) > a').click()
        cy.get('.order_tracking_wrapper > h4').should('have.text', 'Order Tracking');
        cy.get('#order_ID').type(Id)
        cy.get('#billing_email').type(email)
        cy.get('.order_track_button > .theme-btn-one').click()
        cy.get('h2').should('have.text', 'Your order is completed!');
      });

});