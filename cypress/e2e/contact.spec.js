/// <reference types="cypress" />

import { landingPage, contactPage } from '../pages/index'
import { userDetails } from '../fixtures/test_data'

  describe('Validate Landing Page', function() {
    beforeEach(function()  {
      cy.visit('/')
      landingPage.navigateToContactUsPage()
      cy.intercept('POST', '/api/v1/form/**').as('submitForm')
    })

    it('Validate Contact Us', function() {
      //verify contact information is being displayed
      contactPage.verifyContactDetails()
      //verify successful form submission
      contactPage.fillForm(userDetails)
      contactPage.verifySuccessfulFormSubmission()
      //validating backend api response for form submission
      cy.wait('@submitForm').then(({response}) => {
        expect(response.statusCode, 'response status').to.be.eq(200)
        expect(response.body.msg, 'response body msg').to.be.eq('ok')
        expect(response.body.code, 'response body code').to.be.eq(200)
      })
    })
    
  })

  

