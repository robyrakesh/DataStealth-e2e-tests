/// <reference types="Cypress" />

const TALK_TO_AN_EXPERT = '.main-button.bc-brand2.nav.w-button'

export default class landingPage {

  static navigateToContactUsPage() {
    cy.get(TALK_TO_AN_EXPERT).should('be.visible').click({force:true})
    cy.url().should('include', '/contact-us')
  }

  static verifyNavigationMenu() {
    cy.get('.nav-menu-2.w-nav-menu').within(($el) => {
      expect($el.find('.menu-dropdown-toggle-2._2').length).eq(3)
      expect($el.find('.dropdown.w-dropdown').length).eq(2)
      expect($el.find(TALK_TO_AN_EXPERT).length).eq(1)
    })
  }

}
