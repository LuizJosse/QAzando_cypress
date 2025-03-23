/// <reference types="cypress"/>

describe('Login', () => {

    beforeEach(() => {
        cy.visit('https://automationpratice.com.br/'); 
        cy.get('.fa-user').click(); 
        cy.viewport(1366, 800);
    });

    it('Login com Sucesso', () => {
        cy.get('.fa-user').click();
        cy.get('#user').type("luiznetito@gmail.com")
        cy.get('#password').type("123456")
        cy.get('#btnLogin').click()
        cy.contains('Login realizado').should('be.visible');
        cy.get('#swal2-title').should("have.text", "Login realizado")
      });

      it('Emial e Senha vazio', () => {
        cy.get('.fa-user').click();
        cy.get('#btnLogin').click()
        cy.contains('E-mail inválido.').should('be.visible');
        cy.get('.invalid_input').should("have.text", "E-mail inválido.")
        
      });

      it('Emial vazio', () => {
        cy.get('.fa-user').click();
        cy.get('#btnLogin').click()
        cy.get('#password').type("123456")
        cy.contains('E-mail inválido.').should('be.visible');
        cy.get('.invalid_input').should("have.text", "E-mail inválido.")
        
      });

      it('Senha vazia', () => {
        cy.get('.fa-user').click();
        cy.get('#btnLogin').click()
        cy.get('#user').type("luiznetito@gmail.com")
        cy.get('#btnLogin').click()
        cy.contains('Senha inválida.').should('be.visible');
        cy.get('.invalid_input').should("have.text", "Senha inválida.")
        
      });
      
  });