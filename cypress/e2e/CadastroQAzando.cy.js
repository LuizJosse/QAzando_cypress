/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Cadastro', () => {

    beforeEach(() => {
        cy.visit('https://automationpratice.com.br/'); 
        cy.get('.fa-lock').click(); 
    });

    it('Cadastro com sucesso', () => {

      const nome = faker.person.fullName();
      const email = faker.internet.email();
      const senha = faker.internet.password(6);

      cy.get('#user').type(nome)
      cy.get('#email').type(email)
      cy.get('#password').type(senha)
      cy.get('#btnRegister').click()
      cy.get('#swal2-title').should("have.text", "Cadastro realizado!")

      });

      it('Cadastro vazio', () => {
      cy.get('#btnRegister').click()
      cy.get('#errorMessageFirstName').should("have.text", "O campo nome deve ser prenchido")
    
      });

      it('Cadastro com Senha vazia ', () => {
      const nome = faker.person.fullName();
      const email = faker.internet.email();

      cy.get('#user').type(nome)
      cy.get('#email').type(email)
      cy.get('#btnRegister').click()
      cy.get('#errorMessageFirstName').should("have.text", "O campo senha deve ter pelo menos 6 dígitos")
      
      });

      it('Cadastro com E-mail vazio ', () => {
        const nome = faker.person.fullName();
        const senha = faker.internet.password(6);
  
        cy.get('#user').type(nome)
        cy.get('#password').type(senha)
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should("have.text", "O campo e-mail deve ser prenchido corretamente")
        
        });
        
      it('Cadastro com nome vazio ', () => {
        const email = faker.internet.email();
        const senha = faker.internet.password(6);
    
        cy.get('#email').type(email)
        cy.get('#password').type(senha)
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should("have.text", "O campo nome deve ser prenchido")
          
        });
  });