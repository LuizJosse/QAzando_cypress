/// <reference types="cypress"/>
import 'cypress-real-events/support';
import { faker } from '@faker-js/faker';


describe('Adicionar ao carringo', () => {

    beforeEach(() => {
        //cy.get('.fa-user').click(); 
        cy.viewport(1366, 800);
    });

    it('Login com Sucesso', () => {
        cy.visit('https://automationpratice.com.br/'); 
        cy.get('.fa-user').click(); 
        cy.get('.fa-user').click();
        cy.get('#user').type("luiznetito@gmail.com")
        cy.get('#password').type("123456")
        cy.get('#btnLogin').click()
        cy.contains('Login realizado').should('be.visible');
        cy.get('#swal2-title').should("have.text", "Login realizado")
        cy.get('.swal2-confirm').click()
      });

      it('Comprar pela lista de exibição ', () => {
      const nome = faker.person.fullName()
      const sobrenome = faker.person.lastName()
      const email = faker.internet.email()
      const senha = faker.internet.password(6)
      const empresa = faker.company.name()
      const zipCode = faker.location.zipCode()
      const endereco = faker.location.streetAddress()
      const paragrafo = faker.lorem.paragraph()


        cy.visit('https://automationpratice.com.br/my-account'); 
        cy.get('.has-dropdown.has-megaitem > a').realHover();
        cy.get('.mega-menu').should('be.visible');
        cy.wait(500);
        cy.contains('a', 'Shop List View').click({ force: true });
        cy.url().should('include', '/shoplist');
        cy.get(':nth-child(1) > .product_wrappers_list > .row > .col-lg-9 > .content > .add-to-cart').click()
        cy.get('#swal2-title').should('have.text', 'Success!');
        cy.get('#swal2-title', { timeout: 10000 }).should('not.exist');  // Aumenta o timeout para 10 segundos
        cy.get('.col-12 > .header-action-link > :nth-child(2) > .offcanvas-toggle').click()
        cy.get('.offcanvas-cart-action-button > :nth-child(2) > .theme-btn-one').click()
        cy.get('#fname').type(nome)
        cy.get('#lname').type(sobrenome)
        cy.get('#cname').type(empresa)
        cy.get('#email').type(email)
        cy.get('#country').select('usa')
        cy.get('#city').select('Afghanistan')
        cy.get('#zip').type(zipCode)
        cy.get('#faddress').type(endereco)
        cy.get('#messages').type(paragrafo)
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get(':nth-child(2) > h3').should("have.text", "Billings Information registred with success!")
        cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()
        cy.get('h2').should("have.text", "Order success!")
        cy.get('.offer_modal_left > h3').should("have.text", "Congrats! Your order was created with sucess!")

      });

      it('Comprar pela lista de exibição mesmo item ', () => {
        cy.visit('https://automationpratice.com.br/my-account'); 
        cy.get('.has-dropdown.has-megaitem > a').realHover();
        cy.get('.mega-menu').should('be.visible');
        cy.wait(500);
        cy.contains('a', 'Shop List View').click({ force: true });
        cy.url().should('include', '/shoplist');
        cy.get(':nth-child(1) > .product_wrappers_list > .row > .col-lg-9 > .content > .add-to-cart').click()
        cy.get('#swal2-title').should('have.text', 'Success!');
        cy.get('#swal2-title', { timeout: 10000 }).should('not.exist');  // Aumenta o timeout para 10 segundos
        cy.get(':nth-child(1) > .product_wrappers_list > .row > .col-lg-9 > .content > .add-to-cart').click()
        cy.get('#swal2-title').should('have.text', 'Failed!');
      });

      it('Limpar Carrinho pela lista de exibição', () => {
        cy.visit('https://automationpratice.com.br/my-account'); 
        cy.get('.has-dropdown.has-megaitem > a').realHover();
        cy.get('.mega-menu').should('be.visible');
        cy.wait(500);
        cy.contains('a', 'Shop List View').click({ force: true });
        cy.url().should('include', '/shoplist');
        cy.get(':nth-child(1) > .product_wrappers_list > .row > .col-lg-9 > .content > .add-to-cart').click()
        cy.get('#swal2-title').should('have.text', 'Success!');
        cy.get('#swal2-title', { timeout: 10000 }).should('not.exist');  // Aumenta o timeout para 10 segundos
        cy.get('.col-12 > .header-action-link > :nth-child(2) > .offcanvas-toggle > .fa').click()
        cy.get('.offcanvas-cart-action-button > :nth-child(1) > .theme-btn-one').click()
        cy.get('.cart_submit > .theme-btn-one').click()
        cy.get('.empaty_cart_area > h3').should('have.text', 'Sorry Mate... No Item Found Inside Your Cart!');
      });
});