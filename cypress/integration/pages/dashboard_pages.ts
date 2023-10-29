export class DashboardPage{
    link_sauceLabsOnesie = 'Sauce Labs Onesie'
    link_sauceLabsBike = 'Sauce Labs Bike Light'
    link_sauceLabsjacket= 'Sauce Labs Fleece Jacket'
    btn_OnesiesAddToCart = '#add-to-cart-sauce-labs-onesie'
    btn_backToProducts = '#back-to-products'
    btn_BikeaddToCart = '#add-to-cart-sauce-labs-bike-light'

    sauceLabsJacket(){
        cy.contains(this.link_sauceLabsjacket).click()
        cy.contains('Sauce Labs Fleece Jacket').should('be.visible') 
    }

    //add new Sauce Labs Onesie add to cart
    sauceLabsOnesie(){
        cy.contains(this.link_sauceLabsOnesie).click()
        cy.contains('Sauce Labs Onesie').should('be.visible') 
        cy.get(this.btn_OnesiesAddToCart).click()
        cy.contains('Remove').should('be.visible') 
    }
    //back to pruduct list on dashboard
    clickBackToProducts(){
        cy.get(this.btn_backToProducts).click()
        cy.get('.title').should('be.visible')
        // cy.get('.peek').should('be.visible')
        cy.contains('Products').should('contain','Products')

    }
    //add new Sauce Labs Bike Light add to cart
    sauceLabsBike(){
        cy.contains(this.link_sauceLabsBike).click()
        cy.contains('Sauce Labs Bike Light').should('be.visible') 
        cy.get(this.btn_BikeaddToCart).click()
        cy.contains('Remove').should('be.visible') 
    }
}