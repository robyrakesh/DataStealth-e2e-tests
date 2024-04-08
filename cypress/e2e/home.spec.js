/// <reference types="cypress" />

import { landingPage, contactPage } from '../pages/index'
import { userDetails } from '../fixtures/test_data'

  describe('Validate Landing Page', function() {
    beforeEach(function()  {
      cy.visit('/')
    })

    it('Validate home page', function() {
      landingPage.verifyNavigationMenu()
      cy.get('.div-block-147').contains('Data Discovery').should('be.visible')
      cy.get('.div-block-147').contains('Data Classification').should('be.visible')
    })
    
  })

  

