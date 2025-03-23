/// <reference types="cypress"/>

describe('Logout', () => {

    beforeEach(() => {
        cy.visit('https://automationpratice.com.br/'); 
        cy.get('.fa-user').click(); 
        cy.viewport(1366, 800);
    });

      it('Logout nav-bar', () => {
        cy.get('.fa-user').click();
        cy.get('#user').type("luiznetito@gmail.com")
        cy.get('#password').type("123456")
        cy.get('#btnLogin').click()
        cy.contains('Login realizado').should('be.visible');
        cy.get('#swal2-title').should("have.text", "Login realizado")
        cy.get('.swal2-confirm').click()
        cy.get('#userLogged').trigger('mouseover'); 
        cy.get('.custom_dropdown li a').contains('Logout').click({ force: true });
        cy.get('#swal2-title').should("have.text", "Logout realizado")
        cy.get('.swal2-confirm').click()
      });

      it('Logout botão lateral', () => {
        cy.get('.fa-user').click();
        cy.get('#user').type("luiznetito@gmail.com")
        cy.get('#password').type("123456")
        cy.get('#btnLogin').click()
        cy.contains('Login realizado').should('be.visible');
        cy.get('#swal2-title').should("have.text", "Login realizado")
        cy.get('.swal2-confirm').click()
        cy.wait(300);
        cy.get('.nav > :nth-child(6) > a').click()
        cy.get('#swal2-title').should("have.text", "Logout Sucessfull")
        cy.get('.swal2-confirm').click()
      });

  
  });