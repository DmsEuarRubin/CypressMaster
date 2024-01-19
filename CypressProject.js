describe("CYPRESS DESCRIBE", () => {

    it('Cypress: testing rahulshettyacademy.com', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/');
        cy.url().should('eq', 'https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('div#root > div > div > div > div:nth-child(1) > div > a.increment').click();
        cy.get('div#root > div > div > div > div:nth-child(1) > div > input.quantity').should('have.value', '2');
        cy.get('div#root > div > div > div > div:nth-child(1) > h4').should('contain', 'Brocolli - 1 Kg');
        cy.get('div#root > div > div > div > div:nth-child(1) > div > button').click();
        cy.get('img[alt="Cart"]').click();
        cy.get('div[class="cart-preview active"] ul.cart-items > li:nth-child(1) > div > p.product-name').should('contain', "Brocolli - 1 Kg");
        cy.get('div.action-block').first().children("button").click();
        cy.get('div.products-wrapper > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > p').should('contain', "Brocolli - 1 Kg");
        cy.get('button').last().should('contain', "Place Order").click();
        cy.get('select').select(9).should('contain', 'Armenia');
        cy.get('input[type="checkbox"]').check();
        cy.get('button').should('contain', 'Proceed').click();
        cy.get('span').should('contain', "Thank you, your order has been placed successfully");
        
    })
    

})